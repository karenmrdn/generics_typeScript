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
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Lara", surname: "Andersen" }, { age: 22 });
console.log(mergedObj.surname);
console.log(mergedObj);

console.log("___________________________");
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else {
    descriptionText = `Got ${element.length} elements`;
  }

  return [element, descriptionText];
}

console.log(countAndDescribe("Hello World"));
console.log(countAndDescribe([]));
console.log(countAndDescribe(["Sport", "Coding"]));

console.log("___________________________");
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

console.log(extractAndConvert({ name: "Andrew" }, "name"));
// extractAndConvert({ name: "Andrew" }, "age"); // error - age isn't a key of an object

/* Generic classes */
console.log("___________________________");

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Andrew");
textStorage.addItem("Lara");
textStorage.removeItem("Andrew");
console.log(textStorage.getItems());

/* Generic utility types */
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}; // It will not be allowed without Partial
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

// We can use Readonly with arrays and objects
const names: Readonly<string[]> = ["Lara", "Andrew"];
// names.push("John");
// names.pop(); // not allowed, because of Readonly
