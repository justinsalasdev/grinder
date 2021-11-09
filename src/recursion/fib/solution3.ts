export default function get_fib(n: number) {
  let prev = 0;
  let curr = 1;
  let counter = 3;

  while (counter++ <= n) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return n > 1 ? curr : prev;
}
