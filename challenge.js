
const express = require('express');
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
// app.get('/challenge/tracking/:apiRoute', async (req, res) => {
//   try {
//     const { apiRoute } = req.params
//     const apiResponse = await fetch({
//       method: "GET",
//       url: `https://api.coordinadora.com/cm-model-testing/api/v1/`
//     })
      
//     const apiResponseJson = await apiResponse.json()
//     // await db.collection('collection').insertOne(apiResponseJson)
//     console.log(apiResponseJson)
//     res.send('Done – check console log')
//   } catch (err) {
//     console.log(err)
//     res.status(500).send('Something went wrong')
//   }
// })

// lanzar servidor
app.listen(3000, () => {
  console.log('Server on port 3000')
})
