
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
      
    }
  }
  
  // 4. MyCows
  // MyCows
  // let cows = [[3,4,2,3,4], [2,3,4,5,5], [3,2,2,1,2], [1,1,1,1,1], [2,3,5,2,2], [4,3,4,5,1], [2,2,2,2,2]]
  // let arr = new Array
  // // producción por días
  // var maxLeche = [];
  // for(let i= 0; i <cows.length; i++){
  //   let sumDias = 0
  //   var indexes = [], x;
  //   for(let j= 0; j <cows[i].length; j++){
  //     sumDias += cows[i][j]
  //     if (cows[i][j] === Math.max(...cows[i]))
  //     indexes.push(j + 1);
  //   }
  //   console.log(`Día ${i + 1}: ${sumDias}`)
  //   arr.push(sumDias)
  //   maxLeche.push(indexes)
  
  // }
  // // día de la semana mayor y menor produccion
  // // console.log(arr)
  // var min = arr.indexOf(Math.min(...arr))
  // var max = arr.indexOf(Math.max(...arr))
  // console.log('Mayor producción: Dia ', max + 1)
  // console.log('Menor producción: Dia ', min + 1)
  
  // // vaca que dio mas leche por dia
  // console.log(maxLeche)
  
  
  
  // 5. TrackingCoordinadora
  
  // 6. ArrayScore
// }


// const instance = new Challenge 
// export default instance
