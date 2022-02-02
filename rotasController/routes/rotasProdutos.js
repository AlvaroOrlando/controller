const express = require('express');
const router = express.Router();
const produtosController = require('../controller/produtosController')

router.get('/', produtosController.index);
router.get('/usados', produtosController.usados);
router.get('/novos', produtosController.novos);

module.exports = router;