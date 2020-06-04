export const addNewUser = (email,password) => {
    AUTH.createUserWithEmailAndPassword(email,password).then((credential)=> {
        console.log(credential.user)
    })
}