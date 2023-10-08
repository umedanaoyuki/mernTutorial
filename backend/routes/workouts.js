const express = require('express')
const {
    createWorkout,getWorkouts, getWorkout
} = require('../controllers/workoutController')


const router = express.Router()

// GET all workouts
router.get('/', getWorkouts)

//GET a single workout
router.get('/:id', getWorkout)

//POST
router.post('/', createWorkout)

//DELETE
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a new workout'})
})

//UPDATE
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a new workout'})
})


module.exports = router