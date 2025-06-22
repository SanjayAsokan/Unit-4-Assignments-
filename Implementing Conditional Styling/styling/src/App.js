import React, { useState } from 'react';

function App() {
  const [isGreen, setIsGreen] = useState(true);

  const currentColor = isGreen ? 'Green' : 'Yellow';
  const textColor = isGreen ? 'white' : 'black';

  const buttonStyle = {
    backgroundColor: currentColor.toLowerCase(),
    color: textColor,
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer'
  };

  const handleToggle = () => {
    setIsGreen(!isGreen);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button style={buttonStyle} onClick={handleToggle}>
        Color: {currentColor}
      </button>
      <p style={{ marginTop: '20px', fontSize: '18px' }}>
        Current Color: {currentColor}
      </p>
    </div>
  );
}

export default App;
