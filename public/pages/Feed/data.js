export const logout = (e) => {
  e.preventDefault();
  AUTH.signOut();
  window.location.hash = '#login';
  localStorage.removeItem('user');
};


export const creatAPost = (text) => {
  DATA_BASE.collection("posts").add({
      text:text
  }).then((docs)=> {
      console.log("created with id:", docs.id)
  }).catch((error) =>{
      console.log("erro:", error)
  })
}

export const renderAllPosts = (feedContainer) => {
    DATA_BASE.collection("posts").onSnapshot((querySnapshot)=>{
       let posts = []

       querySnapshot.forEach((doc)=> {
           posts.push(doc.data());
       })
       feedContainer.innerHTML = posts.map(post => `
       <div>
      <div class='container-created-post'>
        <div class='container-info-post'>
          <p>An user name and the post status go here</p>
          <button class="button" title='Like'>
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
          </button>
        </div>
        <div id="all-posts" class='posted-message'>
        <p>${post.text}</p>
        </div>
        <div class='container-buttons'>
            <button class="button" title='Like'>
              <i class="far fa-star"></i>
            </button>
            <button class="button" title='Share'>
              <i class="fas fa-share-square"></i>
            </button>
          </div>
      </div>`).join("")
    })
}