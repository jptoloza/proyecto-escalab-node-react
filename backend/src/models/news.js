const mongoose  = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');
const { ObjectId } = mongoose.Schema;

const newsSchema = new mongoose.Schema(
  {
    userid: {
      type: ObjectId,
      ref: "Users",
      required: true
    },
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    abstract: {
      type: String,
      required: true,
    },
    externalurl: {
      type: String,
      required: true,
    },
  },
  { timestamps: { createdAt: 'createdAt' } }
);

newsSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("News", newsSchema);