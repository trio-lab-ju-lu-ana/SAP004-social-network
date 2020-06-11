export const logout = (e) => {
  e.preventDefault();
  AUTH.signOut();
  window.location.hash = '#login';
  localStorage.removeItem('user');
};


export const creatAPost = (text) => {
  DATA_BASE.collection("posts").add({
      text:text
  }).then((docs)=> {
      console.log("created with id:", docs.id)
  }).catch((error) =>{
      console.log("erro:", error)
  })
}

export const renderAllPosts = (feedContainer) => {
    DATA_BASE.collection("posts").onSnapshot((querySnapshot)=>{
       let posts = []

       querySnapshot.forEach((doc)=> {
           posts.push(doc.data());
       })
       feedContainer.innerHTML = posts.map(post => `<p>${post.text}</p>`).join("")
    })
}