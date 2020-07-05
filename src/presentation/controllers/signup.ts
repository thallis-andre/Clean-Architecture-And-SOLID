import { HttpResponse, HttpRequest } from './../protocols/http'
import { Controller } from './../protocols/controller'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
export class SignUpController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFiels = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFiels) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(`${field}`))
      }
    }
  }
}
