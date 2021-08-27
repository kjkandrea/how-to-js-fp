export const curry = f => (a, ...bs) =>
  bs.length ? f(a, ...bs) : (...bs) => f(a, ...bs);

// 지연 평가가 이루어지는 친구들 네임스페이스
const L = {}

L.range = function *(stop) {
  let i = -1;
  while (++i < stop) yield i;
}

// 추상화. filter 기능을 위임
// 홀수를 뽑아라
L.filter = curry(function *(f, iter) {
  for (const a of iter) {
    if (f(a)) yield a;
  }
});

// 추상화. mapping 기능을 위임
// 제곱하여 맵핑하라
L.map = curry(function *(f, iter) {
  for (const a of iter) {
    yield f(a)
  }
});

export default L;