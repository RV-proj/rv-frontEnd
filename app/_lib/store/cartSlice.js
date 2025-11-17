import { createSlice } from "@reduxjs/toolkit";
import { priceCalc } from "../priceCalc";

const initialState = {
  selectedSize: "",
  selectedQuality: "",
  qualityScore: "",
  startDate: "",
  endDate: "",
  totalDate: null,
  quantity: 1,
  totalPrice: 0,
  flexPrice: 0,
  cleaningPrepFee: 150,
  tax: 6,
  taxAmount: 0,
  saving: 0,
  savingPercentage: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setSelectedSize: (state, action) => {
      state.selectedSize = action.payload;
      priceCalc(state);
    },
    setSelectedQuality: (state, action) => {
      state.selectedQuality = action.payload;
      if (state.selectedQuality === "Basic") {
        state.qualityScore = "70-80";
      }
      if (state.selectedQuality === "Standard") {
        state.qualityScore = "80-90";
      }
      if (state.selectedQuality === "Premium") {
        state.qualityScore = "90-100";
      }
      priceCalc(state);
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
    setTotalDate: (state, action) => {
      state.totalDate = action.payload;
      priceCalc(state);
    },
    setQuantity: (state, action) => {
      state.quantity = action.payload;
      priceCalc(state);
    },
  },
});

export const {
  setSelectedSize,
  setSelectedQuality,
  setStartDate,
  setEndDate,
  setTotalDate,
  setQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
