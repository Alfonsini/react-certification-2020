import React from 'react';

import ModalPortal from '../ModalPortal';
import { Body, Footer, Header, ModalButtonClose, ModalTitle } from './Modal.styles';

function Modal({ isOpen, children }) {
  return isOpen ? <ModalPortal>{children}</ModalPortal> : null;
}

Modal.Title = (props) => (
  <Header>
    <ModalTitle>{props.title}</ModalTitle>
    <ModalButtonClose type="button" onClick={props.onClose}>
      x
    </ModalButtonClose>
  </Header>
);
Modal.Body = (props) => <Body>{props.children}</Body>;
Modal.Footer = (props) => <Footer>{props.children}</Footer>;

export default Modal;
