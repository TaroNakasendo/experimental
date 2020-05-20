const isPrimeNumber = (num, from, to) => {
  for (let i = from; i < to; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

onmessage = (message) => {
  const data = message.data;
  const isPrime = isPrimeNumber(data.num, data.from, data.to);
  postMessage(isPrime);
}