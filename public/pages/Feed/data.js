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
      likes: 0,
      whoLiked: [],
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

export function deletePost(id) {
  firebase.firestore().collection('posts').doc(id).delete();
}


const updateLike = (likes, whoLiked, id) => {
  firebase.firestore().collection('posts').doc(likes).update({
    like: likes,
    whoLiked,
  });
};

export function addLike(uidPost, user) {
  firebase.firestore().collection('posts').doc(uidPost).get()
    .then((doc) => {
      const whoLiked = doc.data().whoLiked;
      let likes = doc.data().like;
      if (whoLiked.includes(user)) {
        likes = firebase.firestore.FieldValue.increment(-1);
        const index = whoLiked.findIndex(elem => elem === user);
        whoLiked.splice(index, 1);
      } else {
        likes = firebase.firestore.FieldValue.increment(1);
        whoLiked.push(user);
      }
      updateLike(likes, whoLiked, uidPost);
    });
}




 


 
  
  


