const array = [
  { id: 1, name: "Peter" },
  { id: 2, name: "Henry" },
  { id: 3, name: "Sean" },
  { id: 4, name: "Michael" },
];

const index = array.findIndex((item) => item.id === 2);
const newArray = [
  ...array.slice(0, index),
  ...array.slice(index + 1, array.length),
];

console.log(array); // [{ id: 1, name: "Peter" }, { id: 2, name: "Henry" }, { id: 3, name: "Sean" }, { id: 4, name: "Michael" },]
console.log(newArray); // [{ id: 1, name: "Peter" }, { id: 3, name: "Sean" }, { id: 4, name: "Michael" }]
