const express = require('express');
const sharingController = require('../controllers/discussionController');

const router = express.Router();

router.get('/', sharingController.discussion_index);

router.get('/:id', sharingController.course_page);

router.post('/comment/:id', sharingController.update_course_page);

router.post('/reply/:id', sharingController.add_reply);

router.post('/add/:id', sharingController.add_course_page);

module.exports=router;