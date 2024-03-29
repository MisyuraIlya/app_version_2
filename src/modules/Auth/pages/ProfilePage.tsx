import React from 'react'
import MyProfile from '../components/MyProfile/MyProfile'
import AgentMyProfile from '../components/AgentMyProfile/AgentMyProfile'
import { useAuth } from '../store/useAuthStore'
import ClientFinance from '../components/ClientFinance/ClientFinance'
import AgentActions from '../../Agent/components/AgentActions'

const ProfilePage = () => {
  const { isAgent } = useAuth()
  return (
    <div className="page-container Profile-page">
      <div className="Profile-page-subcont">
        <MyProfile />
        {isAgent && <AgentMyProfile />}
        <ClientFinance />
        <AgentActions colsNumber={3} />
      </div>
    </div>
  )
}

export default ProfilePage
