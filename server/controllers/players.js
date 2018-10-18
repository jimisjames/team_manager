
var mongoose = require('mongoose'),
Player = mongoose.model('Player')


module.exports = {

    all: function(req, res) {
        Player.find({}, function(err, data){
            if(err){
                console.log("error")
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", players: data});
            }
        })
    },

    new: function(req, res) {
        console.log(req.body)
        var player = new Player({ name: req.body.name, position: req.body.position });

        player.save(function (err) {
            if (err) {
                console.log('something went wrong');
                res.json({message: "Error", error: err});
            } else {
                //console.log('successfully added a player!');
                res.json({message: "Success"});
            }
        })
    },

    delete: function(req, res, id) {
    	Player.deleteOne({ _id: id }, function (err) {
            if (err) {
                console.log('something went wrong');
                res.json({message: "Error", error: err});
            } else {
                //console.log('successfully removed player');
                res.json({message: "Success"});
            }
        })
    },

    update: function(req, res) {
        console.log(req.body)
        let x = { $set: {[`${req.body.game}`]: req.body.status }}
        Player.update({ _id: req.body.id }, x, function (err) {
            if (err) {
                console.log('something went wrong');
                res.json({message: "Error", error: err});
            } else {
                console.log('successfully updated player');
                res.json({message: "Success"});
            }
        })
    },

    /* getById: function(req, res, id) {
        Product.findOne({ _id: id }, function (err, data) {
            if (err) {
                console.log(err)
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", product: data});
            }
        })
    }, */


}