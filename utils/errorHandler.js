const FIREBASE_ERRORS = {
    "auth/email-already-in-use" : "Usuario já existe :C",
    "auth/network-request-failed" : "Você está offline :C",
    "auth/weak-password" : "senha precisa ter no minimo 6 caracteres :C",
    "auth/invalid-email": "email invalido :C",
    "auth/user-not-found" : "usuario ou senha incorreto",
    "auth/wrong-password" : "usuario ou senha incorreto"

}

export const handleFirebaseError = (error, htmlElement) => {
    htmlElement.classList.add("show")
    htmlElement.classList.remove("hidden")
    console.error(error)
    htmlElement.textContent = FIREBASE_ERRORS[error.code] || "Ocorreu um erro"

}

