'use strict';
const router = require('express').Router();
const demandeController = require('./controllerDemande');
router.get('/', demandeController.searchAll);
router.post('/', demandeController.ajouterDemande);
module.exports = router;