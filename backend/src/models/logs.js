const mongoose  = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');
const { ObjectId } = mongoose.Schema;

const logsSchema = new mongoose.Schema(
  {
    ip: {
      type: String,
      required: true
    },
    userid: {
      type: String,
      required: false
    },
    log: {
      type: String,
      required: true
    }
  },
  { timestamps: { createdAt: 'createdAt' } }
);

logsSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Logs", logsSchema);
