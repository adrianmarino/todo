# TODO
A simple todo application

## Install
```bash
npm install
```

## Config
Config mongo db connection in ``` lib/config/development.yml ```.

## Use
**Step 1:** Start app:
```bash
npm run app
```

**Step 2:** Test these:
* GET
    * Url: ```/todos```
    * Url: ```/todos/:id```
* POST
    * Url:  ```/todos```
    * Body: ```{ "text": "A text", "isCompleted": true }```
* PUT
    * Url: ```/todos/:id```
    * Body: ```{ "text": "A text", "isCompleted": true }```
* DELETE
    * Url: ```/todos/:id```
