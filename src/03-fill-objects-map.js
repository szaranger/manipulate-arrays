const chance = require("chance").Chance();

const createUser = () => ({
  name: chance.name(),
  id: chance.ssn(),
  age: chance.age(),
});

const array = new Array(4).fill(null).map(() => createUser());

console.log(array); 