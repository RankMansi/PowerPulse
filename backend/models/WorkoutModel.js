const mongoose = require('mongoose')

// This is just a Schema of how the inputs will be taken

const Schema = mongoose.Schema
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required:true
    },
    load: {
        type: Number,
        required: true
    }
}, {timestamps: true})
// Here, timestamps will be shown in the interface of the website so that one can know exactly that at which time that particular workout was created.

module.exports = mongoose.model('Workout', workoutSchema) 
