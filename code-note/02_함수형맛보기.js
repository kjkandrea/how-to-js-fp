/**
 * 리스트에서 홀수를 length 만큼 뽑아서 제곱한 후 모두 더하라
 */

const curry = f => (a, ...bs) =>
  bs.length ? f(a, ...bs) : (...bs) => f(a, ...bs);

// 지연 평가가 이루어지는 친구들 네임스페이스
const L = {}

L.range = function *(stop) {
  let i = -1;
  while (++i < stop) yield i;
}

const infinity = L.range(Infinity); // 지연 평가 됨
console.log(
  infinity,
  infinity.next(),
  infinity.next(),
  infinity.next(),
  infinity.next(),
)

// 추상화. filter 기능을 위임
// 홀수를 뽑아라
L.filter = curry(function *(f, iter) {
  for (const a of iter) {
    console.log('filter:',a)
    if (f(a)) yield a;
  }
});

// 추상화. mapping 기능을 위임
// 제곱하여 맵핑하라
L.map = curry(function *(f, iter) {
  for (const a of iter) {
    console.log('map:',a)
    yield f(a)
  }
});

// 추상화 take 기능을 위임
// length 만큼 take 하라
const take = curry(function take(length, iter) {
  const res = [];
  for (const a of iter) {
    res.push(a);
    if (res.length === length) return res;
  }
  return res;
});

// 추산화 reduce 기능을 위임
// 누산하라
const reduce = curry(function(f, acc, iter) {
  if (arguments.length === 2) { // 난 이게 뭔지 모르겠어. 나중에 천천히 읽어보자
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a)
  }
  return acc
});

const add = curry((a, b) => a + b);

// 함수를 리스트로 사고하는 방식. 어렵다.. ㅠㅠ
// go(10, a => a + 10)
const go = (...as) => reduce((a, f) => f(a), as);

const f = (list, length) =>
  reduce(add, 0,
    take(length,
      L.map(a => a * a,
        L.filter( a => a % 2, list))))

// filter, map 이 제너레이터 이기때문에 지연평가(실제 실행이 되면 평가)
// f2([1,2,3,4,5], 1) 을 보라. 단 한번 실행 됨
const f2 = (list, length) => go (
  list,
  L.filter(a => a % 2),
  L.map(a => a * a),
  take(length),
  reduce(add),
)

function main () {
  console.log(f2([1,2,3,4,5], 1))
  // console.log(f2([1,2,3,4,5], 2))
  // console.log(f2([1,2,3,4,5], 3))
}

export default main;
