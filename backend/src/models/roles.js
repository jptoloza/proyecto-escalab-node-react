const mongoose  = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

const rolesSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
      unique: true
    },
  },
  { timestamps: { createdAt: 'createdAt' } }
);

rolesSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Roles", rolesSchema);