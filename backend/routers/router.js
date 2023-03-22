const express = require('express');
const router = express.Router();
let controller = require('../controller/controller');


router.get('/', controller.getData);
router.post('/', controller.postAddData);
router.delete('/', controller.postDeleteData);



module.exports = router;