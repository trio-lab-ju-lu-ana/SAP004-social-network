import { logout } from './data.js';

export const profileUser = () => {
  const container = document.createElement('div');
  const template = `
    <header class='header-profile'>
    <input class='check' type='checkbox' id='check'>
    <label class='image' id='icon' for='check'><img src='../images/menu-icon2.png'></label>
    <div class='bar'>
      <nav class='nav-profile'>
        <a class='a-hamburger-menu' href='#feed'><div class='link'>Home</div></a>
        <a class='a-hamburger-menu' href='#login'><div class='link'>Logout</div></a>
      </nav>
    </div>
    
    <ul class='nav-feed'>

      <li class='li-elements-profile'>
        <a class='nav-itens-profile' href='#feed' title='Profile'>Home</a>
      </li>

      <div class='container-logo-profile'>
        <img class='logo-image-profile' src='../images/AthenaLogoRetangular.png' title='Athena Hideout' alt='Athena Hideout Logo'>
      </div>

      <li class='li-elements-profile'>
        <a id='logout' class='nav-itens-profile' title='Logout'>Logout</a>
      </li>

    </ul>
  </header>
  <main class='main-profile'>
    <div class='container-form-profile'>
      <form class='form-profile' id='register-form'>
        <h2 class='text-description-profile' id='register'>Edite seu perfil!</h2>
        <fieldset class="textarea-profile">
          <input id='first-name' type='text' placeholder='Nome'>
        </fieldset>
        <fieldset class='textarea-profile'>
          <input id='last-name' type='text' placeholder='Sobrenome'>
        </fieldset>
        <fieldset class='textarea-profile'>
          <input id='nick-name' type='text' placeholder='Nick'>
        </fieldset>
        <h2 class='text-description-profile'>Bio</h2>
        <textarea class='textarea-bio' placeholder='Quais jogos você curte? E qual é sua plataforma favorita? Fale mais sobre você!'></textarea>         
      </form>
    </div>
  <main>
        `;
  container.innerHTML += template;
  const logoutUser = container.querySelector('#logout');
  logoutUser.addEventListener('click', logout);

  return container;
};
