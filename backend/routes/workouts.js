const express = require("express");
const { createWorkout, listWorkouts, getWorkoutById, deleteWorkoutById, updateWorkoutById } = require("../controllers/workout/workoutController");

// Creates an instance of the router for us.
const router = express.Router();

// Get all workouts
router.get('/', (req, res) => {
    res.json({ message: 'Get all workouts.' });
});

// Get a single workout
router.get("/", (req, res) => {
  res.json({ message: "Get a single workout" });
});

// Get a single workout by id
router.get("/:id", (req, res) => {
  res.json({ message: `Get a single workout by ID` });
});

// Create a new workout
router.post("/", async (req, res) => {
  
});

// Delete a workout by id
router.delete("/:id", (req, res) => {
  res.json({ message: `Delete a workout by ID` });
});

// Update a workout by id
router.patch("/:id", (req, res) => {
  res.json({ message: `Update a workout by ID` });
});

module.exports = router;