const person: {
    name: string;
    age: number;
    sex: boolean,
    hobbies: string[];
    role: [number, string];
} = {
    name: 'Matej',
    age: 33,
    sex: false,
    hobbies: ['gym', 'guitar', 'coding'],
    role: [2, 'author']
};

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
};

const person2 = {
    name: 'Julka',
    age: 35,
    sex: true,
    role: Role.ADMIN
}

// const person: {
//     name: string;
//     age: number;
//     sex: boolean;
// } = {
//     name: 'Matej',
//     age: 33,
//     sex: false
// };
person.role = [1, 'admin'];
// person.role.push('admin'); TS does not know PUSH

let favoriteActivities: string[];
favoriteActivities = ['gym', 'guitar', 'girls'];

console.log(person);
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby);    
}

if (person2.role === Role.ADMIN) {
    console.log('Person is admin');
}