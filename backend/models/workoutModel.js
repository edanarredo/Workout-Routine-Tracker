const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defines the schema for the model
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    }
}, { timestamps: true });

// Applies the schema to the model
const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;