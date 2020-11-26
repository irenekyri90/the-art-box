# THE ART BOX
![welcomepic](/public/images/welcomepic.jpg)


## Description

This is a search platform for people to find different types of DIY arts and crafts and also to upload their own ideas to the app.

## User Stories

- **homepage** - As a user I want to be able to access the homepage and filter by category of DIY crafts, log in and sign up.
- **sign up** - As a user I want to sign up on the web page so that I can add my own ideas and also leave reviews for other artists
- **login** - As a user I want to be able to log in on the web page so that I can get back to my account
- **logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account
- **profile page with favorites list** - As a user I want to see my account details plus the list of my favorite posts that I would like to try and tick them off once done.
- **add/edit/delete post**- As a user I want to be able to edit or delete my posts.
- **seach/category-results** - As a user I want to see the list of DIY crafts that I search for.
- **detailed view of craft** - As a user I want to see more details of the craft i would like to try and be able to save it in my favorites for future reference

## Server Routes (Back-end):

| **Method** | **Route**            | **Description**                                              | Request - Body                                               |
| ---------- | -------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `GET`      | `/`                  | Main page route. Renders `Home` view.                        |                                                              |
| `GET`      | `/login`             | Renders `Login` form view.                                   |                                                              |
| `POST`     | `/login`             | Sends Login form data to the server.                         | {username, password}                                         |
| `GET`      | `/signup`            | Renders `Signup` form view.                                  |                                                              |
| `POST`     | `/signup`            | Sends Sign Up info to the server and creates user in the DB. | {username,email, password}                                   |
| `GET`      | `/logout`            | Logs out the user and sends him back to `Login` page.        |                                                              |
| `GET`      | `/results/:category` | Renders results page                                         |                                                              |
| `GET`      | `/details/:id`       | Renders detailed view of specific craft                      |                                                              |
| `GET`      | `/favorites`         | Private route. Renders favorites list aswell as user's own posts |                                                              |
| `GET`      | `/addPost`           | Renders form where user can add his own craft idea to the DB |                                                              |
| `POST`     | `/addPost`           | Sends user input to the server and saves newly created craft to the DB. | {title, imageURL, category, description, materials, instructions} |
| `GET`      | `/savePost/:id`      | User can save posts to his favorites page.                   |                                                              |
| `GET`      | `/unsavePost/:id`    | User can remove posts from their favorites page.             |                                                              |
| `GET`      | `/deletePost/:id`    | User can delete his own posts.                               |                                                              |
| `GET`      | `/editPost/:id`      | User can edit his own posts.                                 |                                                              |
| `POST`     | `/editPost/:id`      | Sends user input to the server and updates craft that was edited in the DB. | {title, imageURL, category, description, materials, instructions} |
| `GET`      | `/craft-search`      | User can search for ideas by keyword.                        |                                                              |

## Models

User model

```
 {
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    favorites: [{ type: Schema.Types.ObjectId, ref: "Craft" }],
    posts: [{ type: Schema.Types.ObjectId, ref: "Craft" }],
  }
```

Craft model

```
 {
    title: { type: String },
    imageURL: { type: String },
    category: { type: String },
    description: { type: String },
    materials: { type: [String] },
    instructions: { type: [String] },
    favoritedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
    createdBy: { type: Schema.Types.ObjectId, ref: "User", default: null },
  }
```

## Backlog

- add functionality that users can add reviews on other users' posts

## Links

### Git

Repository Link

Deploy Link

### Wireframes

https://www.figma.com/file/rLXhujhqNLjl1R7FkxHviv/The-Art-Box?node-id=1%3A16

https://www.figma.com/file/4VmmKryDrgBtNXHrnTiXSw/The-Art-Box?node-id=0%3A1

### Trelloboard

https://trello.com/b/rubzmtQW/todo

### Slides

https://docs.google.com/presentation/d/1fPd4-N9Ni06AqSUoN3xFw1r28bZ7gstBLiI0irV81pU/edit?usp=sharing
