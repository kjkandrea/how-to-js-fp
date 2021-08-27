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
     if (a && a[Symbol.iterator]) {
       for (const b of a) {
         yield b;
       }
     } else {
       yield a;
     }
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
