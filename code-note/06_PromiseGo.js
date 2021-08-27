import { reduce } from './funtions.js'

const go1 = (a, f) => a instanceof Promise ? a.then(f) : f(a);
const go = (...as) => reduce(go1, as);

function main() {
  go(
    Promise.resolve(1),
    console.log
  )
}

export default main