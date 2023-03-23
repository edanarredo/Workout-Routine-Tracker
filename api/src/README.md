# Project structure 

| File or folder    | Description                                                                                                                                                                                                                 |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/server.js`    | The entry file. This is where we setup middleware, attach routes, initialize database and express.                                                                                                                          |
| `src/routes.js`   | This is where we define all routes, both public and private                                                                                                                                                             |
| `src/controllers` | Controllers listen to client's requests and work with entities and the database to fetch, add, update, or delete data.                                                                                                      |
| `src/database`    | Database related code and models go here.                                                                                                                                                                                    |
| `src/utils`       | Utility(helper) functions that are used in multiple places across the codebase.