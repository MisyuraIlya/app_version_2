import React, { ReactNode, FC } from 'react'
// import InfoBanner from './infoBanner';

interface AgentLayoutProps {
  children: ReactNode
}

const AgentLayout: FC<AgentLayoutProps> = ({ children }) => {
  return (
    <div className="myLayout myDisplay">
      {/* <InfoBanner/> */}
      {children}
    </div>
  )
}

export default AgentLayout
