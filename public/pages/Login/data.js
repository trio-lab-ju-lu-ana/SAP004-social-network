export const loginUser = (email, password) => {
<<<<<<< HEAD
   console.log('Primeiro Passo');
    return AUTH.signInWithEmailAndPassword(email,password).then((credential)=>{
    console.log('Deu Certo!');    
    localStorage.setItem("user", JSON.stringify(credential.user));
        return true
    })
}
=======
    console.log('Primeiro Passo');
     return AUTH.signInWithEmailAndPassword(email,password).then((credential)=>{
     console.log('Deu Certo!');    
     localStorage.setItem("user", JSON.stringify(credential.user));
         return true
     })
 }
>>>>>>> develop-LUANA
