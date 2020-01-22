import React, { useState, useRef } from 'react';
import '../../index.css';
import DragView from './DragView';
import PropTypes from 'prop-types';
import useDrag from '../../hooks/useDrag';

export default function DragItem({ dragEffect, data, id }) {
  const dragRef = useRef();
  const [classValue, setClassValue] = useState('grab');
  
  // eslint-disable-next-line no-unused-vars
  const { dragState } = useDrag({
    id,
    effect: dragEffect,
    ref: dragRef,
    onDragStart: () => {
      setClassValue('grabbing');
    },

    onDragEnd: () => {
      setClassValue('grab');
    }
  });
  
  return <DragView ref={dragRef} data={data} classValue={classValue} />;
}

DragItem.propTypes = {
  dragEffect: PropTypes.string,
  data: PropTypes.object,
  id: PropTypes.string
};