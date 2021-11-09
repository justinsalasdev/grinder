type Cache = { [key: number]: number };
export default function get_fib(
  n: number,
  cache: Cache = { 1: 0, 2: 1 }
): number {
  if (n in cache) {
    return cache[n];
  } else {
    cache[n] = get_fib(n - 1, cache) + get_fib(n - 2, cache);
    return cache[n];
  }
}
