const handlers = require('../../../controllers/home.controller');

test('testing home page', () => {
    const req = {}, res = { json: jest.fn() }
    handlers.home(req, res)
    expect(res.json.mock.calls[0][0]).toEqual({ 'app': 'alive' })
})
