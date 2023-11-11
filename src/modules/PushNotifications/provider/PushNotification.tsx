// Global
import React, {
  FC,
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react'
import { NotificationsServices } from '../services/notifications.service'
import { BROWSER_TPYES } from '../types/browserTypes'
import NotificationsModal from '../components/NotificationsModal/NotificationsModal'
import { CLIENT_NAME, WEB_KEY } from '../config/enums'
import { useAuth } from '../../Auth/store/useAuthStore'
import { useOneSignalStore } from '../store/oneSignalStore'
// import { getCurrentUserId, getCurrentUserType } from '../../Auth/helpers/getCurrentUserId';
// Local
// Defines

interface NotificationsContextType {
  handleRemoveIosPromt: () => void
  removeIosPromt: boolean
  setRemoveIosPromt: (val: boolean) => void
}

const NotificationsContext = createContext<NotificationsContextType | null>(
  null
)

// React hook
const useNotifications = () => {
  const context = useContext(NotificationsContext)
  if (!context) {
    throw new Error('Can not run without "NotificationsProvider"')
  }

  return context
}

interface NotificationsProviderProps {
  children?: ReactNode
}

const NotificationsProvider: FC<NotificationsProviderProps> = ({
  children,
}) => {
  const { user } = useAuth()
  const { isOpenModalNotification } = useOneSignalStore()
  const [removeIosPromt, setRemoveIosPromt] = useState(false)
  // const [removeIosPromt, setRemoveIosPrompt] = useState(localStorage.removeIosPromt ? removeIosPromt : true)
  // const [alreadyRegistered, setAlreadyRegistered] = useState(false)
  // const [appId, setAppId] = useState('')

  const handleRemoveIosPromt = () => {
    // localStorage.setItem('removeIosPromt', 'false')
    // setRemoveIosPrompt(false)
  }

  // const getNotifications = async () => {
  //   if(user?.extId){
  //     try {
  //         const response = await NotificationsServices.getOrdersPerClient(CLIENT_NAME, user?.extId)
  //         if(response?.status === 'sucsses') {
  //             setNotifications(response.data)
  //             setLengthNotifications(response.data.length)
  //             handleNotificationFilter(response.data)
  //         }
  //     } catch (e) {
  //         console.log('errorMe',e)
  //     }
  //   }

  // }

  // const clearNotifications = () => {
  //   setTimeout(() => {
  //     setNotifications([])
  //     setStoreNotifications([])
  //     handleNotificationFilter([])
  //   },"500")

  // }

  // const getNotificationsLength = async () => {
  //   try {
  //     const response = await NotificationsServices.fetchNotificationLengthPerClient(CLIENT_NAME)
  //     if(response?.status == 'success') {
  //         setLengthNotifications(response.data)
  //     }
  // } catch (e) {
  //     console.log('errorMe',e)
  // }
  // }

  // const handleNotificationFilter = (newData) => {
  //   let choosed = localStorage.type
  //   if(choosed === 'note') {
  //       let data = (newData ? newData : storeNotifications).filter((item) => item.is_read !== 1)
  //       setNotifications(data)
  //   }  else if (choosed === 'clock') {
  //       let data = (newData ? newData :  storeNotifications).filter((item) => item.is_read === 1)
  //       setNotifications(data)
  //   }
  // }

  // const handleReadAll = async () => {
  //   try {
  //       const response = await NotificationsServices.handleReadAll(ApiClientName,  user?.extId)
  //       if(response.status == 'success') {
  //           // getNotifications()
  //       }
  //   } catch (e) {
  //       console.log('error',e)
  //   }
  // }

  // const detectBrowser = () => {
  //     const userAgent = navigator.userAgent;
  //     let browser = 'Unknown';

  //     if (userAgent.indexOf(BROWSER_TPYES.CHROME) > -1) {
  //       browser = BROWSER_TPYES.CHROME;
  //     } else if (userAgent.indexOf(BROWSER_TPYES.FIREFOX) > -1) {
  //       browser = BROWSER_TPYES.FIREFOX;
  //     } else if (userAgent.indexOf(BROWSER_TPYES.SAFARI) > -1) {
  //       browser = BROWSER_TPYES.SAFARI;
  //     } else if (userAgent.indexOf(BROWSER_TPYES.MICROSOFT) > -1) {
  //       browser = BROWSER_TPYES.MICROSOFT;
  //     } else if (userAgent.indexOf(BROWSER_TPYES.OPERA) > -1 || userAgent.indexOf('OPR') > -1) {
  //       browser = BROWSER_TPYES.OPERA;
  //     } else if (userAgent.indexOf(BROWSER_TPYES.EXPLORER) > -1) {
  //       browser = BROWSER_TPYES.EXPLORER;
  //     }

  //     return browser;
  // };

  // const handleBrowser = () => {
  //   setTimeout(() => {
  //     const appId = "ff5e7738-0527-4d59-9382-13901391053a";
  //     const requestNotificationPermission = async () => {
  //       try {
  //         if (window.OneSignal) {
  //           await window.OneSignal.registerForPushNotifications();
  //           const playerId = await window.OneSignal.getUserId();
  //           if (playerId) {
  //             setAppId(playerId)
  //             localStorage.setItem("appId", playerId);
  //           }
  //         } else {
  //           // alert("OneSignal is not available.");
  //         }
  //       } catch (error) {
  //         // alert("Error requesting notification permission: "+ error);
  //       }
  //     };
  //     window.OneSignal.init({
  //       appId: appId,
  //     });

  //     requestNotificationPermission();

  //     return () => {
  //         window.OneSignal.clearEventHandlers();
  //     };
  // },"10000")
  // };

  // const handleNotificationModal = () => {
  //   setModalNotification(!modalNotification)
  // }

  // const checkIsAllRead = () => {
  //   const isCheckedAll = notifications?.every(notification => notification.is_read === 1);
  //   return isCheckedAll;
  // }

  // const handelChoosedType = (type) => {
  //   setChoosedType(type)
  //   localStorage.setItem('type', type)
  // }

  // const handleIsRead = async (notificationId, isRead) => {
  //   try {
  //       const response = await NotificationsServices.handleIsRead(ApiClientName,notificationId, isRead)
  //       getNotificationsLength()
  //       // getNotifications()
  //   } catch (e) {
  //       console.log('error',e)
  //   }
  // }

  //   useEffect(() => {
  //       if(user?.extId){
  //           const intervalId = setInterval(getNotificationsLength, 60000);
  //           return () => clearInterval(intervalId);
  //       }
  //     }, []);

  //   useEffect(() => {
  //     if(!alreadyRegistered) {
  //       handleBrowser()
  //     }
  //   }, []);

  //   useEffect(() => {
  //     if(storeNotifications) {
  //         handleNotificationFilter()
  //     }
  // },[choosedType])

  //   useEffect(() => {
  //     if(user?.extId && !alreadyRegistered){
  //         const localAppId = localStorage.appId
  //         registerClient(localAppId,'web')
  //     }
  //   },[user?.extId])

  //   useEffect(() => {
  //     if(!localStorage.appId) {
  //       setTimeout(() => {
  //         const localAppId = localStorage.appId
  //         registerClient(localAppId,'web')
  //       },15000)
  //     }

  //   },[appId])

  const value = {
    handleRemoveIosPromt,
    removeIosPromt,
    setRemoveIosPromt,
  }

  return (
    <NotificationsContext.Provider value={value}>
      {isOpenModalNotification && <NotificationsModal />}
      {children}
    </NotificationsContext.Provider>
  )
}

export { useNotifications, NotificationsProvider }
