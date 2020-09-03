function isTenMinuteWalk(array) {
  if(array.length !== 10){
    return false
    }
  else
  //  return true
   
   var northSouth = 0
   var eastWest = 0

   array.forEach(function (direction) {
     if(direction === 'n' || direction === 's'){
       northSouth++
      }
     else
     eastWest++
    })
     console.log(northSouth)
   
}