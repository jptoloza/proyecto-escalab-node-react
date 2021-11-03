const mongoose  = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');
const { ObjectId } = mongoose.Schema;

const usersNotificationsSchema = new mongoose.Schema(
  {
    userid: {
      type: ObjectId,
      ref: "Users",
      required: true
    },
    notificationid: {
      type: ObjectId,
      ref: "Notifications",
      required: true
    },
    read: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: { createdAt: 'createdAt' } }
);

usersNotificationsSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("UserNotifications", usersNotificationsSchema);
