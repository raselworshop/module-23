const jim = 89;
const kim = 98;
const tim = 97;
if(jim > kim && jim > tim){
    console.log('Jim will get the prize bond');
}else if(kim > tim || kim > jim){
    console.log('Kim will get the prize');
}else{
    console.log('Tim will get the prize')
}
console.log('------------------------------------------')

// we can do it with function 
function maxOfThree(jim, kim, tim){
    if(jim > kim && jim > tim){
        return 'Jim will get the prize bond';
    }else if(kim > tim && kim > jim){
        return 'Kim will get the prize';
    }else{
        return'Tim will get the prize';
    }
}
const max1 = maxOfThree(287, 289, 296);
console.log(max1)