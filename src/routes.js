import Databases from './pages/databases/Databases'
import Documents from './pages/documents/Documents'
import HomePage from './pages/homepage/HomePage'
import NotFoundComponent from './pages/NotFoundComponent'

export default [
    { 
      path: '/db/:db_name/',
      name: 'documents',
      component: Documents
    },
    { 
      path: '/db',
      name: 'databases', 
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