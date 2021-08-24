const router = require('express').Router();
const appInfo = require('../../package.json');

router.get('/', (req, res) => {
  res.send({
    message: `Welcome to the Tentative API v${appInfo.version}!`
  });
});

router.use('/auth', require('./auth'));
router.use('/wow', require('./wow'));
router.use('/gear', require('./gear'));
router.use('/recruitment', require('./recruitment'));

module.exports = router;
