import { reduce } from './funtions.js'

const go1 = (a, f) => a instanceof Promise ? a.then(f) : f(a);
const go = (...as) => reduce(go1, as);

const delay = (time, a) => new Promise(resolve =>
  setTimeout(() => resolve(a), time))

function main() {
  const c = go(
    Promise.resolve(1), // 이 라인에 go 는 즉시 Promise 가 된다.
    a => a + 1,
    a => delay(100, a + 10000),
    a => delay(100, a + 10000),
    // console.log
  )

  // console.log(c) // Promise { <pending> }
  c.then(console.log) // 원하는 시점에 평가 가능

  async function af() {
    const a = await c;
    console.log(a);
  }

  af() // 20002
}

export default main