import 명령형코드 from './01_명령형코드.js'
import 함수형맛보기 from './02_함수형맛보기.js'
import 나도풀어볼래 from './02_나도풀어볼래.js'
import 이차원배열 from './03_이차원배열.js'
import 유저목록 from './04_유저목록.js'
import 모나드 from './05_모나드.js'
import Promise모나드 from './06_Promise모나드.js'
import PromiseGo from './06_PromiseGo.js'
import 결제누락스케쥴러 from './07_결제누락스케쥴러.js'

const entries = [
	명령형코드,
	함수형맛보기,
	나도풀어볼래,
	이차원배열,
  유저목록,
	모나드,
	Promise모나드,
	PromiseGo,
	결제누락스케쥴러
]

const run = chapter => entries[chapter]()

run(8)
