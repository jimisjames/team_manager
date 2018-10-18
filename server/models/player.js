var mongoose = require('mongoose')

var PlayerSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    position: { type: String },
    game_one: { type: String, default: "undecided"},
    game_two: { type: String, default: "undecided"},
    game_three: { type: String, default: "undecided"}
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'} })

mongoose.model('Player', PlayerSchema);