const router = require('express').Router();
const appInfo = require('../../package.json');

router.get('/', (req, res) => {
  res.send({
    message: `Welcome to the Tentative API v${appInfo.version}!`
  });
});

router.use('/auth', require('./auth'));
router.use('/feedback', require('./feedback'));
router.use('/gear', require('./gear'));
router.use('/guild', require('./guild'));
router.use('/recruitment', require('./recruitment'));
router.use('/wow', require('./wow'));

module.exports = router;
