const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Craft = require("./Craft.model");

//create schema
const userSchema = new Schema(
  {
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    favorites: [{ type: Schema.Types.ObjectId, ref: "Craft" }],
    posts: [{ type: Schema.Types.ObjectId, ref: "Craft" }],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
