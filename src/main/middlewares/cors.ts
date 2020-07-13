import { Request, Response, NextFunction } from 'express'

export const cors = (req: Request, res: Response, next: NextFunction): void => {
  res.set('access-control-alow-origin', '*')
  res.set('access-control-alow-methods', '*')
  res.set('access-control-alow-headers', '*')
  next()
}
