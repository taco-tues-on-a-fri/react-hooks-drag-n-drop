import { useState, useEffect } from 'react';

const useDrop = ({ ref, onDrop }) => {
  const [dropState, updateDropState] = useState('droppable');
  
  const dropOverCb = event => {
    event.preventDefault();
    updateDropState('dragging over');
  };

  const dropCb = event => {
    event.preventDefault();
    onDrop(event.dataTransfer.getData('source'));
    updateDropState('dropped');
  };

  useEffect(() => {
    const elem = ref.current;
    
    if (elem) {
      elem.addEventListener('dragover', dropOverCb);
      elem.addEventListener('drop', dropCb);
      
      return () => {
        elem.removeEventListener('dragover', dropOverCb);
        elem.removeEventListener('drop', dropCb);
      };
    }
  });
  
  return {
    dropState
  };
};

export default useDrop;
