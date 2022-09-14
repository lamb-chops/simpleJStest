
const { forEach, map } = require("./index");

const test = (desc, fn) => {
  console.log("----", desc);
  try { //allows the prog to continue running if error
    fn();
  } catch (err) {
    console.log(err.message);
  }
};

test("The forEach func", () => {
  let sum = 0;
  forEach([1, 2, 3], (value) => {
    sum = sum + value;
  });
  if (sum !== 6) {
    throw new Error("Expected sum to equal 6");
  }
});

test("The map func", () => {
  //map returns new array with results
  const result = map([1, 2, 3], (value) => {
    return value * 2;
  });
  if (result[0] !== 2) {
    throw new Error(`Expected 2 but found ${result[0]}`);
  }
  if (result[1] !== 4) {
    throw new Error(`Expected 4 but found ${result[1]}`);
  }
  if (result[2] !== 6) {
    throw new Error(`Expected 6 but found ${result[2]}`);
  }
});
