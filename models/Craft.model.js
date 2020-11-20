const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User.model");

//create schema
const craftSchema = new Schema(
  {
    title: { type: String },
    imageURL: { type: String },
    category: { type: String },
    description: { type: String },
    materials: { type: [String] },
    instructions: { type: [String] },
    favoritedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
    createdBy: { type: Schema.Types.ObjectId, ref: "User", default: null },
  },
  {
    timestamps: {
      // https://mongoosejs.com/docs/guide.html#timestamps
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Craft = mongoose.model("Craft", craftSchema);
module.exports = Craft;
