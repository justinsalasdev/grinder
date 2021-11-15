export type Nums = Array<number | Nums>;
export default function product_sum(input: Nums, d = 1) {
  let sum = 0;
  for (let el of input) {
    if (Array.isArray(el)) {
      sum += product_sum(el, d + 1);
    } else {
      sum += el;
    }
  }
  return sum * d;
}
