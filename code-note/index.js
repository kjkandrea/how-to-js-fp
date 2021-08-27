import 명령형코드 from './01_명령형코드.js'
import 함수형맛보기 from './02_함수형맛보기.js'
import 나도풀어볼래 from './02_나도풀어볼래.js'

const entries = [
  명령형코드,
  함수형맛보기,
  나도풀어볼래
]

const run = chapter => entries[chapter]()

run(1)