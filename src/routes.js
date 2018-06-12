import Databases from './pages/databases/Databases'
import Documents from './pages/documents/Documents'
import DocumentSave from './pages/documents/DocumentSave'
import DocumentList from './pages/documents/DocumentList'
import Documentation from './pages/documentation/Documentation'
import HomePage from './pages/homepage/HomePage'
import NotFoundComponent from './pages/NotFoundComponent'

export default [
    { 
      path: '/db/:db_name',
      component: Documents,
      children: [
        { 
          path: '',
          name: 'document_list',
          components: {
            documentView: DocumentList
          }
        },
        { 
          path: 'create',
          name: 'document_create',
          components: {
            documentView: DocumentSave
          }
        },
        { 
          path: 'edit/:id',
          name: 'document_edit',
          components: {
            documentView: DocumentSave
          }
        },
      ]
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