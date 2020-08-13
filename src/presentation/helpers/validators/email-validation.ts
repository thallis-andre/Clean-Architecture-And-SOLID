import { Validation } from '../../protocols'
import { InvalidParamError } from '../../errors'
import { EmailValidator } from '../../protocols/email-validator'

export class EmailValidation implements Validation {
  private readonly fieldName: string
  private readonly emaiValidator: EmailValidator

  constructor (fieldName: string, emailValidator: EmailValidator) {
    this.fieldName = fieldName
    this.emaiValidator = emailValidator
  }

  validate (input: any): Error {
    const isValid = this.emaiValidator.isValid(input[this.fieldName])

    if (!isValid) {
      return new InvalidParamError(this.fieldName)
    }
  }
}
