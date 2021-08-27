import { go } from './funtions.js'

const g = JSON.parse
const f = ({ k }) => k

function main() {
  go(
    [1],
    console.log
  )
}

export default main