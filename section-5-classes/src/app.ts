interface AddFn {
    (a: number, b:number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => {
    return n1 + n2;
}
console.log('Vypocet', add(2, 3));


interface Named {
    readonly name: string;
    optionalName?: string;
    getOptionalName?(): string;
}

interface Greetable extends Named {
    greet(phrase: string): string;
}

class Person implements Greetable {
    name: string;
    age: number;
    constructor(n: string, age = 30) {
        this.name = n;
        this.age = age;
    }

    greet() {
        const result = `Person ${this.name} => ${this.age} old`;
        console.log(result);
        return result;        
    }
}

let user1 : Greetable;

user1 = {
    name: 'Kek',
    greet(phrase: string) {
        const result = `${phrase}: ${this.name}`;
        console.log(result);
        return result;
    }
}
user1.greet('Nazdar');

const person1 = new Person('Florian');
person1.greet();