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

router.get('/', (req, res) => { listWorkouts });
router.get("/:id", (req, res) => { getWorkoutById });
router.post("/", (req, res) => { createWorkout });
router.delete("/:id", (req, res) => { deleteWorkoutById });
router.patch("/:id", (req, res) => { updateWorkoutById });

module.exports = router;