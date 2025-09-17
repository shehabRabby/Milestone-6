
const addNumberToLS = () => {
    const number = Math.ceil(Math.random()*100)
    console.log(number)
    localStorage.setItem('number',number)
}

const setObjectToLS = () =>{
    const customer = {name:'rahim',products:3,Price:100}
    const customerJson = JSON.stringify(customer)
    localStorage.setItem('customer',customerJson)
}

const getNumberFromLS = () => {
    const number = localStorage.getItem('number');
    console.log('From Saved Local Storage :',number)
}

const readObjectFromLS = () =>{
    const customerJson = localStorage.getItem('customer')
    const customer = JSON.parse(customerJson)
    console.log(customer);
}