// default parameter 
function sum(num1, num2 = 0){
    const total = num1+num2;
    console.log(num1,num2,total)
}
sum(10,9);

function mul(num1, num2 = 1){
    const total = num1+num2;
    console.log(num1,num2,total)
}
mul(10);

//string --> ''
//array = []
//object = {}
//multiply = 1
//sum,sub = 0