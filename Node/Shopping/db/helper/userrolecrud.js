const userroleModel=require('../Schema/userRole')

const userRoleOperations = {
  add(userRoleObject) {
    var promise = userroleModel.create(userRoleObject);
    return promise;
  },
  async search(uid) {
    const userroleInfo=await userroleModel.findOne({'userid':uid});
    return userroleInfo;
  },
  update() {},
  remove() {},
};
module.exports = userRoleOperations;
