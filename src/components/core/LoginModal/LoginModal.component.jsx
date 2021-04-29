import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Button from '../Button/Button.component';
import LoginForm from '../LoginForm';
import Modal from '../Modal';
import { useAuth } from '../../../providers/Auth';
import { loginUser } from '../../../actions';

function LoginModal(props) {
  const { isOpen, setIsOpen } = props.value;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const { authenticated, login, userData } = useAuth();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = async (ev) => {
    ev.preventDefault();

    try {
      const response = await loginUser({ username, password });
      if (!response.id) throw Error(response);

      login(response);
      console.log(response);

      history.push('/');
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal isOpen={isOpen}>
      <Modal.Title title="Login" onClose={toggleModal} />
      <Modal.Body>
        <LoginForm onChangeUsername={setUsername} onChangePassword={setPassword} />
        {authenticated ? <span>Authenticated: {userData.name}</span> : null}
      </Modal.Body>
      <Modal.Footer>
        <Button typeButton="primary" onClick={handleLogin}>
          Login
        </Button>
        <Button typeButton="secondary" onClick={toggleModal}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginModal;
