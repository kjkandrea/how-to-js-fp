import L, { go } from './funtions.js'

const users = [
  { name: 'a', age: 21, family: [
      { name : 'a1', age: 18 }, { name : 'a2', age: 19 },
      { name : 'a3', age: 18 }, { name : 'a4', age: 17 },
  ]},
  { name: 'b', age: 23, family: [
      { name : 'b1', age: 18 }, { name : 'b2', age: 20 },
    ]},
  { name: 'c', age: 22, family: [
      { name : 'c1', age: 18 }, { name : 'c2', age: 19 },
      { name : 'c3', age: 18 }, { name : 'c4', age: 17 },
    ]},
]

function main() {
  go(
    users,
    L.map(u => u.family),
    L.flat,
    _ => [..._],
    console.log

  )
}

export default main