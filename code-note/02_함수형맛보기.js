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
  if (arguments.length === 2) { // 난 이게 뭔지 모르겠어. 나중에 천천히 읽어보자
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a)
  }
  return acc
}

const curry = f => (a, ...bs) =>
  bs.length ? f(a, ...bs) : (...bs) => f(a, ...bs);

const add = curry((a, b) => a + b);
console.log(add(10)(1))

// 함수를 리스트로 사고하는 방식. 어렵다.. ㅠㅠ
// go(10, a => a + 10)
const go = (...as) => reduce((a, f) => f(a), as);

const f = (list, length) =>
  reduce(add, 0,
    take(length,
      map(a => a * a,
        filter( a => a % 2, list))))

const f2 = (list, length) => go (
  list,
  list => filter(a => a % 2, list),
  list => map(a => a * a, list),
  list => take(length, list),
  list => reduce(add, 0, list),
)

function main () {
  console.log(f2([1,2,3,4,5], 1))
  console.log(f2([1,2,3,4,5], 2))
  console.log(f2([1,2,3,4,5], 3))
}

export default main;
