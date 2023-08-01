const workOutService = require('../services/workoutService')

const getAllWorkOuts = (req, res) => {
    const allWorkOuts = workOutService.getAllWorkOuts()
    res.send({ status: "OK", data: allWorkOuts })
}

const getOneWorkOut = (req, res) => {
    const workOut = workOutService.getOneWorkOut()
    res.send('Get an existing workout')
}
 
const createNewWorkOut = (req, res) => {
    const { body } = req;
    if(
        !body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips
    ) {
        return;
    }

    const newWorkOut = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips,
    }

    const createdWorkOut = workOutService.createNewWorkOut(newWorkOut)
    res.status(201).send({ status: 'OK', data: createdWorkOut })
}

const updateOneWorkOut = (req, res) => {
    const updatedWorkOut = workOutService.updateOneWorkOut()
    res.send('Update an existing workout')
}

const deleteOneWorkOut = (req, res) => {
    workOutService.deleteOneWorkOut()
    res.send('Delete an existing workout')
}

module.exports = {
    getAllWorkOuts,
    getOneWorkOut,
    createNewWorkOut,
    updateOneWorkOut,
    deleteOneWorkOut
}