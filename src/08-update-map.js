const chance = require("chance").Chance();

const createUser = () => ({
  name: chance.name(),
  id: chance.ssn(),
  age: chance.age(),
});

const array = [...new Array(4)].map(() => createUser());

array[0] = {
  ...array[0],
  name: "Sean",
};

const newArray = array.map((item, index) => {
  return index === 1 ? { ...item, name: "Sean" } : item;
});

console.log(newArray);
