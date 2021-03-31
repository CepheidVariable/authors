const Widget = require('../models/widget.model');

module.exports = {
    index: (req, res) => {
        Widget.find()
            .then(data => res.json({results: data}))
            .catch(err => res.status(404).json({errors: err.errors}))
    },
    show: (req, res) => {
        Widget.find({_id: req.params.id})
            .then(data => res.json({results: data}))
            .catch(err => res.status(404).json({errors: err.errors}))
    },
    create: (req, res) => {
        Widget.create(req.body)
            .then(data => res.json({results: data}))
            .catch(err => res.status(404).json({errors: err.errors}))
    },
    update: (req, res) => {
        Widget.findOneAndUpdate(
            { _id: req.params.id },             //filter
            req.body,                           //replacement
            { new: true, runValidators: true }  //options
        )
            .then(data => res.json({results: data}))
            .catch(err => res.status(404).json({errors: err.errors}))
    },
    delete: (req, res) => {
        Widget.deleteOne({_id: req.params.id})
            .then(() => res.redirect(303, '/api/widgets'))
            .catch(err => res.status(404).json({errors: err.errors}))
    }
}