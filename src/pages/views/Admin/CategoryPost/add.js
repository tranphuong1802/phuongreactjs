import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios';
import { useForm } from "react-hook-form";
import api from '../../../../api/categoryPostApi';
import Swal from 'sweetalert2';
import firebase from '../../../../firebase'

// import { useForm } from "react-hook-form";


const AddcategoryPostPost = () => {
    //lấy dữ liệu trong ô input
    const [categoryPost, setcategoryPost] = useState('');
    useEffect(() => {
        const getcategoryPost = async () => {
            try {
                const { data } = await api.getAll();
                setcategoryPost(data);
                console.log(data);
            } catch (error) {
                console.log('failed to request API: ', error)
            }
        }
        getcategoryPost();
    }, []);
    const history = useHistory()
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
                const datas = axios.post('http://localhost:8080/categoryPost', newData);
        // api.create(data);
        // const api = await axios.post('http://localhost:8080/categoryPost', { name })
        // console.log(api);
        history.push('/admin/categoryPost')
        Swal.fire(
            'Thêm thành công!',
            'You clicked the button!',
            'success'
        )
        });
        });

    }

    //validate form
    // const [validation,setValidation] = useState('');
    // const validationName = () => {
    //     const Vlname ={}
    //     if (isEmpty(name)) {
    //         Vlname.name ="hãy nhập tên danh mục"
    //     }
    //     setValidation(Vlname)
    //     if (Object.keys(Vlname).length > 0) return false
    //         return true
    // }
    // const onSubmitt = () => {
    //     const isValid = validationName()
    //     if(!isValid) return
    // }


    //validate form
    const { register, handleSubmit, watch, errors } = useForm();

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} id="add-product-form" action="# " method="post" encType="multipart/form-data">
                <h3>Thêm mới danh mục</h3>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Tên danh mục<span className="text-danger">*</span></label>
                            <input
                                name="name"
                                type="text"
                                className="form-control"
                                autoComplete="name"
                                value={categoryPost.name}
                                ref={register({ required: true, minLength: 3, pattern: /^\S{1}.{0,24}$/i })}
                            />
                            <small className="form-text text-danger">
                                {errors.name && errors.name.type === "required" && <span>Vui lòng không để trống</span>}
                                {errors.name && errors.name.type === "minLength" && <span>Tên danh mục ít nhất 3 kí tự</span>}
                                {errors.name && errors.name.type === "pattern" && <span>Vui lòng không để cách</span>}
                            </small>
                        </div>
                  
                    

                        <div>
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
AddcategoryPostPost.propTypes = {

}

export default AddcategoryPostPost
