API documentation

### API Documentation

All routes and data models for the API. I've used verbs to specify the type of operation being done and nouns when naming endpoints.

#### Routes

##### Recommendation routes

| HTTP verb | URL                                       | Request body | Action                                              |
| --------- | ----------------------------------------- | ------------ | -----------------------------                       |
| GET       | `/api/recommendations `                   | (empty)      | Returns all the recommendations                     |
| POST      | `/api/recommendations`                    | JSON         | Adds a new recommendation                           |
| GET       | `/api/recommendations/:recommendationId`  | (empty)      | Returns the specified recommendation                |
| PUT       | `/api/recommendations/:recommendationId`  | JSON         | Edits the specified recommendation                  |
| DELETE    | `/api/recommendations/:recommendationId`  | (empty)      | Deletes the specified recommendation                |

##### Comments routes

| HTTP verb | URL                                | Request body | Action                                              |
| --------- | -----------------------------------| ------------ | -------------------------------------------------   |
| POST      | `/api/comments`                    | JSON         | Adds a new comment                                  |
| GET       | `/api/comments/:recommendationId`  | (empty)      | Returns comments for the specified recommendation   |

##### User routes

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
