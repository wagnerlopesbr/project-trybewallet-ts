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
    const isEmailValid = email.includes('@') && email.includes('.');
    const isPasswordValid = password.length >= 6;
  
    if (isEmailValid && isPasswordValid) {
      dispatch(addLoginAction(email));
      navigate('/carteira');
    } else {
      // Realize alguma ação para tratar campos inválidos, como exibir uma mensagem de erro.
    }
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
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
