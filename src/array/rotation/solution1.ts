export default function rotate(nums: number[], k: number) {
  const record = {};
  nums.forEach((num, i) => {
    record[(i + k) % nums.length] = num;
  });

  return Object.entries(record).map(([, value]) => value);
}
