const express = require("express");
const Craft = require("../models/Craft.model");
const User = require("../models/User.model");
const siteRouter = express.Router();
const isLoggedIn = require("../utils/isLoggedIn");
const parser = require('./../config/cloudinary');

// Public routes
// GET     /site/...
siteRouter.get("/results/:category", (req, res, next) => {
  const category = req.params.category;
  console.log(
    `THE CATEGORY IS: ${category} and the type is ${typeof category}`
  );
  Craft.find({ category: category })
    .then((craftsFromDB) => {
      const props = { crafts: craftsFromDB };
      console.log(props.crafts);
      res.render("Results", props);
    })
    .catch((err) => {
      console.log(err);
    });
});

siteRouter.get("/details/:id", (req, res, next) => {
  const craftId = req.params.id;
  console.log("CRAFTID:", craftId);
  Craft.findById(craftId)
    .then((craft) => {
      console.log("CRAFT: ", craft);
      const props = { craft: craft };
      res.render("Details", props);
    })
    .catch((err) => console.log(err));
});

// Private routes

siteRouter.get("/favorites", isLoggedIn, (req, res, next) => {
  const { _id } = req.session.currentUser;
  User.findById(_id)
    .then((user) => {
      console.log(user);
      const props = { user: user };
      res.render("Favorites", props);
    })
    .catch((err) => console.log(err));
});

siteRouter.get("/addPost", isLoggedIn, (req, res, next) => {
  const { _id } = req.session.currentUser;
  User.findById(_id)
    .then((user) => {
      console.log(user);
      const props = { user: user };
      res.render("AddPost", props);
    })
    .catch((err) => console.log(err));
});

siteRouter.post("/addPost", parser.single("imageURL"), (req, res, next) => {
  const imageUrl = req.file.secure_url;
  const { _id } = req.session.currentUser;
  const {
    title,
    imageURL,
    category,
    description,
    materials,
    instructions,
  } = req.body;

  console.log("TITLE INPUT", req.body.title)

  Craft.create({
    title: title,
    imageURL: imageUrl,
    category: category,
    description: description,
    materials: materials,
    instructions: instructions,
    createdBy: _id,
  })
    .then((createdCraft) => {
      res.redirect("/results");
    })
    .catch((err) => console.log(err));
});

module.exports = siteRouter;
