import React from 'react';
import './Spinner.css';

const Spinner = () => {
  return (
    <div className='double-circle-loader'>
      <div className='circle1'></div>
      <div className='circle2'></div>
    </div>
  );
};

export default Spinner;