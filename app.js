function add(a1, a2) {
    return a1 + a2;
}
var number1 = 5;
var number2 = "5.5";
var result = add(+number1, +number2);
console.log(result);
var obj = {
    name: "Ianis",
    age: 23,
    hobbies: ["Piano", "Music", "Dancing"],
};
var arrStr;
arrStr = ["String"]; //can't insert numbers etc
var arrAny; //typical js array
arrAny = ["String", 1]; //can insert anything
for (var _i = 0, _a = obj.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
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
var tuple = {
    name: "Marco",
    age: 32,
    hobbies: ["Pallavolo", "Calcio", "Mangiare"],
    random: [1, "ciao"], //questo va bene
};
//tuple doesn't allow you to put inside the array any number of elements you want, if you wanted an array with one number and 2 strings in the case above you would need to add to random typization [number, string, string]. This is just for strictness, it is needed only when you expect a certain number of elements inside the array!
//ENUM
//what enum does is assign labels to numbers so in this case theoretically ADMIN shoul be 0 and READ_ONLY 1 as we expect in an array
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Ianis",
    age: 23,
    hobbies: ["Piano", "Music", "Dancing"],
    role: Role.ADMIN,
};
if (person.role === Role.AUTHOR) {
    console.log("is author");
}
else if (person.role === Role.ADMIN) {
    console.log("is admin");
}
else {
    console.log("is user");
}
console.log(Role.ADMIN, Role.READ_ONLY, Role.AUTHOR);
