let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let animalSchema = new Schema({ name: String, type: String });

animalSchema.methods.findSimilarTypes = function(cb) {
  return this.model('Animal').find({ type: this.type }, cb);
};

module.exports = mongoose.model('Animal', animalSchema);
