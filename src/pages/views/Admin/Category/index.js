import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apiRequest from '../../../../api/categoryApi';
import Swal from 'sweetalert2'


const Category = () => {

    const [category, setCategory] = useState([]);
    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await apiRequest.getAll();
                setCategory(data);
                console.log(data);
            } catch (error) {
                console.log('failed to request API: ', error)
            }
        }
        getCategory();
    }, []);


    const removeHandle = async (id) => {
        // const data = await apiRequest.remove(id);
        const dataFilter = category.filter(el => el.id !== id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                setCategory(dataFilter);
                apiRequest.remove(id)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

    }


    return (

        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="h3 mb-2 text-gray-800">Quản lý danh mục</h1>
                <Link to="/admin/category/add" className="btn btn-primary">Thêm danh mục </Link>
            </div>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Tên danh mục</th>
                                    <th scope="col" width="150"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {category.map(({ id, name }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{id}</th>
                                        <td>{name}</td>
                                        <td>
                                            <Link className="btn btn-primary" to={`/admin/category/edit/${id}`}>Sửa</Link>
                                            <button className="btn btn-danger ml-3" onClick={() => removeHandle(id)} >Xóa</button>
                                        </td>
                                    </tr>
                                ))}


                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>


    )
}


export default Category
