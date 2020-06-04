export const logout = (e) => {
    e.preventDefault()
    AUTH.signOut()
    window.location.hash = "#login"
    localStorage.removeItem("user")
}