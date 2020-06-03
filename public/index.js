import {login}  from './pages/Login/main.js';
//import Home from './pages/Home/main.js';
import {signUp} from './pages/Cadastro/main.js';
 console.log(signUp())

const root = document.querySelector('#root');

const renderRoute = (root,route,title) => {
    document.title = title
    root.innerHTML = ""
    root.appendChild(route)
}


    const routes = [{
        route: "login",
        html: login(),
        title: "Login"
    },
    {
        route: "register",
        html: signUp(),
        title: "Cadastro"
    },
   
]

const handleRoutes = () => {
    const route = routes.find(({route}) => window.location.hash === `#${route}`)
    if (!route) {
        window.location.hash = "#login"
    } else if (route.private && !localStorage.getItem("user")){
        window.location.hash = "#login"
    }else {
        renderRoute(root, route.html,route.title)
    }


}


window.addEventListener("load", handleRoutes)
window.addEventListener("hashchange", handleRoutes)