import React from 'react';
import imageSwitch from '../../utils/imageSwitch';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';
import useModal from '../../hooks/useModal';

export default function Card({ type, title, position }) {
  const {isShowing, toggle} = useModal();
  
  return (
    <div className="card" key={position}>
      <img onClick={toggle} className="img card-img-top" variant="top" src={imageSwitch(type)} />
      <Modal
        isShowing={isShowing}
        hide={toggle}
        imageSource={imageSwitch(type)}
      />
      <div className="card card-body">
        <div className="card center-text">{title}</div>
      </div>
    </div>
  );
}

Card.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  position: PropTypes.number
};

