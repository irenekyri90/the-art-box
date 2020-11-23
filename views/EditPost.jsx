const React = require("react");
const Layout = require("./Layout");

function EditPost(props) {
  return (
    <Layout>
      <h3>EDIT Your POST</h3>

<form
  id="add-craft"
  action="/editPost"
  method="POST"
  encType="multipart/form-data"
>
<label>ID:</label>
  <h1>{`${props.craft._id}`}</h1>
  <input
    type="text"
    name="id"
    value={props.craft._id}
  />

  <br />

  <label>Craft Name:</label>
  <input
    type="text"
    name="title"
    value={props.craft.title}
  />

  <br />

  <label>Upload a picture of your craft</label>
  <input type="file" name="imageURL" value={props.craft.imageURL}/>
  <br />

  <h3>Materials</h3>
  <input type="text" name="materials" value={props.craft.materials[0]}/>
  <input type="text" name="materials" value={props.craft.materials[1]}/>
  <input type="text" name="materials" value={props.craft.materials[2]}/>
  <input type="text" name="materials" value={props.craft.materials[3]} />
  <input type="text" name="materials" value={props.craft.materials[4]} />

  <br />
  <h3>Instruction Steps</h3>
  <input type="textarea" name="instructions" value={props.craft.instructions[0]}/>
  <input type="textarea" name="instructions" value={props.craft.instructions[1]}/>
  <input type="textarea" name="instructions" value={props.craft.instructions[2]}/>
  <input type="textarea" name="instructions" value={props.craft.instructions[3]}/>
  <input type="textarea" name="instructions" value={props.craft.instructions[4]}/>

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
  <button type="submit">Edit your craft</button>
</form>
    </Layout>
  );
}

module.exports = EditPost;
