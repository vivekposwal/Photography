const mongoose = require("mongoose");
const querySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  DnT: {
    type: String,
    required: true,
  },
  ask: {
    type: String,
    required: true,
  },
});
const Query = mongoose.model("Query", querySchema);
module.exports = Query;
