export const loginUser = (email,password) =>{
   return AUTH.signInWithEmailAndPassword(email,password).then((crendential)=>{
        localStorage.setItem("user", JSON.stringify(credential.user))
        return true
    })
}