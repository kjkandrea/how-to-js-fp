import L from './funtions.js'
import { add, go, reduce, take } from './02_함수형맛보기.js'

const arr = [
  [1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [9, 10]
]

L.flat = function *(iter) {
  for (const a of iter) {
     a && a[Symbol.iterator] ? yield* a : yield a;
  }
}

function main() {
  go (
    arr,
    L.flat,
    L.filter(a => a % 2),
    L.map(a => a * a),
    take(3),
    reduce(add),
    console.log
  )
}


export default main;
