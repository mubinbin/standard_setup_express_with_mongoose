const JokeController = require("../controllers/joke.controllers")

module.exports = app => {
    app.get("/api/jokes", JokeController.findAllJokes);
    app.get("/api/jokes/:id", JokeController.findOneJoke);
    app.get("/api/randomjoke", JokeController.findOneRandom);
    app.post("/api/jokes/new", JokeController.createJoke);
    app.put("/api/jokes/update/:id", JokeController.updateJoke);
    app.delete("/api/jokes/delete/:id", JokeController.deleteOneJoke);
};