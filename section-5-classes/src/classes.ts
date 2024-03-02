class Department {
    private readonly id: number;
    name: string;
    private employees: string[] = [];
    static currentYear = (new Date()).getFullYear();

    constructor(n: string) {
        this.name = n;
        this.id = Math.floor(Math.random() * 100);
    }

    describe(this: Department) {
        console.log('Department: ' + this.name + ': ' + this.id + ' / ' + Department.currentYear);        
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees);
        console.log(this.employees.length);
    }

    static createEmployee(name: string) {
        return {name: name};
    }

    // abstract report() : string;
}

class ITDepartment extends Department {
    private admins: string[] = [];
    private updatedAt: string;

    get created() {
        console.log(this.updatedAt);        
        return this.updatedAt;
    }

    set created(value: string) {
        this.updatedAt = value;
        console.log(this.updatedAt);        
    }

    constructor(admins: string[]) {
        super('IT');
        this.admins = admins;
        this.updatedAt = Date();
    }

    printEmployeeInformation(): void {
        console.log(this.admins);
        console.log(this.admins.length);        
    }
}

class HRDepartment extends Department {
    private static instance: HRDepartment;

    private constructor(name: string) {
        super(name);
        console.log('Creating HR Department');        
    }

    static generateInstance(name: string) {
        if (HRDepartment.instance) {
            return this.instance;
        }

        this.instance = new HRDepartment(name);
        return this.instance;
    }
}

const accounting = new Department('Accounting');
accounting.addEmployee('Matej');
accounting.addEmployee('Denisa');

console.log(accounting);
accounting.describe();
accounting.printEmployeeInformation();

// const accountCopy = { name: 'DUMMY', describe: accounting.describe };
// accountCopy.describe();

const admins = ['Fero', "Karol"];
const itDep = new ITDepartment(admins);
itDep.describe();
itDep.printEmployeeInformation();
itDep.created;
itDep.created = 'Teraz';

const employee1 = Department.createEmployee('Keko');
console.log(employee1, Department.currentYear);

const hrDep = HRDepartment.generateInstance('HR');
const hrDep2 = HRDepartment.generateInstance('HR');
hrDep.describe();
hrDep2.describe();
