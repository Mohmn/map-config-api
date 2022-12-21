const express = require('express');

const router = express.Router();
const {
  configGetHandler,
  configPostHandler,
  configPatchHandler,
} = require('../handlers/config');
const { handlerWrapper } = require('../utils/utils');

router
  .route('/config')
  .get(handlerWrapper(configGetHandler))
  .post(handlerWrapper(configPostHandler))
  .patch(handlerWrapper(configPatchHandler));

module.exports = router;
