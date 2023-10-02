import { useSelector } from "react-redux";
import { GlobalState } from "../types";

function Header() {
  const email = useSelector((state: GlobalState) => state.user.email);
  console.log(email);
  return (
    <header>
      <p data-testid="email-field">Login: {email}</p>
      <p data-testid="total-field">Total: 0</p>
      <p data-testid="header-currency-field">BRL</p>
    </header>
  );
}

export default Header;
