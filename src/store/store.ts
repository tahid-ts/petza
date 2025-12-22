import { create } from 'zustand';

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalPrice: number;
}

export const useCart = create<CartState>((set) => ({
  items: [],
  totalPrice: 0,

  addItem: (newItem) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        // If the item already exists, increase its quantity
        return {
          items: state.items.map((item) =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          totalPrice: state.totalPrice + newItem.price,
        };
      } else {
        // If the item doesn't exist, add it to the cart
        return {
          items: [...state.items, { ...newItem, quantity: 1 }],
          totalPrice: state.totalPrice + newItem.price,
        };
      }
    }),

  removeItem: (id) =>
    set((state) => {
      const itemToRemove = state.items.find((item) => item.id === id);
      if (!itemToRemove) return state;

      return {
        items: state.items.filter((item) => item.id !== id),
        totalPrice: state.totalPrice - (itemToRemove.price * itemToRemove.quantity),
      };
    }),

  updateQuantity: (id, quantity) =>
    set((state) => {
      const itemToUpdate = state.items.find((item) => item.id === id);
      if (!itemToUpdate) return state;

      const priceDifference =
        (quantity - itemToUpdate.quantity) * itemToUpdate.price;

      return {
        items: state.items.map((item) =>
          item.id === id ? { ...item, quantity } : item
        ),
        totalPrice: state.totalPrice + priceDifference,
      };
    }),

  clearCart: () => set({ items: [], totalPrice: 0 }),
}));
