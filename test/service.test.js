import assert from 'assert'
import service from '../src/service'

describe('service', () => {
  describe('withdraw', () => {
    it('calculates correct quantities', () => {
      const cash = service.withdraw(578)

      assert.deepEqual(cash, [
        { quantity: 1, type: 'note', value: 500 },
        { quantity: 1, type: 'note', value: 50 },
        { quantity: 1, type: 'coin', value: 20 },
        { quantity: 1, type: 'coin', value: 5 },
        { quantity: 1, type: 'coin', value: 2 },
        { quantity: 1, type: 'coin', value: 1 }
      ])
    })
  })
})
