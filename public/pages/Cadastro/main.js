export default () => {
  const container = document.createElement('div');
  const template = `
    <br>
    <form>
      <label id='register'>Cadastro<label><br><br>
      <label id='first-name-label'>Insira seu primeiro nome<label><br>
      <input id='first-name' type='text'><br><br>
      <label id='last-name-label'>Insira o seu sobrenome<label><br>
      <input id='last-name' type='text'><br><br>
      <label id='user-name-label'>Insira um nick<label><br>
      <input id='user-name' type='text'><br><br>
      <label id='e-mail-label'>Insira um e-mail<label><br>
      <input id='e-mail' type='text'><br><br>
      <label id='password-label'>Insira uma senha<label><br>
      <input id='password' type='text'><br><br>
      <button id='register-button' type="submit">Cadastrar!</button><br>
    </form>
      `;
  container.innerHTML += template;
  return container;
};
