/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import './index.css';
import Card from '../Card/Card';


export default forwardRef(({ data, classValue }, ref) => {
  const { type, title, position } = data;
  
  return (
    <div className={`item ${classValue}`} ref={ref}>
      <Card
        type={type}
        title={title}
        position={position}
      />
    </div>
  );
});

