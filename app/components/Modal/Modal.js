import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Modal = ({ isShowing, hide, imageSource }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
          <img className="modal-image" src={imageSource} />
        </div>
      </div>
    </div>
  </React.Fragment>, document.getElementById('modal-root')
) : null;

export default Modal;