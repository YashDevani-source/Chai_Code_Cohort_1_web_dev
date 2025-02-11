let arr = [1,2,3,45,6,7,8,9,10]
let n = arr.map((e) => e*10 );
console.log(n);

// signatur .map
// Return? - New array each line, Each element iterate, userFn

if(!Array.prototype.myMap) {
    Array.prototype.myMap = function(userfn){
        const result = []

        for(let i =0 ; i < this.length; i++){
            const value = userfn(this[i],i); // actual map me bhe index hota hai
            result.push(value);
        }
        return result;
    };
}

let n2 = arr.myMap((e) => e*10 );
console.log(n2);
