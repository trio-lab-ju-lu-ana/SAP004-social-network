import Login from './pages/Login/main.js';
import Home from './pages/Home/main.js';
import Cadastro from './pages/Cadastro/main.js';

const main = document.querySelector('#root');

const init = () => {
  window.addEventListener('hashchange', () => {
    main.innerHTML = '';
    switch (window.location.hash) {
      case '':
        main.appendChild(Home());
        break;
      case '#login':
        main.appendChild(Login());
        break;
      case '#cadastro':
        main.appendChild(Cadastro());
        break;
      default:
        main.appendChild(Home());
        break;
    }
  });
};

window.addEventListener('load', () => {
  main.appendChild(Home());
  init();
});

// window.addEventListener('load', () => {
//   main.appendChild(Login());
//   init();
// });

// window.addEventListener('load', () => {
//   main.appendChild(Cadastro());
//   init();
// });
