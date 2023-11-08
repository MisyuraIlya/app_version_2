import { BrowserRouter } from 'react-router-dom'
import RouterApp from './RouterApp'
import { ModalsProvider } from './modules/Modals/provider/ModalProvider'

function App() {
  return (
    <BrowserRouter>
      <ModalsProvider>
        <RouterApp />
      </ModalsProvider>
    </BrowserRouter>
  )
}

export default App
