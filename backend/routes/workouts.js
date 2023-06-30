const express = require('express')
const {
    createWorkout,
    getWorkout,
    getsingleWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

//GET method
router.get('/', getWorkout)

//GET method
router.get('/:id', getsingleWorkout)

//POST method
router.post('/', createWorkout)

//DELETE method
router.delete('/:id', deleteWorkout)

//PATCH method-to update
router.patch('/:id', updateWorkout)

module.exports = router 