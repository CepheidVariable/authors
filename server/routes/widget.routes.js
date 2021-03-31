const WidgetController = require('../controllers/widget.controller');

module.exports = app => {
    app.get('/api/widgets', WidgetController.index);
    app.get('/api/widgets/:id', WidgetController.show);
    app.post('/api/widgets', WidgetController.create);
    app.put('/api/widgets/:id', WidgetController.update);
    app.delete('/api/widgets/:id', WidgetController.delete);
}