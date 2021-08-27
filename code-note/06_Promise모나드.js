import { go } from './funtions.js'

const g = JSON.parse
const f = ({ k }) => k
const fg = x => Promise.resolve(x)
  .then(g)
  .then(f)

function main() {
  go(
    fg('{"k": 10}').catch(_ => '미안...').then(console.log), // 10
  )

  go(
    fg('{"k!@#$%^&*(: 10}').catch(_ => '미안...').then(console.log), // 미안...
  )
}

export default main