import React from 'react';

const FeatureItem = ({ text }) => (
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
    <span style={{ color: 'green', fontWeight: 'bold', marginRight: '8px' }}>✔</span>
    <span>{text}</span>
  </div>
);

const PlanCard = ({ title, price, features, highlight }) => (
  <div style={{
    borderBottom: '1px solid #ccc',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
    <div>
      <h3>{title}</h3>
      {features.map((item, index) => (
        <FeatureItem key={index} text={item} />
      ))}
    </div>

    <div style={{ textAlign: 'right' }}>
      <h2>{price}</h2>
      <button style={{
        backgroundColor: highlight ? '#a855f7' : '#d1d5db',
        color: '#fff',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '6px',
        fontWeight: 'bold',
        cursor: 'pointer'
      }}>
        Get Started
      </button>
    </div>
  </div>
);

function App() {
  const plans = [
    {
      title: 'Starter',
      price: 'Free',
      features: ['1 lorem ipsum', 'Lorem, ipsum dolor.', 'Monthly Updates'],
      highlight: false,
    },
    {
      title: 'Lorem Plus',
      price: '$32.00',
      features: ['1 lorem ipsum', 'Lorem, ipsum dolor.', 'Monthly Updates'],
      highlight: true,
    },
    {
      title: 'Lorem Pro',
      price: '$50.00',
      features: ['1 lorem ipsum', 'Lorem, ipsum dolor.', 'Monthly Updates'],
      highlight: false,
    }
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1>The Right Plan for <span style={{ color: '#a855f7' }}>Your Business</span></h1>
        <p style={{ color: '#555' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quod in iure vero. 
          Facilis magnam, sed officiis commodi labore odit.
        </p>
      </div>

      {plans.map((plan, idx) => (
        <PlanCard key={idx} {...plan} />
      ))}
    </div>
  );
}

export default App;
