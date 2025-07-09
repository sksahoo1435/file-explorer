import React from 'react';

const ModalWrapper = ({ title, onClose, children }) => (
  <div className="modal-overlay">
    <div className="modal">
      <div className="modal-header">
        <h2>{title}</h2>
        <button className="close-btn" onClick={onClose}>✖</button>
      </div>
      {children}
    </div>
  </div>
);

export default ModalWrapper;