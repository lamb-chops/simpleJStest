const assert = require('assert')
const { forEach, map } = require("./index");

//handwritten test 
/*const test = (desc, fn) => {
  console.log("----", desc);
  try { //allows the prog to continue running if error
    fn();
  } catch (err) {
    console.log(err.message);
  }
}; */
//it is same as my handwritten test func
it("The forEach func", () => {
  let sum = 0;
  forEach([1, 2, 3], (value) => {
    sum = sum + value;
  });
  assert.strictEqual(sum, 6, "Expected sum to equal 6"); //optional 3rd arg string for error message to console

});

it("The map func", () => {
  //map returns new array with results
  const result = map([1, 2, 3], (value) => {
    return value * 2;
  });
  assert.strictEqual(result[0], 2)
  assert.strictEqual(result[1], 4);
  assert.strictEqual(result[2], 6);
});
