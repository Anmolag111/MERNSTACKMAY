const roleModel=require('../Schema/roles')
const bcrypt = require("../../utils/encrypt");
//const { DocumentProvider } = require('mongoose');
const roleOperations = {
  add(roleObject) {
    var promise = roleModel.create(roleObject);
    return promise;
  },
  async search(uid) {
    const roleInfo=await roleModel.findOne({'userid':uid});
    return roleInfo;
  },
  update() {},
  remove() {},
};
module.exports = roleOperations;
