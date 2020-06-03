export const signUp = () => {
  const signUpContainer = document.createElement('div');
  
  signUpContainer.innerHTML = `
  <form id="register-form">
  <h2 id='register'>Cadastro</h2>
  <fieldset>
    <input id='first-name' type='text' placeholder="nome">
  </fieldset>
  <fieldset>
    <input id='last-name' type='text' placeholder="sobrenome">
  </fieldset>
  <fieldset>
    <input id='e-mail' type='text' placeholder="email">
  </fieldset>
  <fieldset>
    <input id='password' type='text' placeholder="senha">
  </fieldset>
  <button id='register-button' type="submit">Cadastrar!</button>
  <div>já tem uma conta?<a href="#login">login</a></div>
</form>
      `//container.innerHTML += template;
  
  
  
      return signUpContainer;
};