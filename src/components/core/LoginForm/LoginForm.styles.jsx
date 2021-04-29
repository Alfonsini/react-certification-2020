import styled from 'styled-components';

const StyledFormControl = styled.form`
  text-align: left;
`;

const StyledFormGroup = styled.div`
  :first-child {
    margin-bottom: 20px;
  }
`;

const StyledInput = styled.input`
  border: none;
  padding: 0.7rem 1.5rem 0.7rem 0.7rem;
  flex: 1;
  outline: 0;
  border: solid ${(props) => props.theme.inputBorder};
  border-width: 1px;
  border-radius: 0.357rem;
  width: 100%;
  height: 40px;

  background-color: ${(props) => `${props.theme.backgroundColorWrapper}`};
  color: ${(props) => `${props.theme.text}`};

  font-weight: 400;
  font-size: 13px;
  font-family: inherit;

  :placeholder {
    color: #b6b8bf;
    opacity: 1; /* Firefox */
  }

  :focus {
    border: solid ${(props) => props.theme.inputBorderFocus};
    border-width: 1px;

    ::-webkit-input-placeholder {
      /* WebKit browsers */
      padding-left: 0.2rem;
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
    }
    :-moz-placeholder {
      /* Mozilla Firefox 4 to 18 */
      padding-left: 0.2rem;
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
    }
    ::-moz-placeholder {
      /* Mozilla Firefox 19+ */
      padding-left: 0.2rem;
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
    }
    :-ms-input-placeholder {
      /* Internet Explorer 10+ */
      padding-left: 0.2rem;
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
    }
  }

  :not(::first-child) {
    margin-bottom: 0.2857rem;
  }
`;

const StyledLabel = styled.label`
  color: #5e5873;
  font-size: 14px;
  margin-bottom: 0.2857rem;
  color: ${(props) => `${props.theme.text}`};
`;

export { StyledFormControl, StyledInput, StyledLabel, StyledFormGroup };
