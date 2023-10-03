import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testando a página', () => {
  it('se renderiza a "/"', () => {
    renderWithRouterAndRedux(<App />);
  });

  it('se renderiza o input de email', () => {
    renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByTestId('email-input');
    expect(emailInput).toBeInTheDocument();
  });

  it('se renderiza o input de senha', () => {
    renderWithRouterAndRedux(<App />);
    const passwordInput = screen.getByTestId('password-input');
    expect(passwordInput).toBeInTheDocument();
  });

  it('se renderiza o botão de login com o texto correto ("Entrar")', () => {
    renderWithRouterAndRedux(<App />);
    const loginButton = screen.getByRole('button');
    expect(loginButton).toHaveTextContent('Entrar');
  });

  it('se o botão de login fica desabilitado caso algum campo obrigatório não esteja devidamente preenchido', async () => {
    renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const loginButton = screen.getByRole('button');
    const user = userEvent.setup();
    const rightEmail = 'fla@men.go';
    const rightPassword = 'malvado';
    const wrongEmail = 'flamen@go';
    const wrongPassword = 'ruim';

    await user.type(emailInput, wrongEmail);
    await user.type(passwordInput, wrongPassword);
    expect(loginButton).toBeDisabled();
    await user.clear(emailInput);
    await user.clear(passwordInput);

    await user.type(emailInput, rightEmail);
    await user.type(passwordInput, wrongPassword);
    expect(loginButton).toBeDisabled();
    await user.clear(emailInput);
    await user.clear(passwordInput);

    await user.type(emailInput, wrongEmail);
    await user.type(passwordInput, rightPassword);
    expect(loginButton).toBeDisabled();
    await user.clear(emailInput);
    await user.clear(passwordInput);

    await user.type(emailInput, rightEmail);
    await user.type(passwordInput, rightPassword);
    expect(loginButton).toBeEnabled();
  });

  it('se ao clickar no botão "Entrar", é redirecionado para "/carteira"', async () => {
    renderWithRouterAndRedux(<App />);
    const loginButton = screen.getByRole('button', { name: 'Entrar' });
    const emailInput = screen.getByTestId(/email-input/i);
    const passwordInput = screen.getByTestId(/password-input/i);
    const rightEmail = 'fla@men.go';
    const rightPassword = 'malvado';

    expect(loginButton).toBeDisabled();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    await userEvent.type(emailInput, rightEmail);
    await userEvent.type(passwordInput, rightPassword);

    expect(loginButton).toBeEnabled();
    expect(emailInput).toHaveValue(rightEmail);
    expect(passwordInput).toHaveValue(rightPassword);

    await userEvent.click(loginButton);

    expect(loginButton).not.toBeInTheDocument();
  });
});
