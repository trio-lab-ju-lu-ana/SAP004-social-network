import { logout } from './data.js';

export const profileUser = () => {
  const container = document.createElement('div');
  container.className = 'full-height align-items-login';
  const template = `
    <header class='header-feed'>
    <input class='check' type='checkbox' id='check'>
    <label class='image' id='icon' for='check'><img src='./images/menu-icon2.png'></label>
    <div class='bar'>
      <nav>
        <a class='a-hamburger-menu' href='#feed'><div class='link'>Home</div></a>
        <a class='a-hamburger-menu' href='#login'><div class='link'>Logout</div></a>
      </nav>
    </div>
    
    <ul class='nav-feed'>

      <li class='li-elements'>
        <a class='nav-itens' href='#feed' title='Profile'>Home</a>
      </li>

      <div class='container-logo-feed'>
        <img class='logo-image-feed' src='../images/AthenaLogoRetangular.png' title='Athena Hideout' alt='Athena Hideout Logo'>
      </div>

      <li class='li-elements'>
        <a id='logout' class='nav-itens' title='Logout'>Logout</a>
      </li>

    </ul>
  </header>
  <main>
    <div>
      <form class="form" id="register-form">
        <h2 class='text-description-register' id='register'>Edite seu perfil!</h2>
        <fieldset class="textarea">
          <input id='first-name' type='text' placeholder="Nome">
        </fieldset>
        <fieldset class="textarea">
          <input id='last-name' type='text' placeholder="Sobrenome">
        </fieldset>
        <fieldset class="textarea">
          <input id='nick-name' type='text' placeholder="Nick">
        </fieldset>
<<<<<<< HEAD
        <h2 class='text-description-register'>Bio</h2>
        <textarea class='textarea-bio' placeholder='Que jogos curte? E qual é sua plataforma favorita? Fale mais sobre você!'></textarea>
          
=======
        <h2>Bio</h2>
        <textarea >Que jogos curte? E qual é sua plataforma favorita?
            Fale mais sobre você!
          </textarea>
>>>>>>> develop-LUANA
      </form>
    </div>
        `;
  container.innerHTML += template;
  const logoutUser = container.querySelector('#logout');
  logoutUser.addEventListener('click', logout);

  return container;
};
