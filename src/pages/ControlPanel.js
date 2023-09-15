import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { PanelHeader } from '../components/PanelHeader'
import { OrderPanel } from './customer/OrderPanel'

export const ControlPanel = () => {
  return (
    <div className='wrapper'>
      <div className='content-wrapper'>
        <div className='row'>
          <div className='col-2 g-0'>
            <Sidebar></Sidebar>
          </div>
          <div className='col-10 g-0'>
            <PanelHeader></PanelHeader>
            
          </div>
        </div>
      </div>
    </div>
  )
}
