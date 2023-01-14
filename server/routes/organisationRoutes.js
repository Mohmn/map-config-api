const express = require('express');

const router = express.Router();
const routerWrapper = express.Router();

const {
	organisationGetHandler,
} = require('../handlers/organisation');
const { handlerWrapper } = require('../utils/utils');

router.use('/:id',handlerWrapper(organisationGetHandler));

routerWrapper.use('/organisation',router)

module.exports = routerWrapper;