export const logout = (e) => {
  e.preventDefault();
  AUTH.signOut();
  window.location.hash = '#login';
  localStorage.removeItem('user');
};


export const creatAPost = (text) => {
<<<<<<< HEAD
  DATA_BASE.collection('posts').add({
    text:text,
    name: firebase.auth().currentUser.displayName,
    userUid: firebase.auth().currentUser.uid,
    likes: 0,
  })
    .then((docs) => {
      console.log('created with id:', docs.id);
    }).catch((error) => {
      console.log('erro:', error);
    });

  let user = firebase.auth().currentUser;
=======
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
>>>>>>> develop-LUANA

  if (user != null) {
    user.providerData.forEach(function (profile) {
      console.log('Sign-in provider: ' + profile.providerId);
      console.log('  Provider-specific UID: ' + profile.uid);
      console.log('  Name: ' + profile.displayName);
      console.log('  Email: ' + profile.email);
      console.log('  Photo URL: ' + profile.photoURL);
    });
  }
<<<<<<< HEAD
};

export function deletePost(doc) {
  firebase.firestore().collection('posts').doc(doc).delete();
=======
}

export const deletePost = (post) => {
  firebase.firestore().collection('posts').doc(post).delete()
    .then(() => {
      console.log('document sucessfully deleted');
    });
};



const updateLike = (docs, whoLiked) => {
  firebase.firestore().collection('posts').doc(docs.data.id).update({
    likes: likes,
    whoLiked,
  });
};

export function addLike(likes, name) {
  firebase.firestore().collection('posts').doc((doc.data.id)).get()
    .then((doc) => {
      const whoLiked = doc.data().whoLiked;
      let likes = doc.data().likes;
      if (whoLiked.includes(user.uid)) {
        likes = firebase.firestore.FieldValue.increment(-1);
        const index = whoLiked.findIndex(elem => elem === user.uid);
        whoLiked.splice(index, 1);
      } else {
        likes = firebase.firestore.FieldValue.increment(1);
        whoLiked.push(name);
      }
      updateLike(likes, whoLiked);
    });
>>>>>>> develop-LUANA
}


export function addLike(doc, user) {
  firebase.firestore().collection('posts').doc(doc).get()
    .then((doc) => {
      const whoLiked = doc.data().whoLiked;
      let likes = doc.data().likes;
      if (whoLiked.includes(user)) {
        likes = firebase.firestore.FieldValue.increment(-1);
        const index = whoLiked.findIndex(elem => elem === user);
        whoLiked.splice(index, 1);
      } else {
        likes = firebase.firestore.FieldValue.increment(1);
        whoLiked.push(user);
      }
      updateLike(likes, whoLiked, doc);
    });

<<<<<<< HEAD
  const updateLike = (likes, whoLiked, doc) => {
    firebase.firestore().collection('posts').doc(doc).update({
      like: likes,
      whoLiked,
    });
  };
}
=======

 


 
  
  


>>>>>>> develop-LUANA
