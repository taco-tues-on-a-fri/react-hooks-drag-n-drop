import { useEffect, useCallback, useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  const handleKeyUp = useCallback(
    event => {
      const keys = {
        27: () => {
          event.preventDefault();
          // onCloseRequest();
          toggle();
          window.removeEventListener('keyup', handleKeyUp, false);
        }
      };

      if (keys[event.keyCode]) {
        keys[event.keyCode]();
      }
    },
    [toggle]
  );

  useEffect(() => {
    if (isShowing === true) {
      window.addEventListener('keyup', handleKeyUp, false);

      return () => {
        window.removeEventListener('keyup', handleKeyUp, false);
      };
    }}, [handleKeyUp]);

  return {
    isShowing,
    toggle,
  };
};

export default useModal;