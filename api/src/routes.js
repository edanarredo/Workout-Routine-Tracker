const express = require("express");
const workouts = require("./controllers/workout.js");

const router = express.Router();

router.get('/workouts/', workouts.listWorkouts);
router.get("/workouts/:id", workouts.getWorkoutById);
router.post("/workouts/", workouts.createWorkout);
router.delete("/workouts/:id", workouts.deleteWorkoutById);
router.patch("/workouts/:id", workouts.updateWorkoutById);

module.exports = router;