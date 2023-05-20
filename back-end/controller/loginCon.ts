import { Request, Response } from 'express';
import authenticate from '../module/login';

export const authentication = (req: Request, res: Response) => {
  const email = req.body.email;
  const password = req.body.password;

  authenticate(email, password, (error: string | null, token: string | null) => {
    if (error) {
      
      return res.status(401).json({ error: error });
    } else {
      
      return res.json({ token: token });
    }
  });
};
