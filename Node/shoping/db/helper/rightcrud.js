const rightModel=require('../Schema/rights')
const bcrypt = require("../../utils/encrypt");
//const { DocumentProvider } = require('mongoose');
const rightOperations = {
  add(rightObject) {
    var promise = rightModel.create(rightObject);
    return promise;
  },
 async  search(rightID) {
    return await rightModel.find({_id:rightID});
  },
  update() {},
  remove() {},
};
module.exports = rightOperations;
