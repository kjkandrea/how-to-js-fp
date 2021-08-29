import L, { go, takeWhile, take } from './funtions.js'

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
    // console.log(`?page=${page}`);
    return delay(100, Impt.payments[page])
  },
  cancelPayment: paymentId => Promise.resolve(`${paymentId} : 취소완료`)
}

const getOrders = ids => delay(100, [{ id: 1}, { id: 3 }, { id: 7 }],)

async function job() {
  const payments = await go(L.range(Infinity),
    L.map(Impt.getPayments),
    takeWhile(ps => ps.length),
    L.flat,
    take(Infinity)
  )

  const orderIds = await go(
    payments,
    L.map(p => p.oid),
    take(Infinity),
    getOrders,
    L.map(o => o.id),
    take(Infinity),
  )

  console.log(payments, orderIds)

  return Promise.all(go(
    payments,
    L.filter(p => !orderIds.includes(p.oid)),
    L.map(i => i.iid),
    take(Infinity),
    L.map(Impt.cancelPayment),
  ))
}

function main() {
  job().then(console.log)
}

export default main;