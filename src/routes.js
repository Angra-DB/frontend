import Databases from './pages/databases/Databases'
import HomePage from './pages/homepage/HomePage'
import NotFoundComponent from './pages/NotFoundComponent'

export default [
    { 
      path: '/db', 
      component: Databases 
    },
    { 
      path: '/', 
      component: HomePage 
    },
    { 
      path: '*', 
      component: NotFoundComponent 
    }
  ];