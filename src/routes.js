import Databases from './pages/databases/Databases'
import Documents from './pages/documents/Documents'
import CreateDocument from './pages/documents/CreateDocument'
import DocumentList from './pages/documents/DocumentList'
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
            documentView: CreateDocument
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
      path: '/', 
      component: HomePage 
    },
    { 
      path: '*', 
      component: NotFoundComponent 
    }
  ];