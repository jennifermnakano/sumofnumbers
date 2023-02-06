function sumFor(numList) {
  let sum = 0;
  for (let i = 0; i < numList.length; i++) {
    sum += numList[i];
  }

  return sum;
}

function sumWhile(numList) {
  let sum = 0;
  let i = 0;
  while (i !== numList.length) {
    sum += numList[i];
    i++;
  }
  return sum;
}

function sumRecursion(numList) {
  if (numList.length === 0) {
    return 0;
  }
  return (numList[0] + sumRecursion(numList.slice(1, numList.length)));
}

function sumTheSimpleWay(numList) {
  return (_.reduce(numList, function (memo, num) { return memo + num; }, 0));
}

const list = [1, 2, 3, 4, 5];
console.log(sumFor(list));
console.log(sumWhile(list));
console.log(sumRecursion(list));
console.log(sumTheSimpleWay(list));
