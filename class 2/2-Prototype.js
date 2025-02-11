const arr = [1,2,3]

arr

const str = 'Yash'

str

const obj = {x: 1}
obj

obj.x
// Dot operator objects ke properties ko ascess karne me help kar ta hai

Array.prototype.chai = function(){ // polifill
    console.log('Chai')
    
}

console.log(Array.__proto__)