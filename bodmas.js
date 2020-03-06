let a = ['12', '-', '5', '*', '10', '/', '3', '*', '10', '-', '12', '-', '5', '*', '10', '-', '3', '*', '10', '-', '5', '*', '10', '-', '3', '*', '10', '-', '12', '-', '5', '*', '10', '-', '3', '*', '10']
// let a = ['5', '-', '3', '/', '6']

let math_it_up = {
  '+': (x, y) =>  x + y,
  '-': function (x, y) { return x - y },
  '*': function (x, y) { return x * y },
  '/': function (x, y) { return x / y }
}

let res = 0;
let i = 0;
let firstLoopOver = false
let start = Date.now()
while(i < 2) {
  a.forEach((val, index, array) => {
    if (val === '*' || val === '/') {
      res = math_it_up[val](array[index - 1], array[index+1]);
      array[index - 1] = undefined;
      array[index] = undefined;
      array[index + 1] = res
    } else if ((val === '-' || val === '+') && firstLoopOver ) {
      res = math_it_up[val](array[index - 1], array[index+1]);
      array[index - 1] = undefined;
      array[index] = undefined;
      array[index + 1] = res
    }
    if (index === array.length -1 ) {
      let arrayLength = a.length;
      for(let j = arrayLength; j >= 0; j--) {
        if (a[j] === undefined || a[j] === NaN) {
          array.splice(j, 1)
        }
      }
    }
  })
  firstLoopOver = true
  i++;
}

console.log(a, 'final output', Date.now() - start)