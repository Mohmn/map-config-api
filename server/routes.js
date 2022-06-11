const express = require('express');

const router = express.Router();
const {
  organizationThemeGetHandler,
  organizationThemePostHandler,
} = require('./handlers/organizationThemeHandler');
const { handlerWrapper } = require('./utils/utils');

router
  .route('/organizations/:organization_id/theme')
  .get(handlerWrapper(organizationThemeGetHandler))
  .post(handlerWrapper(organizationThemePostHandler));

module.exports = router;
