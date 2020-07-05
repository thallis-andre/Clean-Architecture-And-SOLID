import { HttpResponse, HttpRequest } from './../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFiels = ['name', 'email']
    for (const field of requiredFiels) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(`${field}`))
      }
    }
  }
}
