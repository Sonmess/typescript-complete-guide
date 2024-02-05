function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    if (showResult) {
        console.log(phrase + Number(n1 + n2));
    }
    return n1 + n2;
}

 const number1: number = 5;
 const number2: number = 10;
 let number3: number;
 number3 = 3;
 const printResult = true;
 const resultPhrase = 'Result is : ';

 const result = add(number1, number2, printResult, resultPhrase);
 alert(result);