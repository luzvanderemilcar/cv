export default function memoize(func) {
  const cache = {};

  return (...args) => {
    const key = JSON.stringify(args);
    if (!cache[key]) {
      cache[key] = func(...args);
    }
    return cache[key];
  };
}