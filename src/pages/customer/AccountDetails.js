import React from 'react';
import { Sidebar } from '../../components/Sidebar';
import { PanelHeader } from '../../components/PanelHeader';

export const AccountDetails = () => {
    return (
        <div className='wrapper'>
            <Sidebar></Sidebar>
            <div className='main'>
                <PanelHeader></PanelHeader>
                <div className='orders px-5 pt-3 pb-3'>
                    <div className='order-container'>
                        <h3>Teslimat Oluştur</h3>
                        <hr></hr>
                    </div>
                </div>
            </div>
        </div>
    )
}
