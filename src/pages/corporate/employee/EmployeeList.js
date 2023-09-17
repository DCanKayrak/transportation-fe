import React, { useEffect, useState } from 'react';
import { Sidebar } from '../../../components/Sidebar';
import { PanelHeader } from '../../../components/PanelHeader';
import { EmployeeEditForm } from '../../../components/panel/EmployeeEditForm';
import { GetWithoutAuth } from '../../../service/HttpService';
import { EditModal } from './EditModal';
import { DeleteModal } from './DeleteModal';

export const EmployeeList = () => {
    const [employeeId, setEmployeeId] = useState();
    const [todo, setTodo] = useState({});

    const getEmployees = () => {
        GetWithoutAuth("https://jsonplaceholder.typicode.com/posts/1")
        .then((res) => res.json())
        .then(
            (result) => {
                setTodo(result)
            },
            (error) => {
                console.log(error)
            }
        )
    }

    useEffect(() => {
        getEmployees()
    },[])

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
                                <h3>Çalışan Listesi</h3>
                                <h3>{todo.title} -123</h3>
                                <hr></hr>
                                <div className='table-container'>
                                    <table class="table">
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
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td><button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#editModal"><i class="fa-regular fa-pen-to-square"></i></button></td>
                                                <td><button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#deleteModal"><i class="fa-solid fa-trash-can"></i></button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <EditModal employeeId={1}/>
                                    <DeleteModal/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
