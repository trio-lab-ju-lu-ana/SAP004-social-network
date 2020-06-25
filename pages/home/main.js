export const home =  () => {
  const container = document.createElement('div');

  const template = `
    <br>
    <h2>Welcome to our Social Network XXX<h2>

    <p>We decided to create a Gaming Social Network to provide a secure place for women which are gamers and want to talk about <br>
    games and the lyfestyle gamer without the online envirolment toxicity.<p><br>
    `;
  container.innerHTML += template;
  return container;
};
