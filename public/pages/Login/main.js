import { loginUser } from './data.js';
import { handleFirebaseError } from '../../utils/errorHandler.js';

export const login = () => {
  const container = document.createElement('div');

  const template = `
  <div class='align-items-login'>
    <div class='align-logo'>
       <img class='logo-login' src='../images/AthenaLogoQuadrado.png'>     
    </div>
    <div class='align'>
      <form class="form" id='login-form'>
        <div class='container-description'>
          <h2 class='text-description'>Bem vinda a Athena Hideout</h2>
          <h2 class='text-description'>A rede social para mulheres gamers!</h2>
        </div>
        <fieldset class='textarea'>
          <input  id='userEmail' type='text' type='email' placeholder='E-mail'>
        </fieldset>
        <fieldset class='textarea'>
          <input id='userPassword' type='password' placeholder='Password'>
        </fieldset>
        <button class='button-login' id='entrar' type='submit'>Login</button>
        <div class='alert hidden'>Login ou senha incorretos!</div>
        <div>
          <p> Ou entre com:</p>
        </div>
        <div class='container-buttons-login'>
          <button><i class='fab fa-2x  fa-google'></i></button>
        </div>
        <div>
          <p>Não tem uma Conta?
            <a href='#register'>Cadastre-se!</a>
          </p>
        </div>
      </form>
  </div>
</div>
      `;
  container.innerHTML += template;

  const loginForm = container.querySelector('#login-form');
  const errorAlert = container.querySelector('.alert');


  const handleLogin = (e) => {
    e.preventDefault();
    const email = loginForm.userEmail.value;
    const password = loginForm.userPassword.value;
    loginUser(email, password).then(() => {
      window.location.hash = '#feed';
    }).catch((error) => {
      handleFirebaseError(error, errorAlert);
    });
  };

  loginForm.addEventListener('submit', handleLogin);

  return container;
};
