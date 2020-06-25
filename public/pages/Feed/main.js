<<<<<<< HEAD
import {
  logout, creatAPost, addLike, deletePost,
} from './data.js';

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     if (user != null) {
//       name = user.displayName;
//     }
//   } else {
//   }
// });
=======
import { logout, creatAPost, addLike,deletePost} from './data.js';
>>>>>>> develop-LUANA

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
        <a id='logout' class='logout' class='nav-itens' title='Logout'>Logout</a>
      </li>

    </ul>
  
  </header>

  <main>
    <div class='main-container'>
      <div class='container-image-photo-name'>
        <div class='container-image'>
          <img class='ilustrative-area'  class='element-identifier'  src="../images/ilustrative.jpg" >
        </div>
        <div class='container-photo-name'>
          <div class='container-photo'>
            <div >
            <img class='photo-area' class='element-identifier' src="../images/profile.png"" alt="Avatar" >
            </div>
          </div>
        <div class='container-name'>
          <p id='name-user' class='element-identifier'>${firebase.auth().currentUser}</p>
<<<<<<< HEAD
          <p class='element-identifier'>Nick</p>
=======
          
>>>>>>> develop-LUANA
        </div>
      </div>
    </div>
      <div class='container-post'>
        <form id="my-feed" class='form-feed'>
          <fieldset class='post-area'>
            <textarea id="post-input" class='text-area' placeholder="Qual é a fanfic de hoje?"></textarea>
          </fieldset>
          <div class='buttons-area'>
            <input type='file' class='button-attach' id='attach-button' title='Anexar Imagem'>
            <div class='container-attached-image' id='container-image-button'>  
              <img class='selected-image' id='attached-image' alt='Image Preview'>
              <input id='remove-image' type='button' class='remove-image' title='Remover Imagem'>
            </div>
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
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    container.querySelector('#name-user').innerHTML = firebase.auth().currentUser.displayName;
  }
});


const renderAllPosts = (feedContainer) => {
  DATA_BASE.collection("posts").onSnapshot((querySnapshot)=>{
     let posts = []
     
  
     querySnapshot.forEach((doc)=> {
         posts.push(doc.data());
     })
     feedContainer.innerHTML = posts.map(post => `
     <div>
    <div class='container-created-post'>
      <div class='container-info-post'>
      <span id="userName">${post.name}</span>
        <button class="button" title='Like'>
          <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
        </button>
      </div>
      <div id="all-posts" class='posted-message'>
      <p>${post.text}</p>
      </div>
      <div class='container-buttons'>
          <button class="btnLike" class="button" title='Like'>
          <span >${post.likes}</span>
            <i class="far fa-star"></i>
          </button>
          <button  id="btnDelete" id="${post.id}" class="button" title='Delete'>
          <i class="fa fa-trash" aria-hidden="true"></i>
          </button>

          
        </div>
    </div>`
    ).join("")
  })

 
   
  };

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      container.querySelector('#name-user').innerHTML = firebase.auth().currentUser.displayName;
    }
  });

  const renderAllPosts = (feedContainer) => {
    DATA_BASE.collection('posts').onSnapshot((querySnapshot) => {
      let posts = [];
      querySnapshot.forEach((doc) => {
        posts.push(doc.data());
      });

      feedContainer.innerHTML = posts.map(post => `
     <div>
    <div class='container-created-post'>
      <div class='container-info-post'>
      <span class ='post-username'id="userName">${post.name}</span>
        <button class="button" title='Like'>
          <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
        </button>
      </div>
      <div id="all-posts" class='posted-message'>
      <p>${post.text}</p>
      </div>
      <div class='container-buttons'>
          <button class='btnLike'   class="button" title='Like'>
          <span >${post.likes}</span>
            <i class="far fa-star"></i>
          </button>
          <button class='deletePost' class="button" title='Deletar'>
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
    </div>`).join('');
    });
  };

  container.innerHTML += template;

  const logoutUser = container.querySelector('#logout');
  const feedForm = container.querySelector('#my-feed');
  const allPosts = container.querySelector('#all-posts');

  const attachButton = container.querySelector('#attach-button');
  const attachedImage = container.querySelector('#attached-image');
  const containerAttachedImage = container.querySelector('#container-image-button');

<<<<<<< HEAD
=======
  
>>>>>>> develop-LUANA

  attachButton.addEventListener('change', function attachImage() {
    const file = this.files[0];

    console.log(file);

    if (file) {
      const reader = new FileReader();
      containerAttachedImage.style.visibility = 'visible';
      containerAttachedImage.style.marginBottom = '10px';
      containerAttachedImage.style.height = '100%';


      reader.addEventListener('load', function loadReader() {
        attachedImage.setAttribute('src', this.result);
      });

      reader.readAsDataURL(file);
    }
  });

  const removeImage = container.querySelector('#remove-image');
  removeImage.addEventListener('click', () => {
    containerAttachedImage.style.visibility = 'hidden';
    containerAttachedImage.style.marginBottom = '0px';
    containerAttachedImage.style.height = '10%';
  });

  logoutUser.addEventListener('click', logout);

<<<<<<< HEAD
  const btnDeletePost = container.querySelectorAll('.deletePost');
  btnDeletePost.forEach((doc) => {
    doc.addEventListener('click', (e) => {
      const uidPost = e.target.getAttribute('id');
      deletePost(uidPost);
    });
  });

  const btnLike = container.querySelectorAll('.btnLike');
  btnLike.forEach((doc) => {
    doc.addEventListener('click', (e) => {
      const uidPost = e.target.getAttribute('id');
      const user = firebase.auth().currentUser.uid;
      addLike(uidPost, user);
    });
  });
=======
  
  
  const btnDelete = container.querySelector('btnDelete');
      if (btnDelete) {
        btnDelete.addEventListener('click', () => {
          deletePost(posts.id);
          container.innerHTML = '';
        });
      }
      console.log(btnDelete)
   
   

  setTimeout(() => {
    const btnLike = container.querySelectorAll('.btnLike');
    btnLike.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const uidPost = e.target.getAttribute('');
        const user = firebase.auth().currentUser.uid;
        addLike(uidPost, user);
      });
    });
  }, 2000);
  


>>>>>>> develop-LUANA

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const postContent = feedForm['post-input'].value;
    creatAPost(postContent);
  };

  renderAllPosts(allPosts);
  

  feedForm.addEventListener('submit', handlePostSubmit);

  return container;
};
