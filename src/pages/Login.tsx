import { LoginType } from "../types";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addLoginAction } from "../redux/actions";


function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, setLogin] = useState<LoginType>(
    {
      email: '',
      password: ''
    }
  );

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setLogin({
      ...login,
      [id]: value
    });
  };

  const handleSubmit = () => {
    dispatch(addLoginAction(login.email));
    navigate('/carteira');
  };

  const validating = login.password.length >= 6
    && login.email.includes('@')
    && login.email.includes('.');

  return (
    <>
      <div>
        <div>
          <form>
            <label htmlFor="email">Email:</label>
            <input 
              type="email"
              id="email"
              placeholder="Email"
              value={ login.email }
              onChange={ handleInput } 
              data-testid="email-input"
            />
            <label htmlFor="password">Senha:</label>
            <input 
              type="password"
              id="password"
              placeholder="Senha"
              value={ login.password }
              onChange={ handleInput } 
              data-testid="password-input"
            />
          </form>
        </div>
        <div>
          <button
            type="button"
            disabled={ !validating }
            onClick={ handleSubmit }
          >
            Entrar
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
