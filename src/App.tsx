import { BrowserRouter } from 'react-router-dom'
import RouterApp from './RouterApp'
import { ModalsProvider } from './modules/Modals/provider/ModalProvider'
import { DocumentsProvider } from './modules/Documents/provider/DocumentsProvider'
import { NotificationsProvider } from './modules/PushNotifications/provider/PushNotification'

function App() {
  return (
    <BrowserRouter>
      <ModalsProvider>
        <NotificationsProvider>
          <DocumentsProvider>
            <RouterApp />
          </DocumentsProvider>
        </NotificationsProvider>
      </ModalsProvider>
    </BrowserRouter>
  )
}

export default App
