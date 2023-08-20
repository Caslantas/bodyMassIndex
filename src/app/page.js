"use client"
import { useMemo, useState } from 'react';

export default function Home() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
 

  const BKI = useMemo(() => {
    const weightNum=parseFloat(weight)
    const heightNum=parseFloat(height)
    if (!isNaN(weightNum)&& !isNaN(heightNum && weightNum>0 && heightNum>0)) {
      const heightCM = height / 100;
      return (weightNum / (heightCM * heightCM)).toFixed(2);
    }
    return null;
  }, [weight, height]);

  let category = "";
  
  if (BKI !== null) {
    if (BKI < 18.5) {
      category = "Zayıf";
     
    } else if (BKI >= 18.5 && BKI < 24.5) {
      category = "Normal";
     
    } else if (BKI >= 24.5 && BKI < 29.9) {
      category = "Kilolu";
     
    } else if (BKI >= 30) {
      category = "Obez";
      
    }
  }

  return (
    <div className='container'>
      <form>
        <label>Kilonuz:</label>
        <input type='number' min="0" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <label>Boyunuz:</label>
        <input type='number' min="0" value={height} onChange={(e) => setHeight(e.target.value)} />
      </form>
      {BKI !== null && (
        <div>
          <p>Vücut Kitle İndex: {BKI}</p>
          <h3>Durum: {category}</h3>
       
        </div>
      )}
    {BKI !== null && BKI>25 ? <img src='/üzgün.jpg' alt='üzgün'/>: <img src='/mutlu.jpg' alt='mutlu'/>}
    </div>
  );
}
