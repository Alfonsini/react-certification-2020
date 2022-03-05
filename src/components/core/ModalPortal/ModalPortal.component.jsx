import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import './ModalPortal.styles.css';

const modalRoot = document.getElementById('modal');

const ModalPortal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    const dialog = document.createElement('div');
    dialog.setAttribute('role', 'dialog');
    elRef.current = dialog;
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default ModalPortal;
