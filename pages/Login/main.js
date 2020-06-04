export const login = () => {
  const container = document.createElement('div');

  const template = `
  <div class="align"><form class="form"  id="login-form">
  <h2>login</h2>
  <fieldset class="textarea">
    <input id='email' type='text' type="email" placeholder="email">
  </fieldset>
  <fieldset class="textarea">
    <input id='password' type='password' placeholder="password">
  </fieldset>
  <button class="button-loguin" id='entrar' type="submit">Login</button>
  <div>Não tem uma Conta? <a href="#register">cadastre-se!</a></div><br>
  <button class="button-google"  id='entrar-google'>Entrar com o Google</button><br>
  <button class="button-face"  id='entrar-facebook'>Entrar com o Facebook</button>
</form></div>
      `;
  container.innerHTML += template;
  return container;
};