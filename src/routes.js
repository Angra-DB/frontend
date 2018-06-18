import Databases from './pages/databases/Databases'
import Documents from './pages/documents/Documents'
import DocumentSave from './pages/documents/DocumentSave'
import Documentation from './pages/documentation/Documentation'
import HomePage from './pages/homepage/HomePage'
import NotFoundComponent from './pages/NotFoundComponent'

export default [
    { 
      path: '/db/:db_name/create',
      name: 'document_create',
      component: DocumentSave
    },
    { 
      path: '/db/:db_name/edit/:id',
      name: 'document_edit',
      component: DocumentSave
    },
    { 
      path: '/db/:db_name',
      component: Documents,
      name: 'documents'
    },
    { 
      path: '/db',
      name: 'databases', 
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