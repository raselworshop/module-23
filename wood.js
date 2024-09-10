/**
 * chair ---> 3 cft/ cubicfeet
 * table ---> 10 cft
 * bed   ---> 50 cft
 * 
 *  */

function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedwood = 50;

    const totalChairWood = chairQuantity * perChairWood;
    const totalTableWood = tableQuantity * perTableWood;
    const totalBedWood   = bedQuantity * perBedwood;

    const inTotalWood = totalChairWood + totalTableWood + totalBedWood;
    return inTotalWood;
}
const wood = woodQuantity(0, 0, 15);
console.log('Wood needed for the design is: ',wood)

/**
 * shirt price -----> 500
 * pant price  -----> 700
 * shoes price -----> 900
 */
function wearClotehs(shirtQuantity, pantQuantity, shoeQuantity){
    const perShirtPrice = 500;
    const perPantPrice = 700;
    const perShoePrice = 900;

    const totalShirt = shirtQuantity * perShirtPrice;
    const totalPant = pantQuantity * perPantPrice;
    const totalShoe = shoeQuantity * perShoePrice;

    const inTotalClothes = totalShirt + totalPant + totalShoe;
    return inTotalClothes
}
const dress = wearClotehs(0, 3, 2);
console.log('In total price is: ', dress)