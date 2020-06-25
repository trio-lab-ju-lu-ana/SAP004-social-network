import { login } from './pages/Login/main.js';
import { feed } from './pages/Feed/main.js';
import { signUp } from './pages/Cadastro/main.js';
import { profileUser } from './pages/User/main.js';

// import Home from './pages/Home/main.js';

const root = document.querySelector('#root');

const renderRoute = (route, title) => {
  document.title = title;
  root.innerHTML = '';
  root.appendChild(route());
};

const routes = [{
  route: 'login',
  html: login,
  title: 'Login',
},
{
  route: 'register',
  html: signUp,
  title: 'Cadastro',
},
{
  route: 'profile',
  html: profileUser,
  title: 'Perfil',
},
{
  route: 'feed',
  html: feed,
  title: 'Feed',
  private: true,
},
];

const handleRoutes = () => {
  const route = routes.find(({ route }) => window.location.hash === `#${route}`);
  if (!route) {
    window.location.hash = '#login';
  } else if (route.private && !localStorage.getItem('user')) {
    window.location.hash = '#login';
  } else {
    renderRoute(route.html, route.title);
  }
};

window.addEventListener('load', handleRoutes);
window.addEventListener('hashchange', handleRoutes);