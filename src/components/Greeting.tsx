import React from 'react';
import './Greeting.css';

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div className="greeting">Hello, {name}!</div>;
};

export default Greeting;