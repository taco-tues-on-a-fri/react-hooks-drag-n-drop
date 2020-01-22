import React, { forwardRef } from 'react';
import "./index.css";

export default forwardRef(({ children, heading }, ref) => {
  return (
    <div className="inner-container" ref={ref}>
      <h1>{heading}</h1>
      <div className="inner-body">{children}</div>
    </div>
  );
});
