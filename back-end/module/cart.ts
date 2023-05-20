import connection from "../database/conn";

export interface CartItem {
  customerId: number;
  productId: number;
  quantity: number;
  orderDate: Date;
  address: string;
  city: string;
  postalCode: string;
}

export async function addToCart(item: CartItem): Promise<void> {
  try {
    const query =
      'INSERT INTO orders SET ?';
    const values = {
      customer_id: item.customerId,
      product_id: item.productId,
      quantity: item.quantity,
      order_date: item.orderDate,
      address: item.address,
      city: item.city,
      postal_code: item.postalCode,
    };
    await connection.query(query, values);
  } catch (error) {
    throw new Error('Error adding item to cart.');
  }
}
