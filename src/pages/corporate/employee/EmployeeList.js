import React, { useEffect, useState } from 'react';
import { Sidebar } from '../../../components/Sidebar';
import { PanelHeader } from '../../../components/PanelHeader';
import { GetWithoutAuth } from '../../../service/HttpService';
import { EditModal } from './EditModal';
import { DeleteModal } from './DeleteModal';
import { AddModal } from './AddModal';

export const EmployeeList = () => {
    const [driverList, setDriverList] = useState([]);
    const [page, setPage] = useState(1);

    const getEmployees = () => {
        GetWithoutAuth("/api/Drivers/GetList?PageIndex=0&PageSize=10")
            .then((res) => res.json())
            .then(
                (result) => {
                    setDriverList(result.items);
                },
                (error) => {
                    console.log(error);
                }
            );
    };

    const changePage = (num) => {
        if (!(num === -1 && page === 1)) {
            setPage((prevPage) => prevPage + num);
        }
    };

    useEffect(() => {
        getEmployees();
    }, []);

    return (
        <div className='wrapper'>
            <Sidebar />
            <div className='main'>
                <PanelHeader />
                <div className='orders px-5 pt-3 pb-3'>
                    <div className='order-container'>
                        <h3>Çalışan Listesi</h3>
                        <hr />
                        <button className='btn btn-primary mb-3' data-bs-toggle="modal" data-bs-target="#addModal">Çalışan Ekle</button>
                        <div className='table-container'>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Ad</th>
                                        <th scope="col">Soyad</th>
                                        <th scope="col">Telefon</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Şirket İsmi</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {driverList.map((d, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{d.name}</td>
                                            <td>{d.surName}</td>
                                            <td>{d.phone}</td>
                                            <td>{d.email}</td>
                                            <td>{d.companyName}</td>
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
                                        <a className="page-link" onClick={() => changePage(-1)} tabIndex="-1"><span aria-hidden="true">&laquo;</span><span className="sr-only">Previous</span></a>
                                    </li>
                                    <li className="page-item active">
                                        <a className="page-link" href="#">{Number(page)}</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" onClick={() => changePage(1)}><span aria-hidden="true">&raquo;</span><span className="sr-only">Next</span></a>
                                    </li>
                                </ul>
                            </nav>
                            <AddModal/>
                            <EditModal employeeId={1} />
                            <DeleteModal />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
