import { go } from './funtions.js'

const g = JSON.parse
const f = ({ k }) => k
const fg = x => Promise.resolve(x)
  .then(g)
  .then(f)

// TODO. delay : 무엇을 설명하려하는지 잘 모르겠음. 한번 더 보기
const delay = (time, a) => new Promise(resolve =>
  setTimeout(() => resolve(a), time))

// delay(100, 5).then(console.log)

let go1 = (a, f) => f(a);

go1(123, console.log)
go1(delay(1000, 456), console.log)

go1 = (a, f) => a instanceof Promise ? a.then(f) : f(a); // Promise 의 존재 의의
go1(delay(1000, 456), console.log)


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