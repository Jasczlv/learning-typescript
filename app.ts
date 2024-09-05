function add(a1: number, a2: number) {
  return a1 + a2;
}

const number1 = 5;
const number2 = "5.5";

const result = add(+number1, +number2);
console.log(result);

const obj: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: "Ianis",
  age: 23,
  hobbies: ["Piano", "Music", "Dancing"],
};

let arrStr: string[];
arrStr = ["String"]; //can't insert numbers etc

let arrAny: any[]; //typical js array
arrAny = ["String", 1]; //can insert anything

for (const hobby of obj.hobbies) {
  console.log(hobby.toUpperCase()); //toUpperCase() doesn't give any error because ts knows the value recieved will be a string
  // console.log(hobby.map()) !!! GIVES ERROR !!! NOT AN ARRAY
}

//TUPLE

// const noTuple = {
//   name: 'Marco',
//   age: 32,
//   hobbies: ['Pallavolo', 'Calcio', 'Mangiare'],
//   random: [1, ciao, nero, XD, 123] questo da errore
// }

const tuple: {
  name: string;
  age: number;
  hobbies: string[];
  random: [number, string]; //tuple
} = {
  name: "Marco",
  age: 32,
  hobbies: ["Pallavolo", "Calcio", "Mangiare"],
  random: [1, "ciao"], //questo va bene
};

//tuple doesn't allow you to put inside the array any number of elements you want, if you wanted an array with one number and 2 strings in the case above you would need to add to random typization [number, string, string]. This is just for strictness, it is needed only when you expect a certain number of elements inside the array!

//ENUM

//what enum does is assign labels to numbers so in this case theoretically ADMIN shoul be 0 and READ_ONLY = 1 as in a js array

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

enum CustomRole {
  ADMIN = "ADMIN", //HERE WE LABEL ADMIN AS 'ADMIN'
  READ_ONLY = 200, //HERE WE ASSIGN 200 SO THE NEXT INDEX WILL INCREMENT FROM HERE
  AUTHOR = 400, // SAME AS THE ONE ABOVE, DOESN'T INCREMENT BECAUSE ALREADY DEFINED, IF LEFT UNTOUCHED WOULD BE 201
}

const person = {
  name: "Ianis",
  age: 23,
  hobbies: ["Piano", "Music", "Dancing"],
  role: Role.ADMIN,
};

if (person.role === Role.AUTHOR) {
  console.log("is author");
} else if (person.role === Role.ADMIN) {
  console.log("is admin");
} else {
  console.log("is user");
}

console.log(Role.ADMIN, Role.READ_ONLY, Role.AUTHOR);
