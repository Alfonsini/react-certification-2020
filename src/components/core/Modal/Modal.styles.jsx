import styled from 'styled-components';

const Header = styled.header`
  background-color: ${(props) => `${props.theme.backgroundColorBody}`};
  border-bottom: none;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: calc(0.358rem - 1px);
  border-top-right-radius: calc(0.358rem - 1px);
  padding: 0.3rem 1.4rem;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

const ModalTitle = styled.h5`
  font-family: inherit;
  font-weight: 500;
  color: ${(props) => `${props.theme.modalTitleText}`};

  margin-top: 0;
  margin-bottom: 0;

  line-height: 1.45;
  font-size: 20px;
  font-family: inherit;
  font-weight: 500;
`;

const ModalButtonClose = styled.button`
  overflow: visible;
  text-transform: none;
  -webkit-appearance: button;

  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  /* color: #5e5873; */

  color: ${(props) => `${props.theme.text}`};

  text-shadow: 0 1px 0 #fff;
  float: right;
  border: 0;

  margin: -0.5rem -1.4rem -0.8rem auto;

  opacity: 1;

  position: relative;

  padding: 0.4rem 0.62rem;
  -webkit-box-shadow: 0 5px 20px 0 rgb(34 41 47 / 10%);
  box-shadow: 0 5px 20px 0 rgb(34 41 47 / 10%);
  border-radius: 0.357rem;
  background-color: ${(props) => `${props.theme.backgroundColorWrapper}`};

  -webkit-transition: all 0.23s ease 0.1s;
  transition: all 0.23s ease 0.1s;
  transform: translate(8px, -2px);

  :not(:disabled) {
    cursor: pointer;
  }

  :hover {
    opacity: 1;
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-transform: translate(5px, 3px);
    transform: translate(5px, 3px);
  }
`;

const Body = styled.div`
  padding: 0.8rem 1.4rem;
  position: relative;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  outline: 0;

  :after,
  :before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  background-color: ${(props) => `${props.theme.backgroundColorWrapper}`};
`;

const Footer = styled.footer`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;

  border-top: 1px solid rgba(34, 41, 47, 0.05);

  border-bottom-right-radius: calc(0.358rem - 1px);
  border-bottom-left-radius: calc(0.358rem - 1px);

  padding: 0.8rem 1.4rem;
  background-color: ${(props) => `${props.theme.backgroundColorWrapper}`};
`;

export { Body, Footer, Header, ModalButtonClose, ModalTitle };
