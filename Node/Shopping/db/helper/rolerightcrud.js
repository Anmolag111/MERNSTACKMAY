const roleRightModel=require('../Schema/roleRight')

const roleRightOperations = {
  add(roleRightObject) {
    var promise = roleRightModel.create(roleRightObject);
    return promise;
  },
  search(roleRightObject) {
    
  },
  update() {},
  remove() {},
};
module.exports = roleRightOperations;
