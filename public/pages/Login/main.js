export default () => {
  const container = document.createElement('div');

  const template = `
    <br>
    <form style="border: 1px solid black">
      <label id='e-mail-login-label'type="email">E-mail<label><br>
      <input id='email' type='text'><br><br>
      <label id='password-login-label'>Senha<label><br>
      <input id='password' type='password'><br><br>
      <button id='entrar' type="submit">Login</button><br>
      <br><br>
      <p>Não tem uma Conta? <a>Entre Aqui!</a></p>
      <br><br>
      <button id='entrar-google'>Entrar com o Google</button><br><br>
      <button id='entrar-facebook' >Entrar com o Facebook</button><br>
    </form>
      `;
  container.innerHTML += template;
  return container;
};
