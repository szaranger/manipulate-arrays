const array = [1, 2, 3, 4, 2];

const result = array.reduce((acc, item) => {
  if (!acc.includes(item)) {
    acc.push(item);
  }
  return acc;
}, []);

console.log(result); // [1, 2, 3, 4]
