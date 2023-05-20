import connection from '../database/conn';
import bcrypt from 'bcrypt';

const addOne = function (
  data: any,
  callback: (error: string | null, result: any | null) => void
): void {
  bcrypt.hash(data.password, 10, function (err, hash) {
    if (err) {
      callback(err.message, null);
    } else {
      data.password = hash;
      const sql = 'INSERT INTO customers SET ?';
      connection.query(sql, data, (err, result) => {
        callback(err ? err.message : null, result);
      });
    }
  });
};

export default addOne;
