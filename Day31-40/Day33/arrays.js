//Arrays in javascript

// let a = [1,2,3,4,5];
// console.log(a); //printing the array

// //length of the array
// console.log(a.length); //5

//Arrays are mutable
// let a = [1,2,3,4,5];
// a[0] = 10;
// console.log(a); // [10,2,3,4,5]

//printing specific element of array
// let a = [1,2,3,4,5];
// console.log(a[0]); //1
// console.log(a[3]); //4

// //Type of array
// let a = [1,2,3,4,5];
// console.log(typeof a); //object

//Changing array to string
// let a = [1,2,3,4,5];
// console.log(a); // [1,2,3,4,5]
// console.log(a.toString()); //1,2,3,4,5

//Use of join function
// let a = [1,2,3,4,5];
// console.log(a); // [1,2,3,4,5]
// console.log(a.join(" and ")); //1 and 2 and 3 and 4 and 5
// console.log(a.join(" * ")); //1 * 2 * 3 * 4 * 5

//use of pop function
// let a = [1,2,3,4,5];
// console.log(a); // [1,2,3,4,5]
// console.log(a.pop()); //5
// console.log(a); // [1,2,3,4]

//use of push function
// let a = [1,2,3,4,5];
// console.log(a); // [1,2,3,4,5]
// console.log(a.push(6));
// console.log(a); // [1,2,3,4,5,6]
// console.log(a.push(7));
// console.log(a); // [1,2,3,4,5,6,7]

//use of shift function
// let a = [1,2,3,4,5];
// console.log(a); // [1,2,3,4,5]
// console.log(a.shift()); //1

//use of unshift function
// let a = [1,2,3,4,5];
// console.log(a); // [2,3,4,5]
// console.log(a.unshift(55)); //5
// console.log(a); // [6,1,2,3,4,5]

//use of delete function
// let a = [1,2,3,4,5];
// console.log(a); // [1,2,3,4,5]
// console.log(a.length); //5
// delete a[0];
// console.log(a); // [ <1 empty item>, 2, 3, 4, 5 ]
// console.log(a.length); //5

//use of concatenate function
// let a = [1,2,3,4,5];
// let b = [6,7,8,9,10];
// // let c = a.concat(b);
// // console.log(c); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// let d = a.concat(a,b)
// console.log(d); // [ 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

//Use of sort function
// let a = [5,3,8,4,2,1];
// console.log(a); // [5,3,8,4,2,1]
// a.sort();
// console.log(a); // [1,2,3,4,5,8]

// Use of reverse function
// let a = [5,3,8,4,2,1];
// a.reverse();
// console.log(a); // [8,5,4,3,2,1]
// Note: sort function converts number to string and then sorts it

//use of splice function
// let a = [5,3,8,4,2,1];
// console.log(a); // [5,3,8,4,2,1]
// a.splice(2,3); //starting index, number of elements to be removed
// console.log(a); // [5,3,1]

//Use of splice function
// let a = [5,3,8,4,2,1];
// console.log(a); // [5,3,8,4,2,1]
// a.splice(2,3,10,11,12); //starting index, number of elements to be removed, elements to be added
// console.log(a); // [5,3,10,11,12,1]

//Use of slice function
// let a = [5,3,8,4,2,1];
// console.log(a); // [5,3,8,4,2,1]
// let b = a.slice(2,5); //starting index, ending index(not included)
// console.log(b); // [8,4,2]
// console.log(a); // [5,3,8,4,2,1]
//Note: splice function modifies the original array, slice function does not modify the original array

//Printing array using for loop
// let a = [5,3,8,4,2,1];
// for(let i=0; i<a.length; i++){
//     console.log(a[i]);
// }


//forEach loop
// let a = [5,3,8,4,2,1];
// a.forEach(function(element, index, array){
//     console.log(element, index, array);
// });

//for each loop using arrow function
// let a = [5,3,8,4,2,1];
// a.forEach((element, index, array) => {
//     console.log(element, index, array);
// });

//for of loop
// let a = [5,3,8,4,2,1];
// for(let element of a){
//     console.log(element);
// }
//Note: for of loop cannot access index and array, only element can be accessed

//for in loop
let a = [5,3,8,4,2,1];
for(let index in a){
    console.log(index); //prints index
    console.log(a[index]); //prints element
}
//Note: for in loop can access index but not element directly
//Note: for in loop is not recommended for arrays, it is used for objects
//Note: forEach loop is the best way to iterate an array

