const express = require('express');
const router = express.Router();
const AssignmentController = require('../controllers/assignmentController');

router.get('/assignments', AssignmentController.assignSecretSanta);

module.exports = router;
