import connection from '../conn';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { RowDataPacket } from 'mysql2';
const authenticate = (
    email: string,
    password: string,
    callback: (error: string | null, token: string | null) => void
  ): void => {
    const sql = `SELECT * FROM individual WHERE email="${email}"`;
  
    connection.query(sql, (err, result: RowDataPacket[]) => {
      if (err) {
        callback(err.message, null);
      } else if (!result || result.length === 0) {
        callback("Email not found", null);
      } else {
        bcrypt.compare(password, result[0].password, (err, res) => {
          if (res) {
            const token = jwt.sign(
              {
                userID: result[0].userID,
                email: result[0].email,
              },
              "life"
            );
            callback(null, token);
          } else {
            callback("Incorrect password", null);
          }
        });
      }
    });
  };
  
  export default authenticate;
  