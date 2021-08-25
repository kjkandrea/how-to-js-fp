/**
 * 리스트에서 홀수를 length 만큼 뽑아서 제곱한 후 모두 더하라
 */

// 추상화. filter 기능을 위임
// 홀수를 뽑아라
function *filter(f, iter) {
  for (const a of iter) {
    if (f(a)) yield a;
  }
}

// 추상화. mapping 기능을 위임
// 제곱하여 맵핑하라
function *map(f, iter) {
  for (const a of iter) {
    yield f(a)
  }
}

// 추상화 take 기능을 위임
// length 만큼 take 하라
function take(length, iter) {
  const res = [];
  for (const a of iter) {
    res.push(a);
    if (res.length === length) return res;
  }
  return res;
}

function f(list, length) {
  let i = 0;
  let acc = 0;
  for (const a of take(length, map(a => a * a, filter( a => a % 2, list)))) {
      acc = acc + a;
  }
  console.log(acc)
}

function main () {
  f([1,2,3,4,5], 1)
  f([1,2,3,4,5], 2)
  f([1,2,3,4,5], 3)
}

export default main;
