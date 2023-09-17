import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostWithoutAuth } from '../../../service/HttpService';


export const AddCompanyModal = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const handleName = (value) => {
        setName(value);
    }

    const handleAddress = (value) => {
        setAddress(value);
    }

    const handlePhoneNumber = (value) => {
        setPhoneNumber(value);
    }

    const handleEmail = (value) => {
        setEmail(value);
    }

    const sendRequest = (path) => {
        PostWithoutAuth((path), {
            name: name,
            address: address,
            phoneNumber: phoneNumber,
            email: email,
          })
          .then((res) => res.json())
          .then((result) => {console.log(result)})
          .catch((err) => console.log(err))
    }

    const handleCreate = () => {
        sendRequest("/api/Companies/Add")
        alert("Şirketiniz Başarıyla Oluşturuldu")
    }

    return (
        <div>
            <div>
                <div class="modal fade" id="addCompanyModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                
                                <div class="col-12">
                                    <label for="inputAddress" class="form-label">Şirket Adı</label>
                                    <input onChange = {(i) => handleName(i.target.value)} type="text" class="form-control" id="inputAddress" placeholder="Şirket Adı" />
                                </div>

                                <div class="col-12">
                                    <label for="inputAddress" class="form-label">Adres</label>
                                    <input onChange = {(i) => handleAddress(i.target.value)} type="text" class="form-control" id="inputAddress" placeholder="Adres" />
                                </div>

                                <div class="col-12">
                                    <label for="inputAddress" class="form-label">Telefon Numarası</label>
                                    <input onChange = {(i) => handlePhoneNumber(i.target.value)} type="text" class="form-control" id="inputAddress" placeholder="Telefon Numarası" />
                                </div>

                                <div class="col-12">
                                    <label for="inputAddress" class="form-label">Email</label>
                                    <input onChange = {(i) => handleEmail(i.target.value)} type="text" class="form-control" id="inputAddress" placeholder="Email" />
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
        </div>
    )
}
