import React from 'react';
import {
  StyledFormControl,
  StyledInput,
  StyledLabel,
  StyledFormGroup,
} from './LoginForm.styles';

function LoginForm(props) {
  const handleOnChangeUsername = (value) => {
    props.onChangeUsername(value.target.value);
  };

  const handleOnChangePassword = (value) => {
    props.onChangePassword(value.target.value);
  };

  return (
    <StyledFormControl>
      <StyledFormGroup role="group">
        <StyledLabel>Username</StyledLabel>
        <StyledInput placeholder="Username" onChange={handleOnChangeUsername} />
      </StyledFormGroup>
      <StyledFormGroup role="group">
        <StyledLabel>Password</StyledLabel>
        <StyledInput
          placeholder="Password"
          type="password"
          onChange={handleOnChangePassword}
        />
      </StyledFormGroup>
    </StyledFormControl>
  );
}

export default LoginForm;
