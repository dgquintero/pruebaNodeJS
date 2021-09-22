const express = require('express');
const router = express.Router();

//importamos el controlador
const retosController = require('../controllers/retosController')

// usamos las rutas para exponer cada uno de los retos
module.exports = function(){
  // average
  router.get('/average/:numero1/:numero2', retosController.average);
  // String manipulation
  router.get('/string-manipulation/:texto', retosController.stringManipulation);

  //sumArray
  router.get('/sum-array/:arr', retosController.sumArray);
  return router;
}
// router.get('/average/:numero1/:numero2', (req, res) => {
//   console.log(req.params.numero1)
//   console.log(req.params.numero2)
//   res.send('recivido')
// })



