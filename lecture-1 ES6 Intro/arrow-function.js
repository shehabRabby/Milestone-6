//function declearation
function sum(num1, num2 = 0){
    return num1+num2;
}

//function expression
const addition = function(num1, num2 = 0){
    return num1+num2;
}
const result = addition(1,2);
// console.log(result)

//arrow function
const add2 = (num1,num2)=> num1+num2
const res = add2(1,20);
// console.log(res)


//tax rate
const getTax = (amount, taxrate) => amount*taxrate/100;
//single parameter 
const getSquare = (x) => x*x;
const getHalf = x => x/2;
console.log(getSquare(8));
console.log(getHalf(8));
//empty parameter
const logit = () => console.log('Empty parameter');
//array
const firstElement = arr => arr[0];
console.log(firstElement([11,32,12,3,19]));


//anonymous function without parameter
document.getElementById('').addEventListener('click', () =>{

})
//anonymous function with single parameter
document.getElementById('btn-click').addEventListener('click', event =>{

})