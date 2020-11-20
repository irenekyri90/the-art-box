const mongoose = require("mongoose");
const Craft = require("./../models/Craft.model");
const User = require("./../models/User.model");

const crafts = require("./crafts-data");

const DB_NAME = "theArtBoxDB";

// SEED SEQUENCE

// 0. ESTABLISH CONNECTION TO MONGO DATABASE

mongoose
  .connect(`mongodb://localhost:27017/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((x) => {
    // 1. DROP THE DATABASE
    const pr = x.connection.dropDatabase();

    return pr;
  })
  .then(() => {
    // 2.  CREATE THE DOCUMENTS FROM ARRAY OF crafts
    const pr = Craft.create(crafts);
    return pr; //forwards the promise to next `then`
  })
  .then((createdCrafts) => {
    console.log(`Created ${createdCrafts.length} crafts`);

    mongoose.connection.close();
  })
  .catch((err) => console.log(err));
