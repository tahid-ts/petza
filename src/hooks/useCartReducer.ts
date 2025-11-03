import { useReducer, useCallback } from "react";
import { State, Action, initialItems } from "../types/cart";

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "updateQuantity": {
      const quantity = Math.floor(action.quantity);
      if (quantity <= 0) {
        return { items: state.items.filter((it) => it.id !== action.id) };
      }
      
      const newItems = state.items.map((it) =>
        it.id === action.id ? { ...it, quantity } : it
      );
      return { items: newItems };
    }
    
    case "changeBy": {
      const item = state.items.find((it) => it.id === action.id);
      if (!item) return state;
      
      const newQuantity = item.quantity + action.delta;
      if (newQuantity <= 0) {
        return { items: state.items.filter((it) => it.id !== action.id) };
      }
      
      const newItems = state.items.map((it) =>
        it.id === action.id ? { ...it, quantity: newQuantity } : it
      );
      return { items: newItems };
    }

    case "remove":
      return { items: state.items.filter((it) => it.id !== action.id) };
      
    case "clear":
      return { items: [] };
      
    default:
      return state;
  }
}

export function useCartReducer(initialState = { items: initialItems }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeBy = useCallback((id: number, delta: number) => {
    dispatch({ type: "changeBy", id, delta });
  }, []);

  const updateQuantity = useCallback((id: number, quantity: number) => {
    dispatch({ type: "updateQuantity", id, quantity });
  }, []);

  const removeItem = useCallback((id: number) => {
    dispatch({ type: "remove", id });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "clear" });
  }, []);

  return {
    state,
    actions: {
      changeBy,
      updateQuantity,
      removeItem,
      clearCart,
    },
  };
}