// require dependincies
var express = require('express');
var router = express.Router();
var projectController = require('./controllers/projectController');

// add routes
router.get('/', projectController.getAllProjects);


router.post('/project', projectController.createProject);

router.post('/students/add', projectController.signIn);
// export router
// msh mwgooda fel router asasan
router.get('/students/home', projectController.loggedIn);
router.get('/students/logger', projectController.signUp);
module.exports = router;
