/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import './index.css';

export default forwardRef(({ children, heading }, ref) => {
  return (
    <div className="column" ref={ref}>
      <h1>{heading}</h1>
      <div className="container-card">{children}</div>
    </div>
  );
});
