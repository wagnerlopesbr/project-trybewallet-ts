import { useSelector } from 'react-redux';
import { GlobalState } from '../types';

function Header() {
  const loginState = useSelector((state: GlobalState) => state.login);
  return (
    <header>
      <p data-testid="email-field">
        Login:
        {loginState.email}
      </p>
      <p data-testid="total-field">Total: 0</p>
      <p data-testid="header-currency-field">BRL</p>
    </header>
  );
}

export default Header;
