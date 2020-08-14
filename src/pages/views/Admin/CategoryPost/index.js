import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import api from '../../../../api/categoryPostApi'
import Swal from 'sweetalert2'

const CategoryPost = () => {
    const [categoryPost, setCategoryPost] = useState([]);
    useEffect(() => {
        const getCategoryPost = async () => {
            try {
                const { data } = await api.getAll();
                setCategoryPost(data);
                console.log(data);
            } catch (error) {

            }
        }
        getCategoryPost();
    }, []);
    const removeHandle = async (id) => {
        // const data = await api.remove(id);
        const dataFilter = categoryPost.filter(el => el.id !== id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((el) => {
            if (el.value) {
                setCategoryPost(dataFilter);
                api.remove(id)
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
                <Link to="/admin/categoryPost/add" className="btn btn-primary">Thêm danh mục </Link>
            </div>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>

                                    <th scope="col">#</th>
                                    <th scope="col">Tên danh mục</th>
                                    <th scope="col">Ảnh</th>
                                    <th scope="col" width="150"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {categoryPost.map(({ id, name,image }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <th>{name}</th>
                                        <td><img src={image} alt="" width="100" /></td>                                        <td>
                                            <Link className="btn btn-primary" to={`/admin/categoryPost/edit/${id}`}>Sửa</Link>
                                            <button className="btn btn-danger ml-3" onClick={() => removeHandle(id)}>Xóa</button>
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

CategoryPost.propTypes = {

}

export default CategoryPost
