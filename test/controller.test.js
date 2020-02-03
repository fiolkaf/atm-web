import assert from 'assert'
import sinon from 'sinon'
import proxyquire from 'proxyquire'
import { mockRequest, mockResponse } from 'mock-req-res'

const controller = proxyquire('../src/controller', {
  './service': {
    default: {
      withdraw: sinon.stub().withArgs(578).returns('ok')
    }
  }
}).default

describe('controller', () => {
  describe('get', () => {
    it('returns 200', () => {
      const res = mockResponse()
      const req = mockRequest({
        params: {
          amount: 578
        }
      })
      controller.get(req, res)

      assert.equal(true, res.json.calledWith('ok'))
    })
  })
})
