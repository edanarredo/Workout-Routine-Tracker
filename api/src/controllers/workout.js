const { Workout } = require("../database/workoutModel");
const mongoose = require("mongoose");

// GET all workouts
const listWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json({ result: workouts });
};

// GET a single workout
const getWorkoutById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) 
        return res.status(404).json({ error: `${id} is an invalid ID.` });

    const workout = await Workout.findById(id);

    // If the workout is not found, return a 404 error.
    if (!workout) 
        return res.status(404).json({ error: `Workout with id ${id} not found.` });
        
    res.status(200).json({ result: workout });
};

// POST a new workout
const createWorkout = async (req, res) => {
    const { title, reps, weight } = req.body;

    let emptyFields = [];

    if (!title) {
        emptyFields.push("title");
    }
    if (!reps) {
        emptyFields.push("reps");
    }
    if (!weight) {
        emptyFields.push("weight");
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: `The following fields are required: ${emptyFields.join(", ")}`, emptyFields: emptyFields });
    }1
  
    try {
      const workout = await Workout.create({ title, reps, weight });
      res.status(200).json({ message: `New workout created.`, result: workout });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

// DELETE a workout by id
const deleteWorkoutById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).json({ error: `${id} is an invalid ID.` });

    const workout = await Workout.findOneAndDelete({_id: id});

    if (!workout)
        return res.status(400).json({ error: `Workout with id ${id} not found.` });

    res.status(200).json({ message: `Workout deleted.`, result: workout });
};

// UPDATE a workout by id
const updateWorkoutById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) 
        return res.status(404).json({ error: `${id} is an invalid ID.` });

    const workout = await Workout.findByIdAndUpdate({_id: id}, {...req.body});

    if (!workout) 
        return res.status(400).json({ error: `Workout with id ${id} not found.` });
};

module.exports = {
    updateWorkoutById, deleteWorkoutById, createWorkout, getWorkoutById, listWorkouts
}