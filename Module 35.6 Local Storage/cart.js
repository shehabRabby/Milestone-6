const handleAddProducts = () => {
    const productEl = document.getElementById('product')
    const quantityEl = document.getElementById('quantity')

    const product = productEl.value;
    const quantity = quantityEl.value;

    // console.log('Product added : ', product,quantity)
    displayProduct(product,quantity);
    addProductToCart(product,quantity);
    product.value ='';
    quantity.value ='';

}

const getCart = () =>{
    const cart = {};
    return cart;
}

const addProductToCart = (product,quantity) => {
    const cart = getCart();
    cart[product]= quantity;
    console.log('Cart is : ',cart)
}

const displayProduct = (product,quantity) => {
    const li = document.createElement('li');
    li.innerHTML = `${product} : ${quantity}`

    const ul = document.getElementById('products-container');
    ul.append(li)
}