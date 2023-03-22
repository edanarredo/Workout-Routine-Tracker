const express = require("express");
const { 
    createWorkout, 
    listWorkouts, 
    getWorkoutById, 
    deleteWorkoutById, 
    updateWorkoutById 
} = require("../controllers/workout/workoutController");

// Creates an instance of the router for us.
const router = express.Router();

router.get('/', listWorkouts);
router.get("/:id", getWorkoutById);
router.post("/", createWorkout);
router.delete("/:id", deleteWorkoutById);
router.patch("/:id", updateWorkoutById);

module.exports = router;