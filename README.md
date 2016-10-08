# TODO
A simple todo app.

## Requisites
* nodejs
* mongodb

## Install
```bash
npm install
```

## Config
Config file: ``` server/config/development.yml ```.

## Use
**Step 1:** Start app:
```bash
npm run app
```

**Step 2:** Got to [front end](http://localhost:8080).

## Services

* Create a task:
    * Method: post
    * Url:  ```/api/v1/todos```
    * Body:
        * ```{ "text": "A text", "completed": false }```
        * ```{ "text": "A text" }```
* Get a task:
    * Method: get
    * Url: ```/api/v1/todos/:id```
* Get all tasks:
    * Method: get
    * Url: ```/api/v1/todos```
* Update a task:
    * Method: put
    * Url: ```/api/v1/todos/:id```
    * Body:
        * ```{ "text": "A text", "completed": true }```
        * ```{ "text": "A text" }```
        * ```{ "completed": true }```
* Delete a task:
    * Method: delete
    * Url: ```/api/v1/todos/:id```

# Commands

* ``` npm run app```: Update public directory with front-end app and run the server.
* ``` npm run back-end```: Only run the server.
* ``` npm run public-auto-update```: Run a daemon that autoupdate public directory after any code change on front-end app.