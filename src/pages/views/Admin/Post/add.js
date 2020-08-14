import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios';
import apiRequest from '../../../../api/postApi';
import api1 from '../../../../api/categoryPostApi';
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2';

import firebase from '../../../../firebase'
import CategoryPost from '../CategoryPost';

const AddPost = props => {
    const { register, handleSubmit, watch, errors } = useForm();
    let history = useHistory()
    const onSubmit = async (data) => {
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
                // const datas = axios.post('http://localhost:8080/post', newData);
                // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
                apiRequest.create(newData);

                history.push('/admin/post')
                Swal.fire(
                    'Thêm thành công!',
                    'You clicked the button!',
                    'success'
                )
            })
        });
    };

    //lấy danh mục
    const [categoryPost, setCategoryPost] = useState('')
    useEffect(() => {
        const getCategoryPost = async () => {
            try {
                const { data } = await api1.getAll();
                setCategoryPost(data);
            } catch (error) {
            }
        }
        getCategoryPost()
    }, []);
    console.log(categoryPost)
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}
                id="add-product-form" action="# " method="post" encType="multipart/form-data">
                <h3>Thêm mới bài viết</h3>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Tên bài viết<span className="text-danger">*</span></label>
                            <input ref={register({ required: true, minLength: 3, pattern: /^\S{1}.{0,24}$/i })} type="text" className="form-control" name="title" />
                            <small className="form-text text-danger">
                                {errors.title && errors.title.type === "required" && <span>Vui lòng không để trống</span>}
                                {errors.title && errors.title.type === "minLength" && <span>Vui lòng nhập ít nhất 3 kí tự</span>}
                                {errors.title && errors.title.type === "pattern" && <span>Vui lòng không được để cách</span>}

                            </small>
                        </div>
                        <div className="form-group">
                            <label>Danh mục bài viết</label>
                            <select name="id_catePost" className="form-control" ref={register({ required: true })}>
                                <option></option>
                                {categoryPost && categoryPost.map(cate =>
                                    <option value={cate.id}>{cate.name}</option>

                                )}
                            </select>

                        </div>


                        <div className="form-group">
                            <label htmlFor>Nội dung bài viết</label>
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
                                <label htmlFor>Ảnh đại diện bài viết<span className="text-danger">*</span></label>
                                <input type="file" ref={register({ required: true })} className="form-control" name="image" />
                                <small className="form-text text-danger">
                                    {errors.image && errors.image.type === "required" && <span>Vui lòng không để trống</span>}
                                </small>
                            </div>
                        </div>


                    </div>
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" type="submit">Lưu</button>&nbsp;
                         <Link to="admin/post" className="btn btn-danger">Hủy</Link>
                    </div>
                </div>
            </form>


        </div>
    )
}

AddPost.propTypes = {

}

export default AddPost
