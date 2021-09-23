const fetch = require('node-fetch')

let promesa = fetch('https://api.coordinadora.com/cm-model-testing/api/v1/talentos/')
promesa.then((res)=> {
  return res.json()
}) .then((json) => {
  console.log(json)
})
