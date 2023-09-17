import React from 'react';
import { Sidebar } from '../../../components/Sidebar';
import { PanelHeader } from '../../../components/PanelHeader';
import { AddCompanyModal } from './AddCompanyModal';

export const CompanyInfos = () => {
    return (
        <div>
            <div className='wrapper'>
                <Sidebar></Sidebar>
                <div className='main'>
                    <PanelHeader></PanelHeader>
                    <div className='orders px-5 pt-3 pb-3'>
                        <div className='order-container'>
                            <h3>Şirket Oluştur</h3>
                            <hr></hr>
                            <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#addCompanyModal">Şirket Oluştur</button>
                        </div>
                    </div>
                </div>
            </div>
            <AddCompanyModal/>
            <div className='btn-close-sidebar'></div>
        </div>
    )
}
