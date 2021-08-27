import { go } from './funtions.js'

const g = a => a + 1;
const f = a => a * a;

function main() {
  go(
    [1].map(g).map(f), // [] 는 모나드이다.
    // [] 안에 있는 갯수가 여러개여도 합성을 안전하게한다.
    console.log
  )

  go (
    f(g(1)),
    console.log
  )
}

export default main;