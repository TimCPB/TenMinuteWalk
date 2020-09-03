var north = 0
var south = 0
var east = 0
var west = 0

function isTenMinuteWalk(array) {
  _parseDirections(array)
  console.log(`north = ${north}`)
  console.log(`south = ${south}`)
  console.log(`east = ${east}`)
  console.log(`west = ${west}`)
  if(array.length === 10 && north === south && east === west){
    _resetDirections()
    return true
  }
  else
    _resetDirections()
    return false
  
}

function _parseDirections(directionsArray) {
  directionsArray.forEach(function (direction) {
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
}

function _resetDirections(){
  north = 0
  south = 0
  east = 0
  west = 0
}
