// =========================================
// 🔹 1. Spread with Arrays
// =========================================

// ✅ Copying an array
let arr1 = [1, 2, 3];
let arrCopy = [...arr1];
console.log(arrCopy); // [1, 2, 3]

// ✅ Merging arrays
let arr2 = [4, 5];
let mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // [1, 2, 3, 4, 5]

// ✅ Adding new elements while merging
let extendedArray = [0, ...arr1, 4];
console.log(extendedArray); // [0, 1, 2, 3, 4]

// =========================================
// 🔹 2. Spread with Objects
// =========================================

// ✅ Copying an object
let student = { name: "Aditya", age: 21 };
let studentCopy = { ...student };
console.log(studentCopy); // { name: 'Aditya', age: 21 }

// ✅ Merging objects
let info = { city: "Delhi", country: "India" };
let mergedObject = { ...student, ...info };
console.log(mergedObject);
// { name: 'Aditya', age: 21, city: 'Delhi', country: 'India' }

// ✅ Updating a property while copying
let updatedStudent = { ...student, age: 22 };
console.log(updatedStudent); // { name: 'Aditya', age: 22 }

// =========================================
// 🔹 3. Spread in Function Calls
// =========================================
function sum(a, b, c) {
  return a + b + c;
}

let nums = [10, 20, 30];
console.log(sum(...nums)); // 60

// =========================================
// 🔹 4. Spread with Strings
// =========================================
let str = "JS";
let chars = [...str];
console.log(chars); // ['J', 'S']

// =========================================
// ⚠️ 5. Bad Practice (Avoid shared reference)
// =========================================
let arrA = [1, 2];
let arrB = arrA; // ❌ Points to same array
arrB.push(3);
console.log(arrA); // [1, 2, 3] - Changed!

// =========================================
// ✅ 6. Good Practice (Use spread for copy)
// =========================================
let arrGood = [1, 2];
let arrSafeCopy = [...arrGood];
arrSafeCopy.push(3);
console.log(arrGood); // [1, 2] - Unchanged
