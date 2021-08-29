import L, { go } from './funtions.js'

const delay = (time, a) => new Promise(resolve =>
  setTimeout(() => resolve(a), time))

const Impt = {
  payments: {
    0: [{ iid: 11, oid: 1 }, { iid: 13, oid: 2 }, { iid: 13, oid: 3 }],
    1: [{ iid: 14, oid: 4 }, { iid: 15, oid: 5 }, { iid: 16, oid: 6 }],
    2: [{ iid: 17, oid: 7 }, { iid: 18, oid: 8 }],
    3: [],
    4: []
  },
  getPayments: page => {
    console.log(`?page=${page}`);
    return delay(100, Impt.payments[page])
  },
  cancelPayment: paymentId => Promise.resolve(`${paymentId} : 취소완료`)
}

function job() {
  go(
    L.range(Infinity),
    L.map(Impt.getPayments),
    console.log
  )
}

export default job;