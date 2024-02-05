type Combinable = number | string;
type Conversion = 'as-number' | 'as-text';

function combine(n1: number | string, n2: number | string, resultConversion: Conversion) {
    let result;
    if (typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-number') { 
        result = +n1 + +n2;
    } else {
        result = n1.toString() + n2.toString();
    }
    return result;
    
    // if (resultConversion === 'as-number') {
    //     return parseFloat(result);
    // } else {
    //     return result.toString;
    // }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedNames = combine('Matej', 'Anna', 'as-text');
console.log(combinedNames);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
