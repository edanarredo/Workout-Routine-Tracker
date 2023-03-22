const express = require("express");

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
  const { title, reps, weight } = req.body;
  
  try {
    const workout = await Workout.create({ title, reps, weight });
    res.status(200).json({ message: `New workout created.`, result: workout });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
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