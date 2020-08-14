import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import apiRequest from '../../../../api/productApi';
import api1 from '../../../../api/categoryApi';
import Swal from 'sweetalert2'


const Products = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        const getproducts = async () => {
            try {
                const { data } = await apiRequest.getAll();
                setproducts(data);
                // console.log(data);
            } catch (error) {
                console.log('failed to request API: ', error)
            }
        }
        getproducts();
    }, []);
    //xóa
    const deleteProduct = async (id) => {
        // const data = await apiRequest.remove(id);
        const dataFilter = products.filter(el => el.id !== id)
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
                setproducts(dataFilter);
                apiRequest.remove(id)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

    }


    const [category, setCategory] = useState('')
    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await api1.getAll();
                setCategory(data);
            } catch (error) {
            }
        }
        getCategory()
    }, []);

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="h3 mb-2 text-gray-800">Quản lý sản phẩm</h1>
                <Link to="/admin/products/add" className="btn btn-primary">Thêm sản phẩm</Link>
            </div>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Tên sản phẩm</th>
                                    <th scope="col">Tên danh mục sản phẩm</th>
                                    <th scope="col">Ảnh sản phẩm</th>
                                    <th scope="col">Giá</th>
                                    <th scope="col">Nội dung</th>
                                    <th scope="col" width="150"></th>
                                </tr>
                            </thead>
                            <tbody>

                                {products.map((el, index) =>
                                    <tr key={index}>
                                        <th scope="row">{el.id}</th>
                                        <td>{el.name}</td>
                                        <td>
                                            {category && category.map(cate => Number(cate.id) == el.categoryId && cate.name)}
                                        </td>
                                        <td><img src={el.image} alt="" width="100" /></td>
                                        <td>{el.price}</td>
                                        <td>{el.content}</td>
                                        <td>
                                            <Link to={`/admin/products/edit/${el.id}`} className="btn btn-primary" >Sửa</Link>
                                            <button className="btn btn-danger ml-3"
                                                onClick={() => deleteProduct(el.id)} >Xóa</button>
                                        </td>
                                    </tr>

                                )}



                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

Products.propTypes = {

}

export default Products