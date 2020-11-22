# THE ART BOX

![welcomepic](/Users/luciaskudlik/Documents/IRONHACK/DIY-CRAFTS/welcomepic.jpg)

## Description

This is a search platform for people to find different types of DIY arts and crafts and also to upload their own ideas to the app.

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage and filter by category of DIY crafts, log in and sign up.
- **sign up** - As a user I want to sign up on the web page so that I can add my own ideas and also leave reviews for other artists
- **login** - As a user I want to be able to log in on the web page so that I can get back to my account
- **logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account
- **profile page with favorites list** - As a user I want to see my account details plus the list of my favorite posts that I would like to try and tick them off once done.
- **edit user** - As a user I want to be able to edit my profile and to edit or delete my posts.
- **seach/category-results** - As a user I want to see the list of DIY crafts that I search for.
- **detailed view of craft** - As a user I want to see more details of the craft i would like to try and be able to save it in my favorites for future reference

## Server Routes (Back-end):

| **Method** | **Route**            | **Description**                                                           | Request - Body              |
| ---------- | -------------------- | ------------------------------------------------------------------------- | --------------------------- |
| `GET`      | `/`                  | Main page route. Renders home `Home` view.                                |                             |
| `GET`      | `/login`             | Renders `Login` form view.                                                |                             |
| `POST`     | `/login`             | Sends Login form data to the server.                                      | {username, email, password} |
| `GET`      | `/signup`            | Renders `Signup` form view.                                               |                             |
| `POST`     | `/signup`            | Sends Sign Up info to the server and creates user in the DB.              | {username,email, password } |
| `GET`      | `/results`           | Renders results page                                                      |                             |
| `GET`      | `/details/:id`       | Renders detailed view of specific craft                                   |                             |
| `GET`      | `/private/favorites` | Private route. Renders favorites list aswell as personalised profile icon |                             |
| `POST`     | `/private/favorites` | adds craft that user likes to his favorites page                          |                             |
| `DELETE`   | `/private/favorites` | Removes craft from favorite list                                          |                             |
| `GET`      | `/private/addPost`   | Renders form where user can add his own craft idea to the DB              |                             |
| `POST`     | `/private/addPost`   | Send user input to the server and save to the DB.                         | {...tbd }                   |
| `PUT`      | `/private/editPost`  | User can edit their own posts.                                            |                             |
| `DELETE`   | `/private/Post`      | User can delete their own posts.                                          |                             |

## Models

User model

```
{
  "username": String,
  "email": String,
  "password": String,
  "created": [{ type: Schema.Types.ObjectId, ref: 'Craft' }],
  "favorites": [{ type: Schema.Types.ObjectId, ref: 'Craft' }]
}
```

Craft model

```
{
  "title": String,
  "image": String,
  "category": String,
  "description": String,
  "materials": [String],
  "instructions": String,
  "favoritedBy": [{ type: Schema.Types.ObjectId, ref: 'User' }],
  "createdBy": { type: Schema.Types.ObjectId, ref: 'User' }
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

Slides Link
