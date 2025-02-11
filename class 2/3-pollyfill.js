const arr = [1,2,4,5]
// Error for each function does not exist on arr variable
// Real signature ko samjo --> No return, function input , value , index 
// call my fn for every value 
arr.forEach(function(value,key){
    console.log(`this is value ${value} and this is key ${key}`);
})

if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userfn){
        const originalArr = this; // current object ke taraf point karta hai

        for(let i = 0; i<userfn.length;i++){
            userfn(originalArr[i],i)
        }
    };
}

