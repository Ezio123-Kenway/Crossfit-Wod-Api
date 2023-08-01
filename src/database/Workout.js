const DB = require('./db.json')

const { saveToDataBase } =  require('./utils')

const getAllWorkOuts = () => {
    return DB.workouts;
}

const createNewWorkOut = (newWorkOut) => {
    const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkOut.name) > -1;
    if (isAlreadyAdded) {
        return;
    }
    DB.workouts.push(newWorkOut);
    saveToDataBase(DB);
    return newWorkOut;
}


module.exports = {
    getAllWorkOuts,
    createNewWorkOut
}