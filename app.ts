function combine(
  input1: number | string,
  input2: number | string,
  resultType: "as-number" | "as-string"
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  if (resultType === "as-number") {
    return +result;
  } else if (resultType === "as-string") {
    return result.toString();
  }
}

// const combinedAges = combine(30, 26);
// console.log(combinedAges);

// const combinedNames = combine("Max", "Anna");
// console.log(combinedNames);

const combinedStr = combine(30, 20, "as-string");
const combinedNum = combine(30, 20, "as-number");

console.log(combinedNum + " as num", combinedStr + " " + typeof combinedStr);

function add(n1: number, n2: number) {
  return +n1 + +n2;
}

let callAdd: (a: number, b: number) => number; //this was changed after line 44 to accept functions with numbers as arguments that return number
callAdd = add;
console.log(callAdd(1, 2)); //works but what if...

function printResult(num: number): void {
  //here we return void which is different from undefined
  console.log("Result: " + num);
}

// callAdd = printResult;
// console.log(callAdd(1)); //this works but it shouldn't if we want it to work only for the add function so what we do is set callAdd to accept functions with determined parameters
