import service from './service'

export default class Controller {
  static get (req, res) {
    const value = parseInt(req.params.amount, 10)
    const result = service.withdraw(value)
    res.json(result)
  }
}
