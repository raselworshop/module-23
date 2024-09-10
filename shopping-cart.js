const products = [
    {name:'Shampoo', price:300, quantity: 5},
    {name:'Chironi', price:100, quantity: 3},
    {name:'Shirt', price:700, quantity: 4},
    {name:'Pant', price:900 , quantity: 2},
    {name:'Shoe', price:950, quantity: 6},
]
function cartTotal(products){
    let total = 0;
    for(const product of products){
        // when want quantity values with reuslt
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
        // console.log(product)
    }
    return total;
}
const shoppingCost = cartTotal(products);
console.log('The total shopping cost is: ', shoppingCost)
    