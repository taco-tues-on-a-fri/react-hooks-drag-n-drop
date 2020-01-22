import { useState, useEffect } from 'react';

const useDrag = ({ id, effect, ref, onDragStart, onDragOver, onDragEnd }) => {
  const [dragState, updateDragState] = useState('draggable');
  
  const dragStartCb = event => {
    updateDragState('dragStart');
    event.dataTransfer.dropEffect = effect;
    event.dataTransfer.setData('source', id);
    onDragStart && onDragStart();
  };

  const dragOverCb = event => {
    updateDragState('dragging');
    onDragOver && onDragOver();
  };

  const dragEndCb = event => {
    updateDragState('draggable');
    onDragEnd && onDragEnd();
  };

  useEffect(() => {
    const elem = ref.current;
    
    if (elem) {
      elem.setAttribute('draggable', true);
      elem.addEventListener('dragstart', dragStartCb);
      elem.addEventListener('dragover', dragOverCb);
      elem.addEventListener('dragend', dragEndCb);
      
      return () => {
        elem.removeEventListener('dragstart', dragStartCb);
        elem.removeEventListener('dragover', dragOverCb);
        elem.removeEventListener('dragend', dragEndCb);
      };
    }
  }, []);
  
  return {
    dragState: dragState
  };
};

export default useDrag;
