import React, { useState, useEffect } from 'react';
import { Sidebar } from '../../../components/Sidebar';
import { PanelHeader } from '../../../components/PanelHeader';
import { GetWithoutAuth, PostWithoutAuth } from '../../../service/HttpService';

export const RatingPage = () => {
    const [point, setPoint] = useState(0);
    const [comment, setComment] = useState("");
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

    useEffect(() => {
        getCompanies();
    }, []);

    useEffect(() => {
        handleRequests();
    }, [item]);

    // rate create

    const sendRequest = (path) => {
        PostWithoutAuth((path), {
            point: point,
            comment: comment,
            companyId: companyId,
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result)
            })
            .catch((err) => alert(err))
    }

    const handleCreate = () => {
        sendRequest("api/Reviews/Add")
    }

    return (
        <div className='wrapper'>
            <Sidebar></Sidebar>
            <div className='main'>
                <PanelHeader></PanelHeader>
                <div className='orders px-5 pt-3 pb-3'>
                    <div className='order-container'>
                        <h3>Firmamıza Oy Ver!</h3>
                        <hr></hr>
                        <form class="row g-3 mt-3">
                            <div className='col-12'>
                                <label for="inputAddress" class="form-label">Oyunuz</label>
                                <select class="form-select" onChange={(i) => setPoint(i.target.value)} aria-label="Default select example">
                                    <option value="0">0 Yıldız</option>
                                    <option value="1">1 Yıldız</option>
                                    <option value="2">2 Yıldız</option>
                                    <option value="3">3 Yıldız</option>
                                    <option value="4">4 Yıldız</option>
                                    <option value="5">5 Yıldız</option>
                                </select>
                            </div>

                            <div class="col-12">
                                <label for="inputAddress" class="form-label">Yorumunuz</label>
                                <input onChange={(i) => setComment(i.target.value)} type="text" class="form-control" id="inputAddress" placeholder="Yorumunuz" />
                            </div>

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
                                <button type="submit" onClick={() => handleCreate()} class="btn btn-primary">Oluştur</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
