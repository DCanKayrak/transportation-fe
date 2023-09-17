import React from 'react';
import { Sidebar } from '../../../components/Sidebar';
import { PanelHeader } from '../../../components/PanelHeader';
import { useState,useEffect } from 'react';
import { GetWithoutAuth } from '../../../service/HttpService';

export const MessageList = () => {

    const [item, setItem] = useState(null);
    const [messages, setMessages] = useState([]);
    const [page, setPage] = useState(1);
    const [company, setCompany] = useState("");
    const [companies, setCompanies] = useState([])

    const getMessages = () => {
        GetWithoutAuth("/api/Messages/GetList?PageIndex=0&PageSize=10")
            .then((res) => res.json())
            .then((result) => {
                setItem(result);
            });
    };

    const handleRequests = () => {
        if (item) {
            const companiesData = item.items;
            setMessages(companiesData);
        }
    };

    const changePage = (num) => {
        if (!(num === -1 && page === 1)) {
            setPage((prevPage) => prevPage + num);
        }
    };

    useEffect(() => {
        getMessages();
    }, []);

    useEffect(() => {
        handleRequests();
    }, [item]);


    return (
        <div>
            <div className='wrapper'>
                <Sidebar></Sidebar>
                <div className='main'>
                    <PanelHeader></PanelHeader>
                            <div className="orders px-5 pt-3 pb-3">
                                <div className="order-container">
                                    <h3>Mesajlarım</h3>
                                    <hr></hr>
                                    <div className="table-container">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Kimden</th>
                                                    <th scope="col">Şirket</th>
                                                    <th scope="col">İçerik</th>
                                                    <th scope="col">Edit</th>
                                                    <th scope="col">Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                messages.map((m, index) => (
                                                    <tr key={index}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{m.appUserId}</td>
                                                        <td>{m.companyId}</td>
                                                        <td>{m.content}</td>
                                                        <td>
                                                            <button
                                                                className="btn btn-primary"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#editModal"
                                                            >
                                                                <i className="fa-regular fa-pen-to-square"></i>
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button
                                                                className="btn btn-danger"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#deleteModal"
                                                            >
                                                                <i className="fa-solid fa-trash-can"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <nav aria-label="...">
                                            <ul className="pagination">
                                                <li className="page-item">
                                                    <a
                                                        className="page-link"
                                                        onClick={() => changePage(-1)}
                                                        tabIndex="-1"
                                                    >
                                                        <span aria-hidden="true">&laquo;</span>
                                                        <span className="sr-only">Previous</span>
                                                    </a>
                                                </li>
                                                <li className="page-item active">
                                                    <a className="page-link" href="#">
                                                        {page}
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a
                                                        className="page-link"
                                                        onClick={() => changePage(1)}
                                                    >
                                                        <span aria-hidden="true">&raquo;</span>
                                                        <span className="sr-only">Next</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            <div className='btn-close-sidebar'></div>
        </div>
    )
}
