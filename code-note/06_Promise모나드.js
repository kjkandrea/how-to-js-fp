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

  // Promise 는 비동기적인 상황, 성공, 실패를 다루기 위한 모나드이다.
}

export default main