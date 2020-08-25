import { Controller } from '../../../../presentation/protocols'
import { LogintController } from '../../../../presentation/controllers/login/login-controller'
import { makeLoginValidation } from './login-validation-factory'
import { makeDbAuthentication } from '../../usecases/authentication/db-authentication-factory'
import { makeLogControllerDecorator } from '../../usecases/decorators/log-controller-decorator-factory'

export const makeLoginController = (): Controller => {
  const loginController = new LogintController(makeDbAuthentication(), makeLoginValidation())
  return makeLogControllerDecorator(loginController)
}
