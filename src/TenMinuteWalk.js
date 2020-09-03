function isTenMinuteWalk(array) {
  var north = 0
  var south = 0
  var east = 0
  var west = 0

  array.forEach(function (direction) {
    if(direction === 'n'){
      north++
      }
    else if(direction === 's'){
      south++
    }
    else if(direction === 'e'){
      east++
    }
    else
      west++
      })
    if(array.length === 10 && north === south && east === west){
      return true
    }
    else
     return false
   
}