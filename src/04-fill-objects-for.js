const chance = require("chance").Chance();

const createUser = () => ({
  name: chance.name(),
  id: chance.ssn(),
  age: chance.age(),
});

const array = new Array(4);

for (let i = 0; i < 4; i++) {
  array[i] = createUser();
}

console.log(array); 