import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addLoginAction } from '../redux/actions';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    dispatch(addLoginAction(email));
    navigate('/carteira');
  };

  const validatingEmail = email.includes('@') && email.includes('.');
  const validatingPassword = password.length >= 6;

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    return validatingEmail;
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    return validatingPassword;
  };

  return (
    <div>
      <div>
        <form>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={ email }
            onChange={ (e) => { handleEmail(e); } }
            data-testid="email-input"
          />
          <input
            type="password"
            id="password"
            placeholder="Senha"
            value={ password }
            onChange={ (e) => { handlePassword(e); } }
            data-testid="password-input"
          />
        </form>
      </div>
      <div>
        <button
          type="button"
          disabled={ !validatingEmail && validatingPassword }
          onClick={ handleSubmit }
        >
          Entrar
        </button>
      </div>
    </div>
  );
}

export default Login;
