const express = require('express');
const sharingController = require('../controllers/discussionController');

const router = express.Router();

router.get('/', sharingController.discussion_index);

router.get('/:id', sharingController.course_page);

router.post('/:id', sharingController.update_course_page);

module.export = router;