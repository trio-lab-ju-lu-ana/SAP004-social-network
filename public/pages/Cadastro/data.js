export const addNewUser = (email,password) => {
   return AUTH.createUserWithEmailAndPassword(email,password).then((credential)=> {
        localStorage.setItem("user", JSON.stringify(credential.user))
        return true
    })
}