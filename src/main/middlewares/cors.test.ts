import request from 'supertest'
import app from '../config/app'

describe('CORS Middleware', () => {
  app.post('/test_cors', (req, res) => {
    res.send()
  })

  test('Should enable CORS', async () => {
    await request(app)
      .get('/test_cors')
      .expect('access-control-alow-origin', '*')
      .expect('access-control-alow-methods', '*')
      .expect('access-control-alow-headers', '*')
  })
})
