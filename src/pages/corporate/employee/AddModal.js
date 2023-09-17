import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetWithoutAuth } from '../../../service/HttpService';
import { PostWithoutAuth } from '../../../service/HttpService';


export const AddModal = () => {
    const [name, setName] = useState("");
    const [surName, setSurName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [companyId,setCompanyId] = useState(0);

    const navigate = useNavigate();

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

    const handleName = (value) => {
        setName(value);
    }

    const handleSurName = (value) => {
        setSurName(value);
    }

    const handlePhone = (value) => {
        setPhone(value);
    }

    const handleEmail = (value) => {
        setEmail(value);
    }

    const sendRequest = (path) => {
        PostWithoutAuth((path), {
            name: name,
            surName: surName,
            phone: phone,
            email: email,
            companyId: companyId
          })
          .then((res) => res.json())
          .then((result) => {console.log(result)})
          .catch((err) => console.log(err))
    }

    const handleCreate = () => {
        sendRequest("/api/Drivers/Add")
        alert("Şoför Başarıyla Oluşturuldu")
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
                                
                                <div class="col-12">
                                    <label for="inputAddress" class="form-label">Ad</label>
                                    <input onChange = {(i) => handleName(i.target.value)} type="text" class="form-control" id="inputAddress" placeholder="Ad" />
                                </div>

                                <div class="col-12">
                                    <label for="inputAddress" class="form-label">Soyad</label>
                                    <input onChange = {(i) => handleSurName(i.target.value)} type="text" class="form-control" id="inputAddress" placeholder="Soyad" />
                                </div>

                                <div class="col-12">
                                    <label for="inputAddress" class="form-label">Telefon Numarası</label>
                                    <input onChange = {(i) => handlePhone(i.target.value)} type="text" class="form-control" id="inputAddress" placeholder="Telefon Numarası" />
                                </div>

                                <div class="col-12">
                                    <label for="inputAddress" class="form-label">Email</label>
                                    <input onChange = {(i) => handleEmail(i.target.value)} type="text" class="form-control" id="inputAddress" placeholder="Email" />
                                </div>

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
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" onClick={() => handleCreate()} class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='btn-close-sidebar'></div>
        </div>
    )
}
