import { getPrice } from "./getPrice";

export function priceCalc(state) {
  const { flexPrice, marketPrice } = getPrice(
    state.selectedSize,
    state.selectedQuality
  );
  state.flexPrice = flexPrice;
  state.taxAmount = flexPrice * (state.tax / 100);

  const baseTotal = flexPrice + state.taxAmount + state.cleaningPrepFee;

  state.totalPrice = baseTotal * state.quantity * state.totalDate;
  state.saving = marketPrice - flexPrice;
  state.savingPercentage = ((state.saving / marketPrice) * 100).toFixed(2);
}
