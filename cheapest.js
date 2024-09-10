const mobile =[
    {name:'sumsung', price:20000, camera:'12mp', color:'black'},
    {name:'Xaomi', price:12000, camera:'12mp', color:'redBlue'},
    {name:'Oppos', price:22000, camera:'12mp', color:'black'},
    {name:'realMe', price:30000, camera:'12mp', color:'blueWhite'},
    {name:'Honour', price:36000, camera:'12mp', color:'lightBlue'},
    {name:'Apple', price:100000, camera:'12mp', color:'darkGray'},
    {name:'Linux', price:80000, camera:'12mp', color:'black'},
    {name:'Walton', price:27000, camera:'12mp', color:'black'},
]
// find a cheapest phone
function cheapestPhone(mobile){
    let min = mobile[0]
    for(const phone of mobile){
        if(phone.price < min.price){
            min = phone
        }
        // console.log(phone)
    }
    return min;
    // console.log(mobile);
}
const cheap = cheapestPhone(mobile);
console.log('The cheapest phone is: ', cheap)

// find a heighest price phone
function expensivePhone(mobile){
    let expensive = mobile[0];
    for(const cellphone of mobile){
        if(cellphone.price > expensive.price){
            expensive = cellphone //if I change it to cellphone = expensive it reeturn error why?
        }
    }
    return expensive;
}
const expense = expensivePhone(mobile);
console.log('The expensive phone is: ', expense);