const express = require("express");
const Craft = require("../models/Craft.model");
const User = require("../models/User.model");
const siteRouter = express.Router();
const isLoggedIn = require("../utils/isLoggedIn");
const parser = require("./../config/cloudinary");

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
    .populate("posts")
    .populate("favorites")
    .then((user) => {
      //console.log("USER POSTS:", user.posts);

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

  //console.log("TITLE INPUT", req.body.title);

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
      const { _id } = req.session.currentUser;
      console.log("USER ID: ", _id);
      User.findByIdAndUpdate(
        _id,
        { $push: { posts: createdCraft } },
        { new: true }
      )
        .then((user) => {
          console.log("USER", user);
          res.redirect("/favorites");
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});

siteRouter.get("/savePost/:id", isLoggedIn, (req, res, next) => {
  const craftId = req.params.id;
  const { _id } = req.session.currentUser;

  Craft.findByIdAndUpdate(
    craftId,
    { $push: { favoritedBy: _id } },
    { new: true }
  )
    .then((craft) => {
      console.log("User added to Craft");
    })
    .catch((err) => console.log(err));

  User.findById(_id).then((user) => {
    if (user.favorites.includes(craftId)) {
      console.log("already included");
      res.redirect("/");
    } else {
      console.log("not included");
      User.findByIdAndUpdate(
        user._id,
        { $push: { favorites: craftId } },
        { new: true }
      )
        .then((user) => {
          console.log("UPDATED USER:", user);
          res.redirect("/favorites");
        })
        .catch((err) => console.log(err));
    }
  });
});

siteRouter.get("/unsavePost/:id", isLoggedIn, (req, res, next) => {
  const craftId = req.params.id;
  const { _id } = req.session.currentUser;

  Craft.findByIdAndUpdate(
    craftId,
    { $pull: { favoritedBy: _id } },
    { new: true }
  )
    .then((craft) => {
      console.log("User removed from Craft");
    })
    .catch((err) => console.log(err));

  User.findById(_id).then((user) => {
   
      User.findByIdAndUpdate(
        user._id,
        { $pull: { favorites: craftId } },
        { new: true }
      )
        .then((user) => {
          console.log("UPDATED USER:", user);
          res.redirect("/favorites");
        })
        .catch((err) => console.log(err));
    })
});


siteRouter.get("/deletePost/:id", isLoggedIn, (req, res, next) => {
  const craftId = req.params.id;
  console.log("CRAFTID:", craftId);
  Craft.findOneAndDelete({ _id: craftId })
    .then((deletedCraft) => {
      res.redirect("/favorites");
    })
    .catch((err) => console.log(err));
});

siteRouter.get("/editPost/:id", isLoggedIn, (req, res, next) => {
  const craftId = req.params.id;
  const { _id } = req.session.currentUser;
  Craft.findById(craftId)
  .then((craft) => {
    const props = {craft : craft}
    res.render("EditPost", props);
  })
  .catch((err) => {
    console.log(err);
  })
 
})

siteRouter.post("/editPost", parser.single("imageURL"), (req, res, next) => {
  let imageUrl;
  if (req.file) imageUrl= req.file.secure_url;
  
  const { _id } = req.session.currentUser;
  const {
    id,
    title,
    imageURL,
    category,
    description,
    materials,
    instructions,
  } = req.body;

  //console.log("TITLE INPUT", req.body.title);

  Craft.findByIdAndUpdate(id, {
    title: title,
    imageURL: imageUrl,
    category: category,
    description: description,
    materials: materials,
    instructions: instructions,
    //createdBy: _id,
  })
    .then((updatedCraft) => {
      res.redirect("/favorites");
    })
    .catch((err) => console.log(err));
});





module.exports = siteRouter;
