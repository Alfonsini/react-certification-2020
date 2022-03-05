import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, background 0s, border 0s,
    -webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, background 0s, border 0s,
    -webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background 0s, border 0s;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background 0s, border 0s,
    -webkit-box-shadow 0.15s ease-in-out;

  position: relative;
  cursor: pointer;
  margin: 0;

  :not(:last-child) {
    margin-right: 1.5rem;
  }

  background-color: transparent;
  box-shadow: none;
  padding: 0.786rem 1.5rem;
  border: 1px solid transparent;
  border-radius: 0.358rem;

  text-align: center;
  color: ${(props) => {
    let color = '';
    switch (props.typeButton) {
      case 'primary':
        color = `${props.theme.buttonPrimary}`;
        break;
      case 'secondary':
        color = `${props.theme.buttonSecondary}`;
        break;
      default:
        break;
    }
    return color;
  }};
  font-weight: 500;
  font-size: 14px;
  line-height: 1;

  :hover {
    color: ${(props) => {
      let color = '';
      switch (props.typeButton) {
        case 'primary':
          color = `${props.theme.buttonPrimary}`;
          break;
        case 'secondary':
          color = `${props.theme.buttonSecondary}`;
          break;
        default:
          break;
      }
      return color;
    }};
    background-color: rgba(115, 103, 240, 0.12);
    text-decoration: none;
  }

  :focus {
    color: ${(props) => {
      let color = '';
      switch (props.typeButton) {
        case 'primary':
          color = `${props.theme.buttonPrimary}`;
          break;
        case 'secondary':
          color = `${props.theme.buttonSecondary}`;
          break;
        default:
          break;
      }
      return color;
    }};
    outline: 0;
    background-color: rgba(130, 134, 139, 0.2);
  }

  :active {
    color: ${(props) => {
      let color = '';
      switch (props.typeButton) {
        case 'primary':
          color = `${props.theme.buttonPrimary}`;
          break;
        case 'secondary':
          color = `${props.theme.buttonSecondary}`;
          break;
        default:
          break;
      }
      return color;
    }};
    background-color: rgba(130, 134, 139, 0.2);
  }
`;

const RippleContainer = styled.div`
  position: absolute;
  left: -1px;
  top: -1px;
  height: 38px;
  width: 100px;
  pointer-events: none;
  overflow: hidden;
  border-radius: 5.012px;
  direction: ltr;
`;

const Ripple = styled.div`
  margin-top: -40.3235px;
  margin-left: -3.44845px;
  width: 120.897px;
  height: 120.897px;
  transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  border-radius: 50%;
  pointer-events: none;
  position: relative;
  z-index: 1;
`;

export { StyledButton, Ripple, RippleContainer };
