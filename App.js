import React, { createContext, useState } from 'react';
import Count from './Components/Count';
import Display from './Components/Display';
import UseRef from './Hooks/UseRef';

export const store = createContext ();

function App() {
  const [data,setData] = useState([
    {
      brandname : "nokia"
    },
    {
      brandname : "Redmi"
    },
    {
      brandname : "Sony"
    }
  ]);
  return (
    <store.Provider value={[data,setData]}>
      <UseRef/>
      <Count/>
      <Display/>
    </store.Provider>
  );
}

export default App;
