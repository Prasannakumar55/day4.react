import React, { useContext } from 'react';
import { store } from '../App';

const Count = () => {
    const [data,setData] =useContext (store);
  return (
    <div>
    <h1>No Of Brands</h1>
     <h3>{data.length}</h3> 
    </div>
  )
}

export default Count
