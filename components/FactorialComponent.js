import { useMemo } from 'react';

export default function FactorialComponent({ number }) {
  const result = useMemo(() => {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
      factorial *= i;
    }
    return factorial;
  }, [number]);

  return <div className='result'>The factorial of {number} is {result}</div>;
}
