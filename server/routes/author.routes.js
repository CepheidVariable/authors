const AuthorController = require('../controllers/author.controller');

module.exports = app => {
    app.get('/api/authors', AuthorController.index);
    app.get('/api/authors/:id', AuthorController.show);
    app.post('/api/authors', AuthorController.create);
    app.put('/api/authors/:id', AuthorController.update);
    app.delete('/api/authors/:id', AuthorController.delete);
}