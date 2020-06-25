export const logout = (e) => {
  e.preventDefault();
  AUTH.signOut();
  window.location.hash = '#login';
  localStorage.removeItem('user');
};

export const creatAPost = (message) => {
  DATA_BASE.collection('posts').add({
    text: message,
    name: firebase.auth().currentUser.displayName,
    userUid: firebase.auth().currentUser.uid,
    likes: 0,
    postTime: firebase.firestore.FieldValue.serverTimestamp(),
  })
    .then((docs) => {
      console.log('created with id:', docs.id);
    }).catch((error) => {
      console.log('erro:', error);
    });

  let user = firebase.auth().currentUser;

  if (user != null) {
    user.providerData.forEach(function (profile) {
      console.log('Sign-in provider: ' + profile.providerId);
      console.log('  Provider-specific UID: ' + profile.uid);
      console.log('  Name: ' + profile.displayName);
      console.log('  Email: ' + profile.email);
      console.log('  Photo URL: ' + profile.photoURL);
    });
  }
};

export function deletePost(doc) {
  firebase.firestore().collection('posts').doc(doc).delete();
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

  const updateLike = (likes, whoLiked, doc) => {
    firebase.firestore().collection('posts').doc(doc).update({
      like: likes,
      whoLiked,
    });
  };
}

// export function readTimestamp(date) {
//   let newDate = date.toDate() * 1000;
//   let newTimestamp = newDate.getYear() + '-' + newDate.getMonth() + '-' +  newDate.getDate() + '_' + newDate.getHours();
// };



 


 
  
  


