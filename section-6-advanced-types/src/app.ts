type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Matej',
    privileges: ['create-server'],
    startDate: new Date()
};
const e2: Employee = {
    name: 'Kek',
    startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

function add(a: number, b:number): number;
function add(a: string, b:string): string;
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('Matej', ' Keko');
console.log(result.split(' '));

type UnknownEmployee = Employee | Admin;
function printEmployeeInfo(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);    
    }    
    if ('startDate' in emp) {
        console.log('Start date: ' + emp.startDate);
        
    }
}
printEmployeeInfo(e1);
printEmployeeInfo(e2);

class Car {
    drive() {
        console.log('Driving ...');
        
    }
}

class Truck {
    drive() {
        console.log('Driving a truck ...');
        
    }

    loadCargo(amount: number) {
        console.log('Loading cargo ... ' + amount);
        
    }
}

type Vehicel = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicel(vehicle: Vehicel) {
    vehicle.drive();
    if ('loadCargo' in vehicle) {
        vehicle.loadCargo(9);
    }
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(100);
    }
}
useVehicel(v1);
useVehicel(v2);

interface Bird {
    flyingSpeed: number;
    type: 'bird';
}

interface Horse {
    runningSpeed: number;
    type: 'horse';
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal)  {
    let speed = 0;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }    
    console.log('Moving with speed ... ' + speed);
}

const a1: Animal = {
    type: 'bird',
    flyingSpeed: 9
};
const a2: Animal = {
    type: 'horse',
    runningSpeed: 100
};
moveAnimal(a1);
moveAnimal(a2);

// const paragraph = <HTMLParagraphElement> document.getElementById('messageOutput');
const paragraph = document.getElementById('messageOutput')! as HTMLParagraphElement;
console.log(paragraph);
paragraph.innerText = 'Hi there!';

interface ErrorContainer {
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email',
    username: 'Must start with a capital character!'
};

const fetchUserData = {
    id: 'u1',
    name: 'Max',
    job: {title: 'CEO', description: 'My own company'}
};

console.log(fetchUserData?.job?.title);

const userInput = null;
const storedData = userInput || 'DEFAULT';
console.log(storedData);

const ui2 = '';
const sd2 = ui2 ?? 'DEFAULT';
console.log(sd2);


