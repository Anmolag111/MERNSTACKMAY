
const UserModel = require("../Schema/user");
const bcrypt = require("../../utils/encrypt");
//const { DocumentProvider } = require('mongoose');
const userOperations = {
  add(userObject) {
    userObject.password = bcrypt.doEncrypt(userObject.password);
    var promise = UserModel.create(userObject);
    return promise;
  },
  search(userObject) {
    var promise = new Promise((resolve, reject) => {
      UserModel.findOne({ userid: userObject.userid },async (err, doc) => {
        if (err) {
          reject(err);
        } else {
          if (doc && doc.userid) {
            let dbPassword = doc.password;
            const encrypt = require("../../utils/encrypt");
            const result = encrypt.compare(userObject.password, dbPassword);
            console.log(userObject.password + " " + dbPassword);
            if (result) {
              let id = doc._id;
              // console.log('id is'+ id);
              const userRoleMapping = require("./userrolecrud");
              const userRoleInfo = await userRoleMapping.search(id);
             // resolve(doc);
              if (userRoleInfo) {
                const role = require("./rolecrud");
                const roleInfo = await role.search(userRoleInfo.roleid);
              }
              const userInfo = require("../../models/userInfo");
              const userInfoObject = new UserInfo(doc.userid, roleInfo.name);
              console.log(":::::UserINFO OBJECT IS ", userInfoObject);
              resolve(userInfoObject);
            } else {
              resolve(null);
            }
          } else {
            resolve(null);
          }
        }
      });
    });
    return promise;
  },
  update() {},
  remove() {},
};
module.exports = userOperations;
