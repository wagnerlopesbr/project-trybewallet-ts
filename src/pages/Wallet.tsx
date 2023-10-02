import { useSelector } from "react-redux";

function Wallet() {
  const login = useSelector((state: any) => state.user.login);
  return (
    <h1>{login}</h1>
  );
}

export default Wallet;
