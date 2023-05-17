import mysql from 'mysql2'
import Connection from 'mysql2/typings/mysql/lib/Connection';

interface Product {
  id: number;
  gender: string;
  category: string;
  name: string;
  price: number;
  description: string;
  color?: string;
  size?: string;
}



