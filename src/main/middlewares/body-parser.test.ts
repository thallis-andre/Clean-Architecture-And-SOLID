import request from 'supertest'
import app from '../config/app'

describe('Body Parser Middleware', () => {
  app.post('/test_body_parser', (req, res) => {
    res.send({ name: 'Thallis' })
  })

  test('Should parse body as json', async () => {
    await request(app)
      .post('/test_body_parser')
      .send({ name: 'Thallis' })
      .expect({ name: 'Thallis' })
  })
})
