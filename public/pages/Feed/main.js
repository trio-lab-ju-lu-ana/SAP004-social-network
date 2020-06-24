import { logout, creatAPost, renderAllPosts} from './data.js';

export const feed = () => {
  const container = document.createElement('div');
  const template = `
  <header class='header-feed'>
    <input class='check' type='checkbox' id='check'>
    <label class='image' id='icon' for='check'><img src='../images/menu-icon2.png'></label>
    <div class='bar'>
      <nav>
        <a class='a-hamburger-menu' href='#profile'><div class='link'>Profile</div></a>
        <a class='a-hamburger-menu' href='#login'><div class='link'>Logout</div></a>
      </nav>
    </div>
    
    <ul class='nav-feed'>

      <li class='li-elements'>
        <a class='nav-itens' href='#profile' title='Profile'>Profile</a>
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
          <p class='element-identifier'>${firebase.auth().providerId}</p>
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
      <div id="all-posts"  id="all-users" class='posted-message'>
      
      </div>
    </div>
  </main>
`;

  container.innerHTML += template;
  const logoutUser = container.querySelector('#logout');
  const feedForm = container.querySelector('#my-feed');
  const allPosts = container.querySelector('#all-posts');
  
  
 

  logoutUser.addEventListener('click', logout);


  const handlePostSubmit = (e) => {
    e.preventDefault();
    const postContent = feedForm['post-input'].value;
    creatAPost(postContent);
  };

  renderAllPosts(allPosts);




  feedForm.addEventListener('submit', handlePostSubmit);

  return container;
};
