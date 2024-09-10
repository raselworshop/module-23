const heights = [60, 65, 69, 70, 72, 75, 67, 64];

function getMax(numbers){
    let max = numbers[0]
    for(const num of numbers){
        if(num > max){
            max = num
        }
        // console.log(num);
    }
    return max;
}
const max = getMax(heights);
console.log('Max value is: ',max)

// smallest number need to keep as output
const smallest = [23, 45, 77, 56, 67, 98, 22, 89];
function getMin(number){
    let min = number[0]
    for(const numb of smallest){
        if(numb < min){
            min = numb
        }
        // console.log(numb)
    }
    return min;
}
const min = getMin(smallest);
console.log('Min height is: ', min)