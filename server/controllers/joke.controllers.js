const Joke = require("../models/joke.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
    .then(allJokes => res.json({jokes: allJokes}))
    .catch(err => res.json({message: "Something went wrong", error: err}));
};

module.exports.findOneJoke = (req, res) => {
    Joke.findById(req.params.id)
    .then(oneJoke => res.json({joke: oneJoke}))
    .catch(err=>res.json({message: "Something went wrong", error: err}));
};

module.exports.findOneRandom = (req, res) => {
    const counter = Joke.estimatedDocumentCount(
        (err, count)=>{
            const rand = Math.floor((Math.random()*count));
            Joke.findOne().skip(rand)
            .then(oneRandomJoke => res.json({joke: oneRandomJoke}))
            .catch(err => res.json({message: "Something went wrong", error: err}));
        }
    );
};

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
    .then(newJoke => res.json({joke: newJoke}))
    .catch(err => res.json({message: "Something went wrong", error: err}));
};

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(updatedJoke => res.json({joke: updatedJoke}))
    .catch(err => res.json({message: "Something went wrong", error: err}));
};

module.exports.deleteOneJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
    .then(result => res.json({result: result}))
    .catch(err => res.json({message: "Something went wrong", error: err}));
};