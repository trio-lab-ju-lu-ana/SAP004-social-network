export const addNewUser = (email,password) => {
    AUTH.creatUserWithEmailAndPassword(email,password).then((credential)=> {
        console.log(credential.user)
    })
}