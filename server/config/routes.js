var players = require('../controllers/players.js')

module.exports = function (app) {

    app.get('/players', function (req, res) {
        players.all(req, res)
    })

    app.post('/', function (req, res) {
        players.new(req, res)
    })

    app.delete('/:id', function (req, res) {
        players.delete(req, res, req.params.id)
    })
    
    app.put('/', function (req, res) {
        players.update(req, res)
    })

    /* app.get('/blah/:id', function (req, res) {
        players.getById(req, res, req.params.id)
    }) */

}