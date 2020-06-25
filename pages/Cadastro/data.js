export const addNewUser = (email, password,Name,userUid) => firebase
  .auth()
	.createUserWithEmailAndPassword(email, password)
  .then(() => firebase.auth().currentUser.updateProfile({displayName: `${Name}`}))
	.then(() => {
		createUser(email,Name,userUid);
		window.location = '#login';
	})
  .catch((error) => {
    const errorCode = error.code;
   
});



