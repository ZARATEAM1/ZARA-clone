import mysql, { Connection } from 'mysql2';

const connection: Connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'zara',
});

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to database:', err);
  } else {
    console.log('Database connected');
  }
});

export default connection;
