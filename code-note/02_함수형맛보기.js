/**
 * 리스트에서 홀수를 length 만큼 뽑아서 제곱한 후 모두 더하라
 */
function *filter(f, list) { // 추상화. filter 기능을 위임
  for (const a of list) {
    if (f(a)) yield a;
  }
}

function f(list, length) {
  let i = 0;
  let acc = 0;
  for (const int of filter( int => int % 2, list)) {
      acc = acc + int * int;
      if (++i === length) break;
  }
  console.log(acc)
}

function main () {
  f([1,2,3,4,5], 1)
  f([1,2,3,4,5], 2)
  f([1,2,3,4,5], 3)
}

export default main;
