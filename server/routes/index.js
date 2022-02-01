const express = require('express');
const router = express.Router();
const redcapCtrl = require('../controllers/redcap');

router.post('/import', redcapCtrl.import);

module.exports = router;
