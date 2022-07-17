import {Product} from "./product-service";
import {BehaviorSubject} from "rxjs";

export class CartService {
  items = new Map<Product, number>();
  totalQuantity: number = 0;
  totalPrice: number = 0;

  messageSource: BehaviorSubject<number> = new BehaviorSubject(0);

  addToCart(product: Product, quantity: number) {
    if (this.items.has(product)) {
      let currentQuantity = 0;
      // @ts-ignore
      currentQuantity += quantity + this.items.get(product);
      this.items.set(product, currentQuantity)
    } else {
      this.items.set(product, quantity);
    }
    this.totalQuantity += quantity;
    this.totalPrice += product.price * quantity;
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items.clear();
    return this.items;
  }

}
