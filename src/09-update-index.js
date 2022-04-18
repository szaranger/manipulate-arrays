const chance = require("chance").Chance();

const createUser = () => ({
  name: chance.name(),
  id: chance.ssn(),
  age: chance.age(),
});

const array = [...new Array(4)].map(() => createUser());

const index = array.findIndex((item) => item.id === "966-80-5807");
const newItem = {
  ...array[index],
  name: "Sean",
};
const newArray = [...array.slice(0, index), newItem, ...array.slice(index)];

console.log(newArray);
