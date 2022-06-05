import { products } from "../data/productData";
import { createSlice } from "@reduxjs/toolkit";

export const productStore = createSlice({
  name: "productStore",
  initialState: { data: products, cart: [], purchases: [] },
  reducers: {
    addProduct: (state, action) => {
      let temp = [...state.data];
      const payload = action.payload.inputs;
      temp.unshift(payload);
      state.data = temp;
    },
    deleteProduct: (state, action) => {
      state.data = state.data.filter((x) => x.id !== action.payload.id);
    },
    addToCart: (state, action) => {
      let temp = [...state.cart];
      const payload = action.payload.inputs;
      temp.unshift(payload);
      state.cart = temp;
    },
    purchaseProduct: (state, action) => {
      let cart = [...state.cart];
      let store = [...state.data];
      const finalStore = [];

      store.forEach((storeItem) => {
        cart.forEach((cartItem) => {
          if (storeItem.id === cartItem.product.id) {
            storeItem.stockAmount =
              storeItem.stockAmount - parseInt(cartItem.quantity);
          }
        });
        finalStore.push(storeItem);
      });
      cart.forEach((item) => {
        state.purchases.push(item);
      });

      state.data = finalStore;
      state.cart = [];
    },
  },
});

export const { addProduct, deleteProduct, addToCart, purchaseProduct } =
  productStore.actions;
export default productStore.reducer;
