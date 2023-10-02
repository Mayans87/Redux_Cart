import {createSlice,configureStore} from '@reduxjs/toolkit'


const initialCartState = { toggle: true, quantity: 0 };

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    cartToggler(state) {
      state.toggle = !state.toggle;
    },
    decrementhandler(state) {
 
        state.quantity = state.quantity - 1;
    },
      quantityIncreaser (state) {
        state.quantity = state.quantity + 1;
      }
    }
  }
);
export const cartActions = cartSlice.actions;
export const store = configureStore({
    reducer: cartSlice.reducer,
});
