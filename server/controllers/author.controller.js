const Author = require('../models/author.model');

module.exports = {
    index: (req, res) => {
        Author.find().collation({locale: "en" }).sort({name: 1})
            .then(data => res.json({results: data}))
            .catch(err => res.status(404).json({errors: err.errors}))
    },
    show: (req, res) => {
        Author.find({_id: req.params.id})
            .then(data => res.json({results: data}))
            .catch(err => res.status(404).json({errors: err.errors}))
    },
    create: (req, res) => {
        Author.create(req.body)
            .then(data => res.json({results: data}))
            .catch(err => res.status(404).json({errors: err.errors}))
    },
    update: (req, res) => {
        Author.findOneAndUpdate(
            { _id: req.params.id },             //filter
            req.body,                           //replacement
            { new: true, runValidators: true }  //options
        )
            .then(data => res.json({results: data}))
            .catch(err => res.status(404).json({errors: err.errors}))
    },
    delete: (req, res) => {
        Author.deleteOne({_id: req.params.id})
            .then(() => res.redirect(303, '/api/authors'))
            .catch(err => res.status(404).json({errors: err.errors}))
    }
}