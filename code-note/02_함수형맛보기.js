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

// 추산화 reduce 기능을 위임
// 누산하라
function reduce(f, acc, iter) {
  for (const a of iter) {
    acc = f(acc, a)
  }
  return acc
}

const add = (a, b) => a + b;

// 함수를 리스트로 사고하는 방식. 어렵다.. ㅠㅠ
// go(10, a => a + 10)
const go = (a, ...fs) => reduce((a, f) => f(a), a, fs);
go(10, a => a + 1, console.log)

const f = (list, length) =>
  reduce(add, 0,
    take(length,
      map(a => a * a,
        filter( a => a % 2, list))))

function main () {
  console.log(f([1,2,3,4,5], 1))
  console.log(f([1,2,3,4,5], 2))
  console.log(f([1,2,3,4,5], 3))
}

export default main;
