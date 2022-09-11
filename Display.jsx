import React, { useContext } from 'react';
import { store } from '../App';

const Display = () => {
    const [data,setData] =useContext (store);
  return (
    <div>
        <h1>Name Of The Brands</h1>
        {data.map(item => <h3>{item.brandname}</h3>)}
         
    </div>
  )
}

export default Display
