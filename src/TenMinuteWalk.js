function isTenMinuteWalk(array) {
  // if(array.length !== 10){
  //   return false
  //   }
  // else
  //  return true
   
   var northSouth = []
   var eastWest = []

   array.forEach(function (direction) {
     if(direction === 'n' || direction === 's'){
       northSouth++
      }
     else
     eastWest++
    })
     console.log(`northSouth is ${northSouth}`)
     console.log(`eastWest is ${eastWest}`)


     if(array.length === 10 && northSouth % 2 === 0 && eastWest % 2 === 0){
       return true
     }
     else
      return false
   
}