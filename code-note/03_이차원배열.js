import L, { add, go, reduce, take } from './funtions.js'

const arr = [
  [1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [9, 10]
]

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
