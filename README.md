# AMIGO SERVER #

### Project Description 📑

AMIGO is a social media platform for recommendations, where users can recommend experiences,  products or places to their friends. Much like twitter, people can create recommendations and comment on each other's posts. 

### User Stories 📋
* As an AMIGO user I would like to create an account to save my user data next time I visit the platform
* As an AMIGO user I would like to Login to my account to go into the system
* As an AMIGO user I would like to Logout of my account so other people can't access my account
* As an AMIGO user I would like to browse the feed of recommendations
* As an AMIGO user I would like to  click on a specific recommendation to view the comments related to it 
* As an AMIGO user I would like to edit a recommendation I created previously to make sure it doesn't contain any mistakes
* As an AMIGO user I would like to delete a recommendation I created previously
* As an AMIGO user I would like to comment on recommendations to have discussions with others online
* As an AMIGO user I would like to receive comments on my recommendations
* As an AMIGO user I would like to see my profile
* As an AMIGO user I would like to see a list of my previously created recommendations
* As an AMIGO user I would like to share my recommendations with people on Twitter
* As an AMIGO user I would like to see relevant Tweets from people I follow on Twitter so I don't miss out on anything on both platforms
* As an AMIGO user I would like to see the list of my friends

### Technologies Used 💻 
#### Frontend 👀
* React JS
* Jsx, CSS , JS
* Grommet
* MUI
#### Backend 🧠
* Mongoose, MongoDB Atlas
* Node JS 
* Express JS

#### Deployment 🙌
* Heroku
* Netlify

#### Highlighted Packages ✨
* react-twitter-embed
* react-modal

### API Documentation 🌈

All routes and data models for the API. I've used verbs to specify the type of operation being done and nouns when naming endpoints.

#### Routes

##### Recommendation routes

| HTTP verb | URL                                       | Request body | Action                                              |
| --------- | ----------------------------------------- | ------------ | -----------------------------                       |
| GET       | `/api/recommendations`                    | (empty)      | Returns all the recommendations                     |
| POST      | `/api/recommendations`                    | JSON         | Adds a new recommendation                           |
| GET       | `/api/recommendations/:recommendationId`  | (empty)      | Returns the specified recommendation                |
| PUT       | `/api/recommendations/:recommendationId`  | JSON         | Edits the specified recommendation                  |
| DELETE    | `/api/recommendations/:recommendationId`  | (empty)      | Deletes the specified recommendation                |
| POST      | `/api/upload`                             | JSON         | Upload images to a specific recommendation          |
| GET       | `/api/profile/:userId`                    | JSON         | Returns recommendations for specific user           |

##### Comments routes

| HTTP verb | URL                                | Request body | Action                                              |
| --------- | -----------------------------------| ------------ | -------------------------------------------------   |
| POST      | `/api/comments`                    | JSON         | Adds a new comment                                  |
| GET       | `/api/comments/:recommendationId`  | (empty)      | Returns comments for the specified recommendation   |

##### Auth/User routes

| HTTP verb | URL                  | Request body | Action                     |
| --------- | -------------------- | ------------ | -------------------------- |
| POST      | `/auth/signup`       | JSON         | Adds a new user            |
| POST      | `/auth/login`        | JSON         | Verifies user exists       |
| GET       | `/auth/verify`       | (empty)      | Verify token stored        |

<hr>

#### Models

##### Recommendation Model

```js
{
    userId: { type: Schema.Types.ObjectId, ref: "User" }, 
    content: String,
    imageUrl: String,
    location: String,
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  {
    timestamps: true,
  }
```

##### Comment Model

```js
{
    date: { type: Date, default: Date.now },
    creator: { type: String },
    content: { type: String },
    recommendation: { type: Schema.Types.ObjectId, ref: "Recommendation" },
  },
  {
    timestamps: true,
  }
```

##### User Model

```js
 {
    name: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    imageUrl: String,
    givenRecommendations: [
      { type: Schema.Types.ObjectId, ref: "Recommendation" },
    ],
    likedRecommendations: [
      { type: Schema.Types.ObjectId, ref: "Recommendation" },
    ],
  },
  { timestamps: true }
```

### Project Links 💫

[AMIGO's SERVER REPO](https://github.com/AmandaCiliberto/amigo-server/ "AMIGO's SERVER REPO")

<hr>

[AMIGO's CLIENT REPO](https://github.com/AmandaCiliberto/amigo-client/ "AMIGO's CLIENT REPO")

<hr>

[TRY AMIGO HERE](https://monamigo.netlify.app/ "TRY AMIGO HERE")


### Future Work 🥸
* Likes on posts
* Edit profile page
* Follow and have followers
* Search for friends
* Accept image type Webp
* Make icons change color on navbar on hover 
* Have profile image
* Implement google places autocomplete
* much more...

### About Me 👩

My name is Amanda Rodrigues, I'm a fullstack web developer based in Denmark and this project has been developed by me in connection with the Ironhack Full Stack Web Development bootcamp. 
