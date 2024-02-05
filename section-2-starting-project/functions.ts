function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number) {
    console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, callback: (n3: number) => void) {
    const result = n1 + n2;
    callback(result);
}

printResult(add(5, 12));

let combinedValues: (a: number, b: number) => number;

combinedValues = add;

console.log(add(7,5));

addAndHandle(10, 20, (result) => {
    console.log(result);
})