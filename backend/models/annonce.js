const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnnonceSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String
    },
    text: {
        type: String,
        required: true
    },
    categorie: {
        type:String,
        required:true
    },
    zone: {
        type:String,
        required:true
    },
    name: {
        type: String
    },
    views: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    },
    avatar: {
        type: String
    },
    comments : [{
        comment : 
        {
            type: String,
            required: true
        },
        date: {
            type:Date,
            default: Date.now
        },
        user: {
            type:Schema.Types.ObjectId,
            ref: 'users'
        }
    }]

});


const Annonces = mongoose.model('Annonces', AnnonceSchema);
module.exports = Annonces;