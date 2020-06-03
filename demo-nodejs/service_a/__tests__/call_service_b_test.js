const nock = require('nock')
const API_PORT = 9002
const { fetchUser } = require('../service')
const API_HOST = `http://localhost:${API_PORT}`

describe('Call service B', () => {
  it('Check payload from /user/:name', async () => {
    nock(API_HOST)
      .get('/user/test')
      .reply(200, {
        user: {
          name: 'test'
        }
      })

    const response = await fetchUser('test')
    expect(response.user.name).toEqual('test')
  })
})
