import L from './funtions.js'

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
  console.log(
    ...L.flat(arr)
  )
}

export default main;
