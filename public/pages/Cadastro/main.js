import {addNewUser} from "./data.js"

export const signUp = () => {
  const container = document.createElement('div');

  const template = `
  <div class="align"><form class="form" id="register-form">
  <h2 id='register'>Cadastro</h2>
  <fieldset class="textarea">
    <input id='first-name' type='text' placeholder="nome">
  </fieldset>
  <fieldset class="textarea">
    <input id='last-name' type='text' placeholder="sobrenome">
  </fieldset>
  <fieldset class="textarea">
    <input id='e-mail' type='email' placeholder="email" required>
  </fieldset>
  <fieldset class="textarea">
    <input id='password' type='password' placeholder="senha" required>
  </fieldset>
  <button class="button-loguin id='register-button' type="submit">Cadastrar!</button>
  <div>já tem uma conta?<a href="#login">login</a></div>
</form></div>
      `
  container.innerHTML += template;

  const signUpForm = container.querySelector("#register-form")

  const handleSubmmit = (e) => {
    e.preventDefault()
    const email = signUpForm["e-mail"].value
    const password = signUpForm["password"].value
    addNewUser(email,password)
  }

  container.addEventListener("submit",handleSubmmit)


  return container;
};