import { go } from './funtions.js'

const g = a => a + 1;
const f = a => a * a;

function main() {
  go(
    [1].map(g).map(f),
    console.log
  )
}

export default main;