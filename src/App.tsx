import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';

const App: React.FC = () => {
  return (
    <div>
      <Greeting name="Vincent" />
      <Counter />
    </div>
  );
};

export default App;