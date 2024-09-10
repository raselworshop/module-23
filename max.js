const disha = 85;
const salman = 95;
if(disha > salman){
    console.log('Disha will get the Strawberry');
}else{
    console.log('Salman will eat the Strawberry');
}

// we can get it by a function here 
function getMax(numb1, numb2){
    if(numb1 > numb2){
        return numb1;
    }else{
        return numb2;
    }
}
const max = getMax(87, 97);
console.log('The max number is: ', max)
console.log('-----------------------------------------')

// another try with function
function getMax(numb1, numb2){
    if(numb1 > numb2){
        return numb1;
    }else{
        return numb2;
    }
}
const max1 = getMax(87, 97);
const max2 = getMax(96.99, 97);
const maxResult = getMax(max1, max2)
console.log('The max number is: ', maxResult)