const userName = "Matej";
let age = 30;
age = 33;

function add(a: number, b: number = 0) {
  let result;
  result = a + b;
  return result;
}

const add2 = (a: number, b: number) => {
  return a + b;
};

const printOutput = (output: string) => console.log(output);

console.log(add2(7, 3));
printOutput("Kek");

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

const person = {
  firstName: "Max",
  sex: 30,
};

const copiedPerson = { ...person };

const substract = (...numbers: number[]) => {
    numbers.reduce((curResult, curValue) => {
        return curResult - curValue;
    }, 0);
};

const numbers = substract(2, 3, 1, 8);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

const {firstName, sex} = person;