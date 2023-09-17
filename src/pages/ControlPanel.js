import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { PanelHeader } from '../components/PanelHeader'
import { OrderPanel } from './customer/OrderPanel'

export const ControlPanel = () => {
  return (
    <div className='wrapper'>
      <Sidebar></Sidebar>
      <div className='main'>
        <PanelHeader></PanelHeader>
        
      </div>
    </div>
  )
}
