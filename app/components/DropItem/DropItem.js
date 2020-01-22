import React, { useRef } from "react";
import DropView from "./DropView";
import useDrop from "../../hooks/useDrop";

export default ({ children, heading, onDrop }) => {
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
};
