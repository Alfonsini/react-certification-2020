import React from 'react';
import { StyledButton, Ripple, RippleContainer } from './Button.styles';

function Button(props) {
  return (
    <StyledButton typeButton={props.typeButton} type="button" onClick={props.onClick}>
      {props.children}
      <RippleContainer>
        <Ripple />
      </RippleContainer>
    </StyledButton>
  );
}

export default Button;
