function combine(input1, input2, resultType) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultType === "as-number") {
        return +result;
    }
    else if (resultType === "as-string") {
        return result.toString();
    }
}
// const combinedAges = combine(30, 26);
// console.log(combinedAges);
// const combinedNames = combine("Max", "Anna");
// console.log(combinedNames);
var combinedStr = combine(30, 20, "as-string");
var combinedNum = combine(30, 20, "as-number");
console.log(combinedNum + " as num", combinedStr + " " + typeof combinedStr);
function add(n1, n2) {
    return +n1 + +n2;
}
var callAdd;
callAdd = add;
console.log(callAdd(1, 2)); //works but what if...
function printResult(num) {
    console.log("Result: " + num);
}
// callAdd = printResult;
// console.log(callAdd(1)); //this works but it shouldn't if we want it to work only for the add function so what we do is set callAdd to accept functions with determined parameters
