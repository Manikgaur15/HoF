
//array-Slice
const food=["pizza","burger","fingerchips","donuts","springrolls"];

const a=food.slice(1,4)
console.log(a);

//Array-Splice
food.splice(2,0,"momo","ice-cream")
console.log(food);

//Array-Filter
let even=[12,324,213,4,2,3,45,4234]
let evennum= even.filter(function(value){
    return value%2==0
})
console.log(evennum);

let prime=even.filter((value) =>{

    for(var i=2;i<=(value/2) ;i++)
    { if(value%i==0) 
        return false;    
    }
    return true;  
})
console.log(prime);



//Array-Map

let arr=[11,34,20,5,53,16]
let square=arr.map(function(item){
    return item*item;
})
console.log(square);

//Array-Reduce
let array=[2,3,5,10];
let multiply=array.reduce(function(manik,gaur){
    return manik*gaur
})
console.log(multiply);




