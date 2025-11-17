import { prices } from "@/_lists/prices";

export function getPrice(size, tier) {
  const key = `${size}_${tier}`;
  const data = prices[key];

  if (!data) return;
  return data;
}
