import React, { useEffect, useState } from 'react'


function heavyComputation() {
  // Simulate CPU work
  let total = 0;
  for (let i = 0; i < 1e8; i++) {
    total += i;
  }
  return total;
}

function Setting() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const result = heavyComputation(); // simulate load
    setData(result);
  }, []);
  const paragraph = "This is a test paragraph to simulate a heavy rendering load for performance testing.";
  return (
    <div>
      <h2>Setting Page (Heavy)</h2>
      <p>Expensive computation result: {data}</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
        {[...Array(500)].map((_, i) => (
          <div key={i} style={{ width: '100px', height: '100px', background: '#ddd' }}>
            Box {i + 1}
          </div>
        ))}
       {Array.from({ length: 1000 }, (_, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      </div>
    </div>
  )
}

export default Setting