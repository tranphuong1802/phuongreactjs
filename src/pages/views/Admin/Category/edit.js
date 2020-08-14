import React, { useState, useEffect } from 'react'
import api from '../../../../api/categoryApi'
import PropTypes from 'prop-types'
import { useHistory, Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { useForm } from "react-hook-form";


const EditCategory = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const { id } = useParams();
    let history = useHistory();
    //console.log(id);
    const [category, setCategory] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await api.get(id);
                setCategory(data);
            } catch (error) {
                console.log('failed to request API: ', error)
            }
        }
        getCategory();
    }, []);
    const onHandleSubmit = (data) => {
        api.update(id, data)
        history.push('/admin/category');

    }

    return (
        <div>
            <form onSubmit={handleSubmit(onHandleSubmit)} id="add-product-form" action="# " method="post" encType="multipart/form-data">
                <h3>Sửa danh mục</h3>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Tên danh mục<span className="text-danger">*</span></label>
                            <input ref={register({ required: true, minLength: 3, pattern: /^\S{1}.{0,24}$/i })}
                                name="name"
                                type="text"
                                className="form-control"
                                autoComplete="name"
                                defaultValue={category.name}

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
EditCategory.propTypes = {

}

export default EditCategory
