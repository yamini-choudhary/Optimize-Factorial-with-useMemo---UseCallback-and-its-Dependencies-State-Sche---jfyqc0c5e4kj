"use client"
import { useCallback, useState} from 'react';
import FactorialComponent from '../components/FactorialComponent';
export default function Home() {
  const[input,setInput]=useState(5);
  const handleChange=useCallback((e)=>{
    const value=e.target.value;
    setInput(value);
  },[]);
  return (
    <div>
        <h1>Welcome to Next.js!</h1>
        <section>
                <h2>Factorial Calculation</h2>
                <input
                    type="number"
                    onChange={handleChange}
                    value={input}
                />
                <FactorialComponent val={input}/>
            </section>
    </div>
);
}
