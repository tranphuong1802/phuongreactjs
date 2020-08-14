import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios';
import api from '../../../../api/productApi';
import cate from '../../../../api/categoryApi';
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2';

import firebase from '../../../../firebase'

const AddProducts = (props) => {
    const { register, handleSubmit, watch, errors } = useForm();
    let history = useHistory()
    const onSubmit = async (data) => {
        console.log(data);
        let file = data.image[0];
        // tạo reference chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                // Tạo object mới chứa toàn bộ thông tin từ input
                const newData = {
                    ...data,
                    
                    image: url
                }
                console.log(newData);
                // const datas =  axios.post('http://localhost:8080/products', newData);
                api.create(newData);

                // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
                history.push('/admin/products')
                Swal.fire(
                    'Thêm thành công!',
                    'You clicked the button!',
                    'success'
                )
            })
        });
    };

    //lấy danh mục
    const [category, setCategory] = useState('')
    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await cate.getAll();
                setCategory(data);
            } catch (error) {
            }
        }
        getCategory()
    }, []);
    console.log(category)
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}
                id="add-product-form" action="# " method="post" encType="multipart/form-data">
                <h3>Thêm mới sản phẩm</h3>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Tên sản phẩm<span className="text-danger">*</span></label>
                            <input ref={register({ required: true, minLength: 3, pattern: /^\S{1}.{0,24}$/i })} type="text" className="form-control" name="name" />
                            <small className="form-text text-danger">
                                {errors.name && errors.name.type === "required" && <span>Vui lòng không để trống</span>}
                                {errors.name && errors.name.type === "minLength" && <span>Vui lòng nhập ít nhất 3 kí tự</span>}
                                {errors.name && errors.name.type === "pattern" && <span>Vui lòng không được để cách</span>}

                            </small>
                        </div>
                        <div className="form-group">
                            <label>Danh mục sản phẩm</label>
                            <select name="categoryId" className="form-control" ref={register({ required: true })}>
                                <option></option>
                                {category && category.map(cate =>
                                    <option value={cate.id}>{cate.name}</option>

                                )}
                            </select>
                            <small className="form-text text-danger">
                                {errors.categoryId && errors.categoryId.type === "required" && <span>Vui lòng không để trống</span>}

                            </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor>Giá sản phẩm<span className="text-danger">*</span></label>
                            <input ref={register({ required: true })} type="number" className="form-control" name="price" />
                            <small className="form-text text-danger">
                                {errors.price && errors.price.type === "required" && <span>Vui lòng không để trống</span>}
                            </small>
                        </div>

                        <div className="form-group">
                            <label htmlFor>Mô tả ngắn</label>
                            <textarea ref={register({ required: true })} name="content" className="form-control" rows={5} defaultValue={""} />
                            <small className="form-text text-danger">
                                {errors.content && errors.content.type === "required" && <span>Vui lòng không để trống</span>}
                            </small>
                        </div>
                    </div>
                    <div className="col-md-6">

                        <div>
                            <div className="row">
                                <div className="col-8 offset-2">
                                    <img id="preview-img" src="#}" className="img-fluid" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor>Ảnh đại diện sản phẩm<span className="text-danger">*</span></label>
                                <input type="file" ref={register({ required: true })} className="form-control" name="image" />
                                <small className="form-text text-danger">
                                    {errors.image && errors.image.type === "required" && <span>Vui lòng không để trống</span>}
                                </small>
                            </div>
                        </div>


                    </div>
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" type="submit">Lưu</button>&nbsp;
                         <Link to="/admin/products" className="btn btn-danger">Hủy</Link>
                    </div>
                </div>
            </form>


        </div>
    )
}
AddProducts.propTypes = {

}

export default AddProducts
