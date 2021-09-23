
const result = fetch('https://api.coordinadora.com/cm-model-testing/api/v1/talentos/', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
    .then(response => response.json())
    .then(data => {
      console.log(data.data.guias)
      return data.data.guias;
    })
