const array = [
  { id: 1, name: "Peter" },
  { id: 2, name: "Henry" },
  { id: 3, name: "Sean" },
  { id: 4, name: "Michael" },
];

const index = array.findIndex((item) => item.id === 2);
const removed = array.splice(index, 2);

console.log(array); // [ { id: 1, name: "Peter" }, { id: 4, name: "Michael" }]
console.log(removed); // { id: 2, name: "Henry" }, { id: 3, name: "Sean" },
