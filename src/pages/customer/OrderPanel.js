import React from 'react'
import { Sidebar } from '../../components/Sidebar'
import { PanelHeader } from '../../components/PanelHeader'

export const OrderPanel = () => {
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
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Taşımak istenilen şirket</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div class="col-12">
                                        <label for="inputAddress" class="form-label">Address</label>
                                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                                    </div>
                                    <div class="col-12">
                                        <label for="inputAddress2" class="form-label">Address 2</label>
                                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="inputCity" class="form-label">City</label>
                                        <input type="text" class="form-control" id="inputCity" />
                                    </div>
                                    <div class="col-md-4">
                                        <label for="inputState" class="form-label">State</label>
                                        <select id="inputState" class="form-select">
                                            <option selected>Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div class="col-md-2">
                                        <label for="inputZip" class="form-label">Zip</label>
                                        <input type="text" class="form-control" id="inputZip" />
                                    </div>
                                    <div class="col-12">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="gridCheck" />
                                            <label class="form-check-label" for="gridCheck">
                                                Check me out
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button type="submit" class="btn btn-primary">Sign in</button>
                                    </div>
                                </form>
                            </div>
                        </div>
            </div>
        </div>
    )
}
