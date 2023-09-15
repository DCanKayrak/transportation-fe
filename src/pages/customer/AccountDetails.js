import React from 'react';
import { Sidebar } from '../../components/Sidebar';
import { PanelHeader } from '../../components/PanelHeader';

export const AccountDetails = () => {
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
                                <h3>Hesap Detayları</h3>
                                <hr></hr>

                                <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal">Düzenle</button>

                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                ...
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
