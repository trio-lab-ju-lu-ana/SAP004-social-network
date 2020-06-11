import {logout} from './data.js';

export const feed = () => {
  const container = document.createElement('div');
  const template = `
  <header class='header-feed'>  
    <ul class='nav-feed'>
      <li class='li-elements'>
        <a class='nav-itens' href='#profile' title='Profile'>Profile</a>
      </li>
      <li class='li-elements'>
        <div class='container-logo-feed'>
          <img class='logo-image-feed' src='../images/AthenaLogoRetangular.png' title='Athena Hideout' alt='Athena Hideout Logo'>
        </div>
      </li>
      <li class='li-elements'>
        <a id='logout' class='nav-itens' title='Logout'>Logout</a>
      </li>
    </ul>
  </header>
  <main>
    <div class='main-container'>
      <div class='container-image-photo-name'>
        <div class='container-image'>
          <p class='element-identifier'>Illustrative image</p>
        </div>
        <div class='container-photo-name'>
          <div class='container-photo'>
            <div class='photo-area'>
              <p class='element-identifier'>Profile Photo</p>
            </div>
          </div>
        <div class='container-name'>
          <p class='element-identifier'>Name</p>
          <p class='element-identifier'>Nick</p>
        </div>
      </div>
    </div>
      <div class='container-post'>
        <form id="my-feed" class='form-feed'>
          <fieldset class='post-area'>
            <textarea id="post-input" class='text-area' placeholder="Qual é a fanfic de hoje?"></textarea>
          </fieldset>
          <div class='buttons-area'>
            <button class="button" title='Anexar Imagem'>
              <i class="fas fa-image"></i>
            </button>  
            <button id="post" type="submit" class="button" title='Post'>
              <i class="far fa-paper-plane"></i>
            </button>  
          </div>
        </form>
      </div>
    </div>
    <div class='align-posts'>
      <div class='container-created-post'>
        <div class='container-info-post'>
          <p>An user name and the post status go here</p>
          <button class="button" title='Like'>
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
          </button>
        </div>
        <div id="all-posts" class='posted-message'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada eros lorem, nec commodo justo.
          Duis semper feugiat turpis, sed commodo nisi semper et. Maecenas et elit leo. Duis posuere elementum nulla vitae tempor.
          Ut ut quam non odio dapibus facilisis. Nulla sagittis libero in felis consectetur ac consectetur erat accumsan.
          Maecenas ut velit vel dui viverra vestibulum id a nunc.</p>
        </div>
        <div class='container-buttons'>
            <button class="button" title='Like'>
              <i class="far fa-star"></i>
            </button>
            <button class="button" title='Share'>
              <i class="fas fa-share-square"></i>
            </button>
          </div>
      </div>
      <div class='container-created-post'>
        <div class='container-info-post'>
          <p>An user name and the post status go here</p>
          <button class="button" title='Like'>
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
          </button>
        </div>
        <div id="all-posts" class='posted-message'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada eros lorem, nec commodo justo.
          Duis semper feugiat turpis, sed commodo nisi semper et. Maecenas et elit leo. Duis posuere elementum nulla vitae tempor.
          Ut ut quam non odio dapibus facilisis. Nulla sagittis libero in felis consectetur ac consectetur erat accumsan.
          Maecenas ut velit vel dui viverra vestibulum id a nunc.</p>
        </div>
        <div class='container-buttons'>
            <button class="button" title='Like'>
              <i class="far fa-star"></i>
            </button>
            <button class="button" title='Share'>
              <i class="fas fa-share-square"></i>
            </button>
          </div>
      </div>
    </div>
  </main>
`;

  container.innerHTML += template;
  const logoutUser = container.querySelector('#logout');
  logoutUser.addEventListener('click', logout);


  return container;
};
