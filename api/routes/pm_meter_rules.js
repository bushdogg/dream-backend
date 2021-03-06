const router = require('express').Router();
const controller = require('../controllers/pm_meter_rules');

router.get('/', controller.list);
router.get('/:rule_id', controller.detail);

module.exports = router;
