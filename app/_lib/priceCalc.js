import { getPrice } from "./getPrice";

export function priceCalc(state) {
  const data = getPrice(state.selectedSize, state.selectedQuality);
  if (!data) {
    state.flexPrice = 0;
    state.totalPrice = 0;
    state.saving = 0;
    state.savingPercentage = 0;
    return;
  }

  const { flexPrice, marketPrice } = data;
  state.flexPrice = flexPrice;
  state.taxAmount = flexPrice * (state.tax / 100);

  const baseTotal = flexPrice + state.taxAmount + state.cleaningPrepFee;

  const days = state.totalDate || 1;
  const qty = state.quantity || 1;

  state.totalPrice = baseTotal * qty * days;
  state.saving = marketPrice - flexPrice;
  state.savingPercentage = Math.round(
    ((state.saving / marketPrice) * 100).toFixed(2)
  );
}
