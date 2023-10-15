"use client"
import { useMemo } from "react";
function factorial(n) {
 if (n <= 1){
  return 1;
  }
  else{
  return n * factorial(n - 1);
  }
}
export default function FactorialComponent({val}) {
  if(val===""){
    return <div className='result'>The factorial of {val} is 1</div>;;
  }
  const fact=useMemo(()=>factorial(parseInt(val)),[val]);
  return <div className='result'>The factorial of {val} is {fact}</div>;
}
