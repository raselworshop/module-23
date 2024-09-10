/**
 * 1st 100---------->have to give 100,
 * 101to200--------->have to give 90,
 * 201 or up-------->have to give 70,
 */

function learDiscount(quantity){
    const fast100Price = 100;
    const scnd100Price = 90;
    const thrd100Price = 70;
    if(quantity <=100){
        const total = quantity * fast100Price;
        return total;
    }else if(quantity <= 200){
        const fast100Total = 100 * fast100Price;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * scnd100Price;
        const total = fast100Total + remainingTotal;
        return total;
    }else{
        const fast100Total = 100 * fast100Price;
        const scnd100Total = 100 * scnd100Price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * thrd100Price;
        const total = fast100Total + scnd100Total + remainingTotal;
        return total;
    }
}
const total = learDiscount(220);
console.log(total)