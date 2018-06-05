import HomePage from './pages/homepage/HomePage'
import NotFoundComponent from './pages/NotFoundComponent'

export default [
    { 
      path: '/', 
      component: HomePage 
    },
    { 
      path: '*', 
      component: NotFoundComponent }
  ];