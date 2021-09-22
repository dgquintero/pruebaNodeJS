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

// lanzar servidor
app.listen(3000, () => {
  console.log('Server on port 3000')
})
