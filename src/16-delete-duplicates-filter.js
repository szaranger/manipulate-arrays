const array = [1, 2, 3, 4, 2];

const result = array.filter((item, index) => {
  return array.indexOf(item) === index;
});


console.log(result); // [1, 2, 3, 4]
