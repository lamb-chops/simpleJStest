module.exports = {
  forEach(arr, fn) {
    //for of loop would give us each value in array, for in loop would give index
    for (let index in arr) {
      fn(arr[index], index);
    }
  },
  map(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(fn(arr[i], i));
    }
    return result;
  },
};
