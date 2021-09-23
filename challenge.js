
const express = require('express');
const axios = require('axios');
const routes = require('./routes/api');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true}));


// app.get('/average/:numero1/:numero2', (req, res) => {
//   const num1 = parseInt(req.params.numero1)
//   const num2 = parseInt(req.params.numero2)
//   res.send('recibido')
// })


app.use('/challenge', routes());
// app.get('/', (req, res) =>{
//   res.send('index page')
// })

// 
app.get('/challenge/tracking/:apiRoute', async (req, res) => {
  try {
    const { apiRoute } = req.params
    if (apiRoute.length === 11){
      
      const apiResponse = await axios({
        method: "get",
        url: `https://api.coordinadora.com/cm-model-testing/api/v1/talentos`,
        heathers:{
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      })
      .then(function (response) {
        // handle success
        // console.log(response)
        const resul = response.data
        // res.send(resul)
        resul.data.guias.forEach(function(element){
          if (element.codigo_remision === apiRoute)
            res.send(element)
        });
        // console.log(resul.data.guias[1])
        return resul
      })
    } else if (apiRoute.length === 15){
      const apiResponse = await axios({
        method: "get",
        url: `https://api.coordinadora.com/cm-model-testing/api/v1/talentos/checkpoint`,
        heathers:{
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      })
      .then(function (response) {
        // handle success
        // console.log(response)
        const resul = response.data
        // res.send(resul)
        resul.data.forEach(function(element){
          if (element.etiqueta1d === apiRoute)
            res.send(element)
        });
        // console.log(resul.data.guias[1])
        return resul
      })
    }
  } catch(err) {
    console.log(err)
    res.status(500).send('Something went wrong')
  }
})

// lanzar servidor
app.listen(3000, () => {
  console.log('Server on port 3000')
})
