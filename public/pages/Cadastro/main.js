import { addNewUser } from './data.js';
import { handleFirebaseError } from '../../utils/errorHandler.js';

export const signUp = () => {
  const container = document.createElement('div');
  container.className = 'full-height align-items-login';
  const template = `
  <div class='align-items-login'>
    <div class='align-logo'>
       <img class='logo-login' src='./images/AthenaLogoQuadrado.png'>     
    </div>
    <div class="align">
      <form class="form" id="register-form">
        <h2 class='text-description-register' id='register'>Cadastre-se - É rápido!</h2>
        <fieldset class="textarea">
          <input id='name' type='text' placeholder="Nome e Sobrenome">
        </fieldset>
        <fieldset class="textarea">
          <input id='userEmail' type='email' placeholder="E-mail" required>
        </fieldset>
        <fieldset class="textarea">
          <input id='userPassword' type='password' placeholder="Senha" required>
        </fieldset>
        <button class="button-login" id='register-button' type="submit">Cadastrar!</button><br>
        <div class="alert hidden">Usuário já registrado!</div>
        <div>Já tem uma conta?<a href="#login">Login</a></div>
      </form>
    </div>
  </div>
      `;
  container.innerHTML += template;

  const signUpForm = container.querySelector('#register-form');
  const errorAlert = container.querySelector('.alert');

  const handleSubmmit = (e) => {
    e.preventDefault();
    const email = signUpForm.userEmail.value;
    const password = signUpForm.userPassword.value;
    const name = signUpForm.name.value;

    addNewUser(email, password,name).then(() => {
      window.location.hash = '#feed';
    }).catch((error) => {
      handleFirebaseError(error, errorAlert);
    });
    
  };

  container.addEventListener('submit', handleSubmmit);

  return container;
};
