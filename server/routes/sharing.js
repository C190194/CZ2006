const express = require('express');
const sharingController = require('../controllers/sharingController');

const router = express.Router();

router.get('/', sharingController.timetable_index);

router.get('/:id', sharingController.timetable_details);

router.get('/mail', sharingController.share_mail);

router.get('/export', sharingController.export_settings);

router.get('/ics', sharingController.download_ics);

modules.export = router;