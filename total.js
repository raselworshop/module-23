const products = [
    {name:'Shampoo', price:300},
    {name:'Chironi', price:100},
    {name:'Shirt', price:700},
    {name:'Pant', price:900},
    {name:'Shoe', price:1050},
]
function getShoppingTotal(products){
    let total = 0;
    for(const product of products){
        // it will console object 
        // total = total + product
        
        // it will give a total cost 
        total = total + product.price;
        // console.log(product)
    }
    return total
}
const total = getShoppingTotal(products);
console.log('The total shopping price is: ', total)