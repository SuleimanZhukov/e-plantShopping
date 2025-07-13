import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const alreadyExists = state.items.find(item => item.name === actions.payload.name)
        if (alreadyExists) {
            alreadyExists.quantity += 1;
        } else {
            state.items.push({...action.payload, quantity: 1});
        }
    },
    removeItem: (state, action) => {
    },
    updateQuantity: (state, action) => {
        
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
