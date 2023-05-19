import { Request, Response } from 'express';
import { addToCart,CartItem } from '../module/cart';

export async function addItemToCart(req: Request, res: Response): Promise<void> {
  try {
    const { customerId, productId, quantity, orderDate, address, city, postalCode } = req.body;

    const cartItem: CartItem = {
      customerId,
      productId,
      quantity,
      orderDate,
      address,
      city,
      postalCode,
    };

    await addToCart(cartItem);

    res.status(200).json({ message: 'Item added to cart successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add item to cart.' });
  }
}
