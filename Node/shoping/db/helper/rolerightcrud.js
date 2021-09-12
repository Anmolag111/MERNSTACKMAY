const roleRightModel=require('../Schema/roleRight')

const roleRightOperations = {
  add(roleRightObject) {
    var promise = roleRightModel.create(roleRightObject);
    return promise;
  },
  async search(roleid) {
    return  await roleRightModel.find({'roleid':roleid})
  },
  update() {},
  remove() {},
};
module.exports = roleRightOperations;
