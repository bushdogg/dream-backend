const router = require('express').Router({mergeParams: true});
const controller = require('../../../controllers/master_organizations/asset_groups');

router.get('/', controller.list);
router.get('/:asset_group_id', controller.detail);
router.use('/:asset_group_id/categories', require('./categories'));
router.use('/:asset_group_id/organizations', require('./organizations'));

module.exports = router;
