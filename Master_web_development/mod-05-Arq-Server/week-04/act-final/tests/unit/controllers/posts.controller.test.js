const handlers = require('../../../controllers/posts.controller');
const model = require('../../../models/post.model');

test('Find posts by ID', () => {
    /*model.findById = jest.fn().mockReturnValueOnce(() => {
        return {
            id: 'Amys'
        }
    })
    const spy = jest
        .spyOn(model, "findById")
        .mockResolvedValueOnce({id: 'Amys'});
 
 
    const req = { params: jest.fn() }, res = { json: jest.fn() }
 
    handlers.getById(req, res)
 
    expect(res.json.mock.calls[0][0]).toEqual({id: 'Amys'})
    */
    const spy = jest
        .spyOn(model, "findById")
        .mockResolvedValueOnce({ id: '6bb0794d-3f43-4be8-a267-4dc09315a79e' });
    const req = { params: jest.fn() }, res = { json: jest.fn() }

    handlers.getById(req, res)
    expect(spy).toHaveBeenCalledTimes(1);
    spy.mockRestore();
});
