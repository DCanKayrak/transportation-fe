import React from 'react';
import { Sidebar } from '../../../components/Sidebar';
import { PanelHeader } from '../../../components/PanelHeader';
import { useState, useEffect } from 'react';
import { GetWithoutAuth, PostWithoutAuth } from '../../../service/HttpService';

export const SendMessage = () => {
    const [companyId, setCompanyId] = useState(0);
    const [messageContent, setMessageContent] = useState("");

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

    // send message

    const sendRequest = (path) => {
        PostWithoutAuth((path), {
            companyId: companyId,
            messageContent: messageContent,
          })
          .then((res) => res.json())
          .then((result) => {console.log(result)})
          .catch((err) => console.log(err))
    }

    const handleCreate = () => {
        sendRequest("/api/Messages/Add")
        alert("Şirketiniz Başarıyla Oluşturuldu")
    }

    return (
        <div className='wrapper'>
            <Sidebar></Sidebar>
            <div className='main'>
                <PanelHeader></PanelHeader>
                <div className='orders px-5 pt-3 pb-3'>
                    <div className='order-container'>
                        <h3>Mesaj Gönder</h3>
                        <hr></hr>
                        <form class="row g-3 mt-3">
                            <div className='col-12'>
                                <label for="inputAddress" class="form-label">Şirket</label>
                                <select onChange={(i) => setCompanyId(i.target.value)} class="form-select" aria-label="Default select example">
                                    {
                                        companies.map((c, index) => (
                                            <option value={c.id}>{c.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div class="col-12">
                                <label for="inputAddress" class="form-label">Mesajınız</label>
                                <textarea type="text" onChange={(i) => setMessageContent(i.target.value)} class="form-control" id="inputAddress" placeholder="Mesajınız" rows={10} />
                            </div>
                            <div class="col-12">
                                <button type="submit" onClick={() => handleCreate()} class="btn btn-primary">Gönder</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
