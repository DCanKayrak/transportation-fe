import React from 'react';
import { Sidebar } from '../../components/Sidebar';
import { PanelHeader } from '../../components/PanelHeader';
import { useNavigate } from 'react-router-dom';

export const AccountDetails = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('userEmail');
        localStorage.removeItem('token');

        navigate("/");
    }
    return (
        <div className='wrapper'>
            <Sidebar></Sidebar>
            <div className='main'>
                <PanelHeader></PanelHeader>
                <div className='orders px-5 pt-3 pb-3'>
                    <div className='order-container'>
                        <h3>Kullanıcı Detayları</h3>
                        <hr></hr>
                        <p>Mail Adresiniz : {localStorage.getItem('userEmail')}</p>
                        <button onClick={() => handleLogout()} className='btn btn-danger'>Çıkış Yap</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
