import { logout} from './data.js';

export const profileUser = () => {
    const container = document.createElement('div');
  
    const template = `
    <header class='header-feed'>
    <ul class='nav-feed'>
      <li class='li-elements'>
        <a class='nav-itens' href='#feed' title='Home'>Home</a>
      </li>
      <li class='li-elements'>
        <div class='container-logo-feed'>
          <img class='logo-image-feed' src='../images/AthenaLogoRetangular.png' title='Athena Hideout'
            alt='Athena Hideout Logo'>
        </div>
      </li>
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
        <h2>Bio</h2>
        <textarea>Que jogos curte? E qual é sua plataforma favorita?
            Fale mais sobre você!
          </textarea>
      </form>
    </div>
        `;
    container.innerHTML += template;
    const logoutUser = container.querySelector('#logout');
    logoutUser.addEventListener('click', logout)
   
    return container;
};