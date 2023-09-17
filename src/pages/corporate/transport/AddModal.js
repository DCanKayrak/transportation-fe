import React from 'react';
import { useState, useEffect } from 'react';
import { GetWithoutAuth, PostWithoutAuth } from '../../../service/HttpService';


export const AddModal = () => {
    const [carType, setCarType] = useState(0);
    const [carDetail, setCarDetail] = useState("");
    const [plate, setPlate] = useState("");
    const [companyId, setCompanyId] = useState("");


    const [item, setItem] = useState(null);
    const [companies, setCompanies] = useState([]);
    const [page, setPage] = useState(1);

    const getCompanies = () => {
        GetWithoutAuth("/api/Companies/GetList?PageIndex=0&PageSize=10")
            .then((res) => res.json())
            .then((result) => {
                setItem(result);
            });
    };

    const handleRequests = () => {
        if (item) {
            const companiesData = item.items;
            setCompanies(companiesData);
        }
    };

    const changePage = (num) => {
        if (!(num === -1 && page === 1)) {
            setPage((prevPage) => prevPage + num);
        }
    };

    useEffect(() => {
        getCompanies();
    }, []);

    useEffect(() => {
        handleRequests();
    }, [item]);

    // cars

    // cars add
    const sendRequest = (path) => {
        PostWithoutAuth((path), {
            carType: Number(carType),
            carDetail: carDetail,
            plate: plate,
            companyId: companyId,
          })
          .then((res) => res.json())
          .then((result) => {
            console.log(result)
          })
          .catch((err) => alert(err))
    }

    const handleCreate = () => {
        console.log(carType)
        console.log(carDetail)
        console.log(plate)
        console.log(companyId)
        sendRequest("api/Cars/Add")
    }

    return (
        <div>
            <div>
                <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div className='col-12'>
                                    <label for="inputAddress" class="form-label">Şirket</label>
                                    <select onChange = {(i) => setCompanyId(i.target.value)} class="form-select" aria-label="Default select example">
                                        {
                                            companies.map((c,index) => (
                                                <option value={c.id}>{c.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className='col-12'>
                                    <label for="inputAddress" class="form-label">Araç Tipi</label>
                                    <select onChange = {(i) => setCarType(i.target.value)} class="form-select" aria-label="Default select example">
                                        <option value="0">Kamyonet</option>
                                        <option value="1">Van</option>
                                        <option value="2">Pickup</option>
                                    </select>
                                </div>
                                <div class="col-12">
                                    <label for="inputAddress" class="form-label">Araç Detay</label>
                                    <input onChange = {(i) => setCarDetail(i.target.value)} type="text" class="form-control" id="inputAddress" placeholder="Araç Detayları" />
                                </div>

                                <div class="col-12">
                                    <label for="inputAddress" class="form-label">Plaka</label>
                                    <input onChange = {(i) => setPlate(i.target.value)} type="text" class="form-control" id="inputAddress" placeholder="Araç Plakası" />
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button onClick={() => handleCreate()} type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
