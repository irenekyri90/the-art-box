const React = require("react");
const Layout = require("./Layout");

function EditPost(props) {
  return (
    <Layout title="Edit your Post">
      <div class="post-intro">
        <h3>edit your post</h3>
        <div>
          <img src="./../images/pen.png" id="pen" />
        </div>
      </div>

      <form
        id="add-craft"
        action="/editPost"
        method="POST"
        encType="multipart/form-data"
      >
        <input type="text" name="id" value={props.craft._id} id="hideId" />

        <br />

        <h3>Craft Name:</h3>
        <input type="text" name="title" value={props.craft.title} />

        <br />

        <h3>Description</h3>
        <textarea
          name="description"
          class="instruction-field"
          value={props.craft.description}
        />

        <h3>Upload a picture of your craft</h3>
        <input
          type="file"
          name="imageURL"
          value={props.craft.imageURL}
          className="file-upload"
        />
        <br />

        <h3>Materials</h3>
        <input type="text" name="materials" value={props.craft.materials[0]} />
        <input type="text" name="materials" value={props.craft.materials[1]} />
        <input type="text" name="materials" value={props.craft.materials[2]} />
        <input type="text" name="materials" value={props.craft.materials[3]} />
        <input type="text" name="materials" value={props.craft.materials[4]} />

        <br />
        <h3>Instruction Steps</h3>
        <textarea
          class="instruction-field"
          name="instructions"
          value={props.craft.instructions[0]}
        />
        <textarea
          class="instruction-field"
          name="instructions"
          value={props.craft.instructions[1]}
        />
        <textarea
          class="instruction-field"
          name="instructions"
          value={props.craft.instructions[2]}
        />
        <textarea
          class="instruction-field"
          name="instructions"
          value={props.craft.instructions[3]}
        />
        <textarea
          class="instruction-field"
          name="instructions"
          value={props.craft.instructions[4]}
        />

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
          Edit your craft
        </button>
      </form>
    </Layout>
  );
}

module.exports = EditPost;
