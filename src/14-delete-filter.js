const array = [
  { id: 1, name: "Peter" },
  { id: 2, name: "Henry" },
  { id: 3, name: "Sean" },
  { id: 4, name: "Michael" },
];

const filtered = array.filter((item) => {
  return item.id !== 2;
});

console.log(array); // [{ id: 1, name: "Peter" }, { id: 2, name: "Henry" }, { id: 3, name: "Sean" }, { id: 4, name: "Michael" },]
console.log(filtered); // [{ id: 1, name: "Peter" }, { id: 3, name: "Sean" }, { id: 4, name: "Michael" }]
