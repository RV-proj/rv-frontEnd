import { getPrice } from "./getPrice";

export function priceCalc(state) {
  if (!state.selectedSize || !state.selectedQuality) {
    resetPrice(state);
    return;
  }
  const data = getPrice(state.selectedSize, state.selectedQuality);
  if (!data) {
    resetPrice(state);
    return;
  }
  const { flexPrice, marketPrice } = data;

  state.flexPrice = flexPrice;
  state.taxAmount = flexPrice * (state.tax / 100);

  const baseTotal = flexPrice + state.taxAmount + state.cleaningPrepFee;
  const days = state.totalDate || 1;
  const qty = state.quantity || 1;
  const delivery = state.deliveryPrice || 0;

  state.totalPrice = baseTotal * qty * days + delivery;
  state.downPayment = Math.round(state.totalPrice * 0.05);
  state.saving = marketPrice - flexPrice;
  state.savingPercentage = Math.round((state.saving / marketPrice) * 100);
}

function resetPrice(state) {
  state.flexPrice = 0;
  state.taxAmount = 0;
  state.totalPrice = 0;
  state.downPayment = 0;
  state.saving = 0;
  state.savingPercentage = 0;
}
