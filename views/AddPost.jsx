const React = require("react");
const Layout = require("./Layout");

function AddPost(props) {
  return (
    <Layout title="Add a Post">
      <div class="post-intro">
        <h3>add a post, {props.user.username}</h3>
      </div>

      <form
        id="add-craft"
        action="/addPost"
        method="POST"
        encType="multipart/form-data"
      >
        <h3>Craft Name:</h3>
        <input
          type="text"
          name="title"
          placeholder="e.g. Rustic Candle Holders"
          required
        />

        <br />

        <h3>Upload a picture of your craft</h3>
        <input type="file" name="imageURL" className="file-upload" required />
        <br />

        <h3>Materials</h3>
        <input type="text" name="materials" placeholder="e.g wood" required />
        <input type="text" name="materials" />
        <input type="text" name="materials" />
        <input type="text" name="materials" />
        <input type="text" name="materials" />
        <input type="text" name="materials" />
        <input type="text" name="materials" />

        <br />
        <h3>Instruction Steps</h3>
        <textarea name="instructions" class="instruction-field" required />
        <textarea name="instructions" class="instruction-field" />
        <textarea name="instructions" class="instruction-field" />
        <textarea name="instructions" class="instruction-field" />
        <textarea name="instructions" class="instruction-field" />

        <h3 id="category-heading">
          Choose the category, your craft fits into:
        </h3>
        <div id="radio-buttons">
          <div class="category-selector">
            <label for="wellness">Wellness</label>
            <input
              type="radio"
              name="category"
              id="wellness"
              value="Wellness"
              required
            />
          </div>

          <div class="category-selector">
            <label for="gardening">Gardening</label>
            <input
              type="radio"
              name="category"
              id="gardening"
              value="Gardening"
            />
          </div>

          <div class="category-selector">
            <label for="misc">Misc</label>
            <input type="radio" name="category" id="misc" value="Misc" />
          </div>

          <div class="category-selector">
            <label for="home-decor">Home Decor</label>
            <input
              type="radio"
              name="category"
              id="home-decor"
              value="Home Decor"
            />
          </div>

          <div class="category-selector">
            <label for="jewelry">Jewelry</label>
            <input type="radio" name="category" id="jewelry" value="Jewelry" />
          </div>
        </div>
        <button type="submit" className="shareButton" id="addButton">
          Add your craft to our collection!
        </button>
      </form>
    </Layout>
  );
}

module.exports = AddPost;
