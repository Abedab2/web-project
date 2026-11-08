# StudyWith – Server

The server side of StudyWith, for the Server-side Programming course. It's built with Node.js and Express and returns JSON.

## How to run

```
cd server
npm install
node app.js
```

Then open http://localhost:3000 in the browser.

## Routes (Exercise 1)

| HTTP method | API URL | Returns |
|-------------|---------|---------|
| GET | `/` | Home page: a welcome message and the list of routes |
| GET | `/api/groups` | An array of all the study groups |
| GET | `/api/groups/open` | The study groups that still have free spots |
| GET | `/api/courses` | An array of all the courses |
| GET | `/api/courses/popular` | The most popular courses |
| GET | any other URL | Error 404: `{ "message": "Route not found" }` |

## Folder structure

```
server/
├── app.js            Creates the server and connects the routers
├── package.json
└── routes/
    ├── groups.js     Study group routes
    └── courses.js    Course routes
```
