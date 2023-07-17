import Main from './page/Main';
import Recipe from './page/Recipe';
import RecipePost from './page/RecipePost';
import Fantasy from './page/Fantasy';
import About from './page/About';
import Contact from './page/Contact';

const routes = [
    { path: '/', component: Main, exact : true },
    { path: '/Recipe', component: Recipe, exact : true },
    { path: '/RecipePost', component: RecipePost, exact : true },
    { path: '/Fantasy', component: Fantasy, exact : true },
    { path: '/About', component: About,},
    { path: '/Contact', component: Contact,},
  ];
  
  export default routes;