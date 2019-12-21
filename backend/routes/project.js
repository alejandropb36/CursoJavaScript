'use strict'

var express = require('express');
var ProjectController = require('../controllers/project');

var router = express.Router();

router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/project/save', ProjectController.saveProject);
router.get('/project/:id', ProjectController.getProject);

module.exports = router;