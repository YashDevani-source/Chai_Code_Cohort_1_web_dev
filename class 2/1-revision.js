// problem 1
const teas ={
    name: 'Lemon tee',
    "type": 'Green',
    caffine: 'Low'
}
// problem 2
console.log(teas.name);
console.log(teas["type"]);
// problem 3
teas.origin  = 'Assam'
console.log(teas);
console.log(teas.origin);
// problem 4
teas.caffine = "Medium"
console.log(teas.caffine);
// problem 5
delete teas.type
// problem 6
console.log('origin' in teas);
// problem 7
for(let key in teas){
    console.log(key + ": " + teas[key]);
    console.log();
    
}



