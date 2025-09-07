//distructuring  = vag vag kore array, object



 
const product = { name:'shirt', price: 500, quantity: 7}
//product.price lekha ta bar bar use kora lage tai ami onno akta variable nibo 
// const discount = product.price*20/100;
// const yourPay = product.price -discount;
// const vatAmount = product.price*7/100;
// const totalAmount = yourPay+vatAmount;


// const price = product.price;
// const discount = price*20/100;
// const yourPay = price - discount;
// const vatAmount = price*7/100;
// const totalAmount = yourPay+vatAmount;

//ei price = object er price er value
//ei Quantity = object er quantity er value
//ei tax er value 7
const {price,quantity,tax=7} = { name:'shirt', price: 500, quantity: 7}
// console.log(price,quantity,tax);


const device = { name:'phone', brand:'ipone', price: 17000 }
const {brand} = device; //output = iphone


//--------------------------------------//
const num = [22,11,33,555,777,88]
const [first,second] = num;
//here first = 22 second = 11

const [math,physics] = [90,95]; 
// console.log(math,physics)