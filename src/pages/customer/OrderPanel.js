import React, { useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { PanelHeader } from '../../components/PanelHeader';
import { PostWithoutAuth } from '../../service/HttpService';

export const OrderPanel = () => {
    const [transportType, setTransportType] = useState(0);
    const [reservationStatus, setReservationStatus] = useState(0);
    const [date, setDate] = useState(null);

    const sendRequest = (path) => {
        PostWithoutAuth((path), {
            transportType: transportType,
            reservationStatus: reservationStatus,
            date: date,
          })
          .then((res) => res.json())
          .then((result) => {console.log(result)})
          .catch((err) => console.log(err))
    }

    const handleCreate = () => {
        setDate(new Date())
        sendRequest("/api/Transportations/Add")
        alert("Teslimatınız Başarıyla Oluşturuldu")
    }



    return (
        <div className='wrapper'>
            <Sidebar></Sidebar>
            <div className='main'>
                <PanelHeader></PanelHeader>
                <div className='orders px-5 pt-3 pb-3'>
                            <div className='order-container'>
                                <h3>Teslimat Oluştur</h3>
                                <hr></hr>
                                <form class="row g-3 mt-3">
                                    <div className='col-12'>
                                        <label for="inputAddress" class="form-label">Teslimat Tipi</label>
                                        <select class="form-select" onChange = {(i) => setTransportType(i.target.value)} aria-label="Default select example">
                                            <option value="0">Evden Eve</option>
                                            <option value="1">Ofis</option>
                                            <option value="2">Geniş Hacim Ve Ağırlık</option>
                                        </select>
                                    </div>

                                    <div className='col-12'>
                                        <label for="inputAddress" class="form-label">Aktiflik Durumu</label>
                                        <select class="form-select" onChange = {(i) => setReservationStatus(i.target.value)} aria-label="Default select example">
                                            <option value="0">Aktif</option>
                                            <option value="1">Detaktif</option>
                                        </select>
                                    </div>
                                    <div class="col-12">
                                        <button type="submit" onClick={() => handleCreate()} class="btn btn-primary">Oluştur</button>
                                    </div>
                                </form>
                            </div>
                        </div>
            </div>
        </div>
    )
}
