import { useSelector } from 'react-redux';
import { GlobalState } from '../types';

function Header() {
  const { user, wallet } = useSelector((state: GlobalState) => state);

  const getTotal = () => {
    return wallet.expenses.reduce((acc, curr) => {
      const { currency, exchangeRates } = curr;
      const ask = Number(exchangeRates[currency].ask);
      return acc + (Number(ask) * Number(curr.value));
    }, 0).toFixed(2);
  };

  return (
    <header>
      <p data-testid="email-field">
        Login:
        {user.email}
      </p>
      <p data-testid="total-field">
        Total:
        {getTotal()}
      </p>
      <p data-testid="header-currency-field">BRL</p>
    </header>
  );
}

export default Header;
