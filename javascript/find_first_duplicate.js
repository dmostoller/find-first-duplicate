function findFirstDuplicate(arr) {
  // type your code here
  let newArr = new Set();

  for (let num of arr ) {
    if (newArr.has(num)) {
        return num;
    }
    newArr.add(num);

  }
  return -1;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));

  console.log("");

  console.log("Expecting: 20");
  console.log("=>", findFirstDuplicate([10, 20, 30, 40, 20, 40]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// initialize an empty array newArray
// interate through each element in the input array
// check if that element exists in the newArray
// if not, append it to the array
// if it does, return it
// if nothing gets returned by the end of the array return -1

// And a written explanation of your solution
