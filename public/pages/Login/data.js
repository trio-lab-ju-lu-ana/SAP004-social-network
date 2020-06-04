export const loginUser = (email,password) =>{
    AUTH.signInWithEmailAndPassword(email,password).then((crendential)=>{
        localStorage.setItem("user", JSON.stringify(credential.user))
        return true
    })
}