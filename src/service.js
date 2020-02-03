import types from './types'

export default class Service {
  static withdraw (value) {
    const wallet = []

    for (const item of types) {
      const quantity = Math.floor(value / item.value)
      if (quantity === 0) { continue }

      wallet.push({
        type: item.type,
        value: item.value,
        quantity
      })
      value %= item.value

      if (value === 0) { return wallet }
    }
  }
}
