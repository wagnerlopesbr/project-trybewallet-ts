import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addLoginAction } from '../redux/actions';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isEmailValid = () => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const isPasswordValid = () => {
    return password.length >= 6;
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    return isEmailValid();
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    return isPasswordValid();
  };

  const handleSubmit = () => {
    dispatch(addLoginAction(email));
    navigate('/carteira');
  };

  return (
    <div>
      <div>
        <form>
          <input
            type="email"
            placeholder="Email"
            onChange={ (e) => { handleEmail(e); } }
            data-testid="email-input"
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={ (e) => { handlePassword(e); } }
            data-testid="password-input"
          />
        </form>
      </div>
      <div>
        <button
          type="button"
          disabled={
            !(email.includes('@') && email.includes('.') && password.length >= 6)
          }
          onClick={ () => { handleSubmit(); } }
        >
          Entrar
        </button>
      </div>
    </div>
  );
}

export default Login;
