export default function get_fib(n: number): number {
  if (n === 2) {
    return 1;
  } else if (n === 1) {
    return 0;
  } else {
    return get_fib(n - 1) + get_fib(n - 2);
  }
}
