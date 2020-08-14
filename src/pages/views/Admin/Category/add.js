import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios';
import { useForm } from "react-hook-form";
import apiRequest from '../../../../api/categoryApi';
import Swal from 'sweetalert2';



const AddCategory = () => {
    //lấy dữ liệu trong ô input
    const [category, setCategory] = useState('');
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
    const history = useHistory()
    const onSubmit = async (data) => {
        apiRequest.create(data);
        // const api = await axios.post('http://localhost:8080/category', { name })
        // console.log(api);
        history.push('/admin/category')
        Swal.fire(
            'Thêm thành công!',
            'You clicked the button!',
            'success'
        )
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
                                value={category.name}
                                ref={register({ required: true, minLength: 3, pattern: /^\S{1}.{0,24}$/i })}
                            />
                            <small className="form-text text-danger">
                                {errors.name && errors.name.type === "required" && <span>Vui lòng không để trống</span>}
                                {errors.name && errors.name.type === "minLength" && <span>Tên danh mục ít nhất 3 kí tự</span>}
                                {errors.name && errors.name.type === "pattern" && <span>Vui lòng không để cách</span>}
                            </small>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" type="submit" >Lưu</button>&nbsp;
                         <Link to="/admin/category" className="btn btn-danger" >Hủy</Link>
                    </div>
                </div>
            </form>

        </div>
    )
}
AddCategory.propTypes = {

}

export default AddCategory
