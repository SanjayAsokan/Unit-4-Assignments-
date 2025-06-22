import React from 'react';

function Card(props) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '16px',
      margin: '10px',
      borderRadius: '8px',
      width: '250px',
      backgroundColor: '#f1f1f1'
    }}>
      <h3>{props.title}</h3>
      <div>{props.children}</div>
    </div>
  );
}

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <Card title="Card 1">
        This is the first card content.
      </Card>

      <Card title="Card 2">
        This is the second card with different text.
      </Card>

      <Card title="Card 3">
        This is the third card showing reusable content.
      </Card>
    </div>
  );
}

export default App;
