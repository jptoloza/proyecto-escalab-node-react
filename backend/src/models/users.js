const mongoose  = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

const usersSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    rut: {
      type: Number,
      required: true
    },
    dv: {
      type: String,
      maxlength: [1, "Too long"],
    },
    foto: {
      type: String
    },
    active: {
      type: Boolean,
      default: true
    },
    online: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: { createdAt: 'createdAt' } }
);

usersSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Users", usersSchema);