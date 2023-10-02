import { useSelector } from "react-redux";
import { GlobalState } from "../types";

function Wallet() {
  const loginState = useSelector((state: GlobalState) => state.login);
  return (
    <div>
      <header>Wallet</header>
      <p data-testid="email-field">
        Login:
        {loginState.email}
      </p>
      <p data-testid="total-field">Total: 0</p>
      <p data-testid="header-currency-field">BRL</p>
    </div>
  );
}

export default Wallet;
