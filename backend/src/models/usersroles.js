const mongoose  = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');
const { ObjectId } = mongoose.Schema;

const usersRolesSchema = new mongoose.Schema(
  {
    userid: {
      type: ObjectId,
      ref: "Users", 
      required: true 
    },
    roleid: {
      type: ObjectId,
      ref: "Roles",
      required: true
    },
  },
  { timestamps: { createdAt: 'createdAt' } }
);

usersRolesSchema.index({ userid: 1, roleid: 1 }, { unique: true })
usersRolesSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("UsersRoles", usersRolesSchema);
