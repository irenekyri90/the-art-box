const React = require("react");
const Layout = require("./Layout");

function AddPost(props) {
  return (
    <Layout>
      <h3>ADD A POST, {props.user.username}</h3>

      <form
        id="add-craft"
        action="/addPost"
        method="POST"
        encType="multipart/form-data"
      >
        <label>Craft Name:</label>
        <input
          type="text"
          name="title"
          placeholder="e.g. Rustic Candle Holders"
        />

        <br />

        <label>Upload a picture of your craft</label>
        <input type="file" name="imageURL" />
        <br />

        <h3>Materials</h3>
        <input type="text" name="materials" placeholder="e.g wood"/>
        <input type="text" name="materials" />
        <input type="text" name="materials" />
        <input type="text" name="materials" />
        <input type="text" name="materials" />
        <input type="text" name="materials" />
        <input type="text" name="materials" />

        <br />
        <h3>Instruction Steps</h3>
        <input type="textarea" name="instructions" />
        <input type="textarea" name="instructions" />
        <input type="textarea" name="instructions" />
        <input type="textarea" name="instructions" />
        <input type="textarea" name="instructions" />

        <h3>Choose the category, your craft fits into:</h3>
        <div>
          <label for="wellness">Wellness</label>
          <input type="radio" name="category" id="wellness" value="Wellness" />

          <label for="gardening">Gardening</label>
          <input
            type="radio"
            name="category"
            id="gardening"
            value="Gardening"
          />

          <label for="misc">Misc</label>
          <input type="radio" name="category" id="misc" value="Misc" />

          <label for="home-decor">Home Decor</label>
          <input
            type="radio"
            name="category"
            id="home-decor"
            value="Home Decor"
          />

          <label for="jewelry">Jewelry</label>
          <input type="radio" name="category" id="jewelry" value="Jewelry" />
        </div>
        <button type="submit" className="shareButton">
          Add your craft to our collection!
        </button>
      </form>
    </Layout>
  );
}

module.exports = AddPost;
