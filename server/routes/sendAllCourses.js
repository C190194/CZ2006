const express = require('express');

const allCourse = require('../controllers/allCourse');

const router = express.Router();

router.get('/getAllCourses', allCourse);

module.exports = router;