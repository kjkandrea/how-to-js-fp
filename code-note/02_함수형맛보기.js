/**
 * 리스트에서 홀수를 length 만큼 뽑아서 제곱한 후 모두 더하라
 */

// 추상화. filter 기능을 위임
// 홀수를 뽑아라
function *filter(f, list) {
  for (const a of list) {
    if (f(a)) yield a;
  }
}

// 추상화. mapping 기능을 위임
// 제곱하여 맵핑하라
function *map(f, list) {
  for (const a of list) {
    yield f(a)
  }
}

function f(list, length) {
  let i = 0;
  let acc = 0;
  for (const a of map(a => a * a, filter( a => a % 2, list))) {
      acc = acc + a;
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
