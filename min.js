const prices =[12000, 16000, 18999, 29999, 39999, 49999, 100000, 119999]
function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            num = min
        }
        // console.log(num);
    }
    return min;
    // console.log(numbers);
}
const cheap = getMin(prices);
console.log('Cheapest priecs mobile phone is: ', cheap)