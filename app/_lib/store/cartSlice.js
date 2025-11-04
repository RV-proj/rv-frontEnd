import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedSize: "",
  selectedQuality: "",
  totalDate: 0,
  quantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setSelectedSize: (state, action) => {
      state.selectedSize = action.payload;
    },
    setSelectedQuality: (state, action) => {
      state.selectedQuality = action.payload;
    },
  },
});

export const { setSelectedSize, setSelectedQuality } = cartSlice.actions;
export default cartSlice.reducer;
