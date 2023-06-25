const arr = [1, 3, 2, 2, -4, -6, -2, 8];
const target = 4;
const output = find_combinations(arr, target);

function find_combinations(arr, target) {
  var arr1 = [];
  var arr2 = [];
  var jointArr = [];
  var doubleTarget = target * 2;
  
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        arr1.push([arr[i], arr[j]]);
      }
    }
  }

  jointArr.push(...arr.sort((a, b) => a - b));

  function find_again(index, arr1, sum) {
    if (sum === doubleTarget) {
      arr2.push(arr1.slice());
      return;
    }

    for (var i = index; i < jointArr.length; i++) {
      var num = jointArr[i];
      if (sum + num <= doubleTarget) {
        arr1.push(num);
        find_again(i + 1, arr1, sum + num);
        arr1.pop();
      }
    }
  }

  find_again(0, [], 0);
  return [arr1, jointArr, arr2];
}

console.log("First Combination For '4':", output[0]);
console.log("Merge Into a single Array:", output[1]);
console.log("Second Combination For '8':", output[2]);
