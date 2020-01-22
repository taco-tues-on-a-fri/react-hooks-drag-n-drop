import React, { useState, useRef } from 'react';
import '../../index.css';
import DragView from './DragView';
import useDrag from '../../hooks/useDrag';

export default function DragItem({ dragEffect, data, id }) {
  const dragRef = useRef();
  const [classValue, setClassValue] = useState('grab');
  
  const { dragState } = useDrag({
    id,
    effect: dragEffect,
    ref: dragRef,
    onDragStart: () => {
    setClassValue('grabbing')
    },

    onDragEnd: () => {
    setClassValue('grab')
    }
  });
  
  return <DragView ref={dragRef} data={data} classValue={classValue} />;
};
