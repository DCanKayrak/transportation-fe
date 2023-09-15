import React from 'react';
import { Sidebar } from '../../components/Sidebar';
import { PanelHeader } from '../../components/PanelHeader';

export const LastOrderList = () => {
  return (
    <div>
        <div className='content-wrapper'>
                <div className='row'>
                    <div className='col-2 g-0'>
                        <Sidebar></Sidebar>
                    </div>
                    <div className='col-10 g-0'>
                        <PanelHeader></PanelHeader>
                        <div className='orders'>
                            <div className='order-container'>
                                <h3>Geçmiş Siparişlerim</h3>
                                <hr></hr>
                                <div className='table-container'>
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">First</th>
                                                <th scope="col">Last</th>
                                                <th scope="col">Handle</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td colspan="2">Larry the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
