export const logout = (e) => {
  e.preventDefault();
  AUTH.signOut();
  window.location.hash = '#login';
  localStorage.removeItem('user');
};


export const creatAPost = (text) => {
  DATA_BASE.collection("posts").add({
      text:text,
      name: firebase.auth().currentUser.displayName,
      userUid: firebase.auth().currentUser.uid,
      likes: 0
  })
  .then((docs)=> {
      console.log("created with id:", docs.id)
  }).catch((error) =>{
      console.log("erro:", error)
  })
 
  var user = firebase.auth().currentUser;

  if (user != null) {
    user.providerData.forEach(function (profile) {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Name: " + profile.displayName);
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
    });
  }
}


export const renderAllPosts = (feedContainer) => {
    DATA_BASE.collection("posts").onSnapshot((querySnapshot)=>{
       let posts = []
       const editLikes = (likes, id) => {
        return firebase
          .firestore()
          .collection('posts')
          .doc(id)
          .update({
            "likes": likes
          })
    
      }
      
console.log(editLikes)
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
            <button id="like-button"   class="button" title='Like'>
            <span id="numbers-like" class="like-cont">${post.likes}</span>
              <i class="far fa-star"></i>
            </button>
            <button class="button" title='Share'>
              <i class="fas fa-share-square"></i>
            </button>
          </div>
      </div>`).join("")
    })
  }




