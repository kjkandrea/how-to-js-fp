/**
 * 리스트에서 홀수를 length 만큼 뽑아서 제곱한 후 모두 더하라
 */
function f(list, length) {
  let i = 0;
  let acc = 0;
  for (const int of list) {
    if (int % 2) {
      acc = acc + int * int;
      if (++i === length) break;
    }
  }
  console.log(acc)
}

function main () {
  f([1,2,3,4,5], 1)
  f([1,2,3,4,5], 2)
  f([1,2,3,4,5], 3)
}

export default main;

