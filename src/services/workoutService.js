const { v4: uuid } = require('uuid')

const WorkOut = require('../database/Workout')

const getAllWorkOuts = () => {
    const allWorkOuts = WorkOut.getAllWorkOuts();  
    return allWorkOuts
}

const getOneWorkOut = () => {
    return
}

const createNewWorkOut = (newWorkOut) => {
    const workOutToInsert = {
        ...newWorkOut,
        id: uuid(),
        createdAt: new Date().toLocaleString('en-US', { timezone:'UTC' }),
        updatedAt: new Date().toLocaleString('en-US', { timezone:'UTC' }),
    };

    const createdWorkOut = WorkOut.createNewWorkOut(workOutToInsert);
    return createdWorkOut;
}

const updateOneWorkOut = () => {
    return
}

const deleteOneWorkOut = () => {
    return
}

module.exports = {
    getAllWorkOuts,
    getOneWorkOut,
    createNewWorkOut,
    updateOneWorkOut,
    deleteOneWorkOut
}