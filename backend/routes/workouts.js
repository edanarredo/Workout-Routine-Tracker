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

router.get('/', async (req, res) => { listWorkouts(req, res) });
router.get("/:id", async (req, res) => { getWorkoutById(req, res) });
router.post("/", async (req, res) => { createWorkout(req, res) });
router.delete("/:id", async (req, res) => { deleteWorkoutById(req, res) });
router.patch("/:id", async (req, res) => { updateWorkoutById(req, res) });

module.exports = router;