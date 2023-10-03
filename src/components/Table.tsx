import { useDispatch, useSelector } from 'react-redux';
import { GlobalState } from '../types';
import { removeExpenseAction } from '../redux/actions';

function Table() {
  const { expenses } = useSelector((state: GlobalState) => state.wallet);
  const dispatch = useDispatch();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={ expense.id }>
              <td>{ expense.description }</td>
              <td>{ expense.tag }</td>
              <td>{ expense.method }</td>
              <td>{ Number(expense.value).toFixed(2) }</td>
              <td>{ expense.exchangeRates[expense.currency].name }</td>
              <td>
                {
                  Number(
                    expense.exchangeRates[expense.currency].ask,
                  ).toFixed(2)
                }
              </td>
              <td>
                {
                  (
                    Number(
                      expense.exchangeRates[expense.currency].ask,
                    ) * Number(expense.value)
                  ).toFixed(2)
                }
              </td>
              <td>Real</td>
              <td>
                <button
                  data-testid="delete-btn"
                  onClick={
                    () => dispatch(removeExpenseAction(expense.id))
                  }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
