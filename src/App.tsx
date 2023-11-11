import { BrowserRouter } from 'react-router-dom'
import RouterApp from './RouterApp'
import { ModalsProvider } from './modules/Modals/provider/ModalProvider'
import { DocumentsProvider } from './modules/Documents/provider/DocumentsProvider'

function App() {
  return (
    <BrowserRouter>
      <ModalsProvider>
        <DocumentsProvider>
          <RouterApp />
        </DocumentsProvider>
      </ModalsProvider>
    </BrowserRouter>
  )
}

export default App
