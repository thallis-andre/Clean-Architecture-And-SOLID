/* eslint-disable @typescript-eslint/method-signature-style */
import { HttpResponse, HttpRequest } from './http'

export interface Controller {
  handle (httpRequest: HttpRequest): Promise<HttpResponse>
}
