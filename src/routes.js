import Databases from './pages/databases/Databases'
import Documentation from './pages/documentation/Documentation'
import HomePage from './pages/homepage/HomePage'
import NotFoundComponent from './pages/NotFoundComponent'

export default [
    { 
      path: '/db', 
      component: Databases 
    },
    { 
      path: '/documentation', 
      name: 'documentation',
      component: Documentation 
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