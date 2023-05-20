import { Request, Response } from 'express';
import addOne from '../module/signup';

export const signup = (req: Request, res: Response) => {

  addOne(req.body, (error: string | null, token: string | null) => {
    if (error) {
      return res.status(401).json({ error: error });
    } else {
      
      return res.json({ token: token });
    }
  });
};
