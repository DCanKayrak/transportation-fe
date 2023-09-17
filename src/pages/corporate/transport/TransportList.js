import React, { useState, useEffect } from 'react';
import { GetWithoutAuth } from '../../../service/HttpService';
import { Sidebar } from '../../../components/Sidebar';
import { PanelHeader } from '../../../components/PanelHeader';
import { AddModal } from './AddModal';
import { EditModal } from './EditModal';
import { DeleteModal } from './DeleteModal';

export const TransportList = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);

  const getCars = () => {
    GetWithoutAuth("/api/Cars/GetList?PageIndex=0&PageSize=10")
      .then((res) => res.json())
      .then((result) => {
        setCars(result.items);
      });
  };

  const changePage = (num) => {
    if (!(num === -1 && page === 1)) {
      setPage((prevPage) => prevPage + num);
    }
  }

  useEffect(() => {
    getCars()
  }, [])

  return (
    <div className='wrapper'>
      <Sidebar />
      <div className='main'>
        <PanelHeader />
        <div className='orders px-5 pt-3 pb-3'>
          <div className='order-container'>
            <h3>Araç Listesi</h3>
            <hr />
            <button className='btn btn-primary mb-3' data-bs-toggle="modal" data-bs-target="#addModal">Araç Ekle</button>
            <div className='table-container'>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cars.map((c, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{c.plate}</td>
                      <td>{c.address}</td>
                      <td>{c.phoneNumber}</td>
                      <td>{c.email}</td>
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
              <AddModal />
              <EditModal employeeId={1} />
              <DeleteModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
