function findFirstDuplicate(arr) {
  // type your code here
  let newArr = new Set(); // initialize an empty array newArray

  for (let num of arr ) { //interate through each element in the input array
    if (newArr.has(num)) { // check if that element exists in the newArray
        return num; // if it does, return it

    }
    newArr.add(num); // if not, append it to the array


  }
  return -1; // if nothing gets returned by the end of the array return -1

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


// And a written explanation of your solution
// Initialization: We use a Set called newArr to keep track of numbers we've already encountered. A Set is chosen because it provides average O(1) time complexity for both lookups and insertions.
// Iteration: We loop through each number in the array:
// If the number is already present in the newArr set, it is the first duplicate and is immediately returned.
// If not, the number is added to the newArr set.
// Final Check: If the loop completes without finding any duplicates, -1 is returned indicating no duplicates were found.