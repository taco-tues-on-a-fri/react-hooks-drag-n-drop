/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import DropView from './DropView';
import PropTypes from 'prop-types';
import useDrop from '../../hooks/useDrop';

export default function DropItem({ children, heading, onDrop }) {
  const dropRef = useRef();
  const { dropState, droppedItem } = useDrop({
    ref: dropRef,
    onDrop
  });
  
  return (
    <DropView ref={dropRef} heading={heading} droppedItem={droppedItem}>
      {children}
    </DropView>
  );
}

DropItem.propTypes = {
  children: PropTypes.array,
  onDrop: PropTypes.func,
  heading: PropTypes.string
};
