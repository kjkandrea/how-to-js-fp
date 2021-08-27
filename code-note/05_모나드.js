import L, { go } from './funtions.js'

const g = a => a + 1;
const f = a => a * a;

function main() {
  go(
    [1].map(g).map(f).forEach(a => console.log(a)), // [] 는 모나드이다.
    // [] 안에 있는 갯수가 여러개여도 합성을 안전하게한다.
  )

  go (
    f(g(1)),
    console.log
  )

  go (
    Promise.resolve(1).then(g).then(f).then(a => console.log(a))
  )
}

export default main;