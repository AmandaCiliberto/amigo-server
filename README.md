API documentation

### API Documentation

All routes and data models for the project's API. I've used verbs to specify the type of operation being done and nouns when naming endpoints.

#### Routes

##### Recommendation routes

| HTTP verb | URL                        | Request body | Action                         |
| --------- | -------------------------- | ------------ | -----------------------------  |
| GET       | `/api/recos `              | (empty)      | Returns all the recommendations|
| POST      | `/api/recos`               | JSON         | Adds a new recommendation      |
| GET       | `/api/recos/:recoId`       | (empty)      | Returns the specified reco.    |
| PUT       | `/api/recos/:recoId`       | JSON         | Edits the specified reco.      |
| DELETE    | `/api/recos/:recosId`      | (empty)      | Deletes the specified reco.    |

##### Comments routes

| HTTP verb | URL                  | Request body | Action                        |
| --------- | -------------------- | ------------ | --------------------------    |
| POST      | `/api/comments`      | JSON         | Adds a new comment            |
| DELETE    | `/api/comments`      | (empty)      | Deletes the specified comment |

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
  
}
```

##### Comment Model

```js
{
  
}
```

##### User Model

```js
{
  
}
```