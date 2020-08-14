import React, { useState, useEffect } from 'react'
import api from '../../../../api/categoryPostApi'
import PropTypes from 'prop-types'
import { useHistory, Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { useForm } from "react-hook-form";
import firebase from '../../../../firebase'

const EditcategoryPost = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const { id } = useParams();
    let history = useHistory();
    //console.log(id);
    const [categoryPost, setcategoryPost] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const getcategoryPost = async () => {
            try {
                const { data } = await api.get(id);
                setcategoryPost(data);
            } catch (error) {
                console.log('failed to request API: ', error)
            }
        }
        getcategoryPost();
    }, []);
    const onHandleSubmit = (data) => {
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
                // console.log(newData);
                api.update(id, newData);
                // api.create(newData);
        history.push('/admin/categoryPost');
             
        })
    });

    }
    return (
        <div>
            <form onSubmit={handleSubmit(onHandleSubmit)} id="add-product-form" action="# " method="post" encType="multipart/form-data">
                <h3>Sửa danh mục bài viết</h3>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Tên danh mục<span className="text-danger">*</span></label>
                            <input
                                name="name"
                                type="text"
                                className="form-control"
                                autoComplete="name"
                                defaultValue={categoryPost.name}
                                ref={register({ required: true, minLength: 3, pattern: /^\S{1}.{0,24}$/i })}
                            />
                            <small className="form-text text-danger">
                                {errors.name && errors.name.type === "required" && <span>Vui lòng không để trống</span>}
                                {errors.name && errors.name.type === "minLength" && <span>Tên danh mục ít nhất 3 kí tự</span>}
                                {errors.name && errors.name.type === "pattern" && <span>Vui lòng không để cách</span>}
                            </small>
                        </div>
                        <div className="row">
                            <div className="col-8 offset-2">
                                <img id="preview-img" src="#}" className="img-fluid" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor>Ảnh đại diện danh mục bài viết<span className="text-danger">*</span></label>
                            <input type="file" ref={register({ required: true })} className="form-control" name="image" />
                            <small className="form-text text-danger">
                                {errors.image && errors.image.type === "required" && <span>Vui lòng không để trống</span>}
                            </small>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" type="submit" >Lưu</button>&nbsp;
                         <Link to="/admin/categoryPost" className="btn btn-danger" >Hủy</Link>
                    </div>
                </div>
            </form>

        </div>
    )
}

EditcategoryPost.propTypes = {

}

export default EditcategoryPost
