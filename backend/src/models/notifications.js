const mongoose  = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');
const { ObjectId } = mongoose.Schema;

const notificationsSchema = new mongoose.Schema(
  {
    userid: {
      type: ObjectId,
      ref: "Users",
      required: true
    },
    title: {
      type: String,
      required: true
    },
    notification: {
      type: String,
      required: true
    }
  },
  { timestamps: { createdAt: 'createdAt' } }
);

notificationsSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Notifications", notificationsSchema);
