/* Built-in generics */
// const names: Array<string> = []; // the same as string[]
// // names[0].split(" ");

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then((data) => {
//   //   data.split(" ");
// });

/* Custom generics */
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Lara", surname: "Andersen" }, { age: 22 });
console.log(mergedObj.surname);
