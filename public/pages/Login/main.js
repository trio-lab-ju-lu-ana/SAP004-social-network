export const login = () => {
  const container = document.createElement('div');

  const template = `
  <form id="login-form">
  <h2>login</h2>
  <fieldset>
    <input id='email' type='text' type="email" placeholder="email">
  </fieldset>
  <fieldset>
    <input id='password' type='password' placeholder="password">
  </fieldset>
  <button id='entrar' type="submit">Login</button>
  <div>Não tem uma Conta? <a href="#register">cadastre-se!</a></div>
  <button id='entrar-google'>Entrar com o Google</button>
  <button id='entrar-facebook'>Entrar com o Facebook</button>
</form>
      `;
  container.innerHTML += template;
  return container;
};