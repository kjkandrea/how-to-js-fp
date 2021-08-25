/**
 * 리스트에서 홀수를 length 만큼 뽑아서 제곱한 후 모두 더하라
 */
function f(list, length) {
  return list
    .filter(int => int % 2) // 얘를 지연평가 할 수는 없을까?
    .splice(0, length) // 얘를 지연평가 할 수는 없을까?
    .map(int => Math.pow(int, 2))
    .reduce((acc, cur) => acc + cur)
}

function main () {
  console.log(f([1,2,3,4,5], 1))
  console.log(f([1,2,3,4,5], 2))
  console.log(f([1,2,3,4,5], 3))
}

export default main;