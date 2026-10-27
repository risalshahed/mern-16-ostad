import { useState } from "react";

const Count = () => {
  // let count = 0;
  const [count, setCount] = useState(0);

  // State hosse emn 1ta data, jeita Browser er Re-Render a Update hoy
  // JavaScript er Local variable Re-Render a Update hoy NAAA
  
  const handleClick = () => {
    setCount(count + 1);  // 0 + 1 = 1
    console.log(count);   // Here, the value is BEFORE RE-RENDER
  }

  console.log('After Re-render', count)

  return (
    <div>
      <p>
        {count}
      </p>

      <button
        // onclick='handleClick()'   // HTML way
        onClick={handleClick}
      >
        Add Count
      </button>
    </div>
  )
}

export default Count;