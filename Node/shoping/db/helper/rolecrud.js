const roleModel=require('../Schema/roles')

const roleOperations = {
  add(roleObject) {
    var promise = roleModel.create(roleObject);
    return promise;
  },
  async search(roleId){
    const roleInfo = await roleModel.findOne({_id:roleId});
    return roleInfo;
  },
  update() {},
  remove() {},
};
module.exports = roleOperations;
