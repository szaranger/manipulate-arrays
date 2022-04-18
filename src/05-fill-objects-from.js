const chance = require("chance").Chance();

const createUser = () => ({
  name: chance.name(),
  id: chance.ssn(),
  age: chance.age(),
});

const array = Array.from({ length: 4 }, () => createUser());

console.log(array);
