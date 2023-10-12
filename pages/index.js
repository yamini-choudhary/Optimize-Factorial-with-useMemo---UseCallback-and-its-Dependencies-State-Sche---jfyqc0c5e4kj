import { useState } from 'react';
import FactorialComponent from '../components/FactorialComponent';

export default function Home() {
  const [number, setNumber] = useState(0);

  const handleNumber = (e) => {
    setNumber(parseInt(e.target.value, 10));
  }

  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <section>
        <h2>Factorial Calculation</h2>
        <input
          type="number"
          value={number}
          onChange={handleNumber}
        />
        <FactorialComponent number={number} />
      </section>
    </div>
  );
}
