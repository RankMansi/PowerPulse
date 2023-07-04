const Workout = require('../models/WorkoutModel')
const mongoose = require('mongoose')

// gets workouts
const getWorkout = async(req,res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}

// gets Single workout
const getsingleWorkout = async(req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Workout exists'})
    }

    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error: 'No such Workout exists'})
    }
    res.status(200).json(workout)
}

// creates a Workout
const createWorkout = async(req,res) => {
    const {title, reps, load} = req.body

    let emptyFields=[]

    if(!title){
        emptyFields.push('title')
    }
    if(!load){
        emptyFields.push('load')
    }
    if(!reps){
        emptyFields.push('reps')
    }
    if(emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }

    try{
    const workout = await Workout.create({title, reps, load})
    res.status(200).json(workout)
    }
    catch(error){
    res.status(404).json({error: error.message})
    }
}

// deletes a Workout
const deleteWorkout = async(req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Workout exists'})
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if(!workout) {
        return res.status(404).json({error: 'No such Workout exists'})
  }

    res.status(200).json(workout)
}

const updateWorkout = async(req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Workout exists'})
    }

    const workout = await Workout.findOneAndUpdate({_id:id}, {
        ...req.body 
    })
    if(!workout){
        return res.status(404).json({error: 'No such Workout exists'})
    }

    res.status(200).json(workout)
}

module.exports = {
    createWorkout,
    getWorkout, 
    getsingleWorkout,
    deleteWorkout,
    updateWorkout
}
