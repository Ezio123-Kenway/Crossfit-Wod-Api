const express = require('express')
const workOutController = require('../../controllers/workoutController')

const router = express.Router()

router.get('/', workOutController.getAllWorkOuts)

router.get('/:workoutId', workOutController.getOneWorkOut)

router.post('/', workOutController.createNewWorkOut)

router.patch('/:workoutId', workOutController.updateOneWorkOut)

router.delete('/:workoutID', workOutController.deleteOneWorkOut)

module.exports = router