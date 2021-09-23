
const { default: axios } = require("axios");

// Encuentra el error
exports.average = (req, res) => {
  try {
      const a = parseInt(req.params.numero1)
      const b = parseInt(req.params.numero2)
      const response = (a + b) / 2;
      console.log(response)
      res.json(response)
      // res.render(response);
    } catch (e) {
      throw new TypeError("Ha ocurrido un error con este reto");
    }


}


// String manipulation
exports.stringManipulation = (req, res) => {
  try {
    const text = req.params.texto
    if (text.slice(-1) === '!'){
      res.json(text.slice(0, -1))
      // console.log(text.slice(0, -1))
    }
    // console.log(text)
  } catch (e) {
    throw new TypeError("Ha ocurrido un error con este reto");
  }
}
  

  // SumArray
  exports.sumArray = (req, res) => {
    try {
      console.log(req.params)
      const array = JSON.parse(req.params.arr)

      let sumTotal = 0
        sumEnteroPosi = 0
        odds = 0
        pairs = 0
        resul = new Object();

      // validar si el array es 0
      if (!array)
        resul = {}
      // console.log(resul)
      for (let i=0; i < array.length; i++){
        for (let j = 0; j < array[i].length; j++ ){
          // sumTotal
          sumTotal += array[i][j]
          // const sumEnteroPosi
          if( array[i][j] > 0 && Number.isInteger(array[i][j])){
            sumEnteroPosi += array[i][j]
            // console.log(array[i][j])
          }
          // const pairs
          if(array[i][j] % 2 == 0){
            pairs += array[i][j]
          }
        
          // const odds
          if(array[i][j] % 2 != 0){
            odds += array[i][j]
          }    
        }
      }

      resul = {
        sumTotal,
        sumEnteroPosi,
        pairs,
        odds
      
      }
      console.log(resul)
      res.json(resul)


    } catch (error) {
      throw new TypeError("Ha ocurrido un error con este reto");
    }
  }
  
  
  // 3. TransformArray
  // falta poder recibir alfa numericos y dejar solo numericos
  exports.transformArray = (req, res) => {
    try {
      const array = JSON.parse(req.params.arr)
      const ord = req.params.ord
      let newArr = [];
  
  
      for(let m = 0; m < array.length; m++)
        newArr = newArr.concat(array[m]);

      if(ord === 'desc'){
        arrDesc = newArr.sort(function(a, b){return b - a});
        res.json(arrDesc)
        console.log(arrDesc)
      } else if( ord === 'asc'){

        arrAsc = newArr.sort(function(a, b){return a - b});
        res.json(arrAsc)
        console.log(arrAsc)
      } else {
        return;
      }
    } catch (error) {
      throw new TypeError("Ha ocurrido un error con este reto");
    }
  }
  
  // 4. MyCows
  exports.myCows = (req, res) => {
    try {
      resul = []
      // console.log(req.params.arr)
      const cows = JSON.parse(req.params.arr)
      const n = parseInt(req.params.numero1)
      let arr = new Array
      // producción por días
      var maxLeche = [];
      for(let i= 0; i <cows.length; i++){
        let sumDias = 0
        var indexes = [], x;
        for(let j= 0; j <cows[i].length; j++){
          sumDias += cows[i][j]
          if (cows[i][j] === Math.max(...cows[i]))
          indexes.push(j + 1);
        }
        resul.push([`Día ${i + 1}: ${sumDias}`])
        console.log(`Día ${i + 1}: ${sumDias}`)
        arr.push(sumDias)
        maxLeche.push(indexes)
      
      }
      // día de la semana mayor y menor produccion
      // console.log(arr)
      var min = arr.indexOf(Math.min(...arr))
      var max = arr.indexOf(Math.max(...arr))
      // resul.push(['Mayor producción: Dia ', max + 1])
      // resul.push(['Menor producción: Dia ', min + 1])
      console.log('Mayor producción: Dia ', max + 1)
      console.log('Menor producción: Dia ', min + 1)
      
      // vaca que dio mas leche por dia
      console.log(maxLeche)
      res.json('Ver valores en consola')
    } catch (e) {
      throw new TypeError("Ha ocurrido un error con este reto");
    }
  }


  // 5. TrackingCoordinadora
  // exports.tracking = (req, res) => {
  //   const result = fetch('https://api.coordinadora.com/cm-model-testing/api/v1/talentos/', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //       .then(response => response.json())
  //       .then(data => console.log(data))
  //       .then(res.json(data))
  // }
  // 6. ArrayScore
// }


// const instance = new Challenge 
// export default instance
