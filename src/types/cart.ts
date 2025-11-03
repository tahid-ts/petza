export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export type State = { items: CartItem[] };

export type Action =
  | { type: "updateQuantity"; id: number; quantity: number }
  | { type: "changeBy"; id: number; delta: number }
  | { type: "remove"; id: number }
  | { type: "clear" };

export const FREE_SHIPPING_THRESHOLD = 575;
export const CASHBACK_THRESHOLD = 575;
export const TAX_RATE = 0.1;
export const SHIPPING_FLAT = 15;

export const initialItems: CartItem[] = [
  {
    id: 1,
    name: "Dog Carry Belts",
    price: 260,
    quantity: 1,
    image: "/img/cart/cart-thumb1_1.png",
  },
  {
    id: 2,
    name: "Cat Tartan Clothing",
    price: 260,
    quantity: 1,
    image: "/img/cart/cart-thumb1_2.png",
  },
  {
    id: 3,
    name: "Parakeet",
    price: 260,
    quantity: 1,
    image: "/img/cart/cart-thumb1_3.png",
  },
  {
    id: 4,
    name: "Dog Carrying Bag",
    price: 260,
    quantity: 1,
    image: "/img/cart/cart-thumb1_4.png",
  },
  {
    id: 5,
    name: "Dog Carrier Leash",
    price: 260,
    quantity: 1,
    image: "/img/cart/cart-thumb1_5.png",
  },
];

export const formatCurrency = (value: number) =>
  value.toLocaleString(undefined, { style: "currency", currency: "USD" });