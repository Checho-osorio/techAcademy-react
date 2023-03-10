import React, { useState, createContext } from 'react';

const DEFAULT_VALUE = {
  state: {
    cart: [],
  },
  setState: () => {},
};

const CartContext = createContext(DEFAULT_VALUE);

function CartContexProvider({ children }) {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <CartContext.Provider value={{ state, setState }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContexProvider };
export default CartContext;
