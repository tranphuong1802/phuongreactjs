import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useHistory, Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { useForm } from "react-hook-form";
import api from '../../../../api/productApi'
import api1 from '../../../../api/categoryApi';
import Swal from 'sweetalert2'
import firebase from 'firebase'

const EditProducts = props => {
    const { id } = useParams();
    const history = useHistory()
    const [product, setProduct] = useState({});
    const { register, handleSubmit, errors } = useForm();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await api.get(id);
                setProduct(data);
            } catch (error) {
            }
        }
        getProduct()
    }, []);

    //lấy danh mục
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

const[images,setImages]=useState('');
    const onHandleSubmit = async (data) => {

        // console.log(data);
        // tạo reference chứa ảnh trên firesbase
       
        if (images) {
            const newData = {
                ...data,

                image: images
            }
            api.update(id, newData);

            
        }
        else{
            const newData = {
                ...data,

                image: product.image
            }
            api.update(id, newData);

        }
        Swal.fire(
            'Sửa thành công!',
            'You clicked the button!',
            'success'
        )
        // console.log(newData);
        // api.create(newData);
        // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
        history.push('/admin/products')

    }
const handlChanImage =e =>{
    if (e.target.files[0]) {
        const file = e.target.files[0];
        console.log(file);
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                setImages(url)
                // Tạo object mới chứa toàn bộ thông tin từ input


                
            })
        });
    }
   

}

    return (
        <div>
            <form onSubmit={handleSubmit(onHandleSubmit)}
                id="add-product-form" action="# " method="post" encType="multipart/form-data">
                <h3> Sửa sản phẩm</h3>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Tên sản phẩm<span className="text-danger">*</span></label>
                            <input type="text" ref={register({ required: true, minLength: 3, pattern: /^\S{1}.{0,24}$/i })} defaultValue={product.name} className="form-control" name="name" />
                            <small className="form-text text-danger">
                                {errors.name && errors.name.type === "required" && <span>Vui lòng không để trống</span>}
                                {errors.name && errors.name.type === "minLength" && <span>Vui lòng nhập ít nhất 3 kí tự</span>}
                                {errors.name && errors.name.type === "pattern" && <span>không được để cách</span>}


                            </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Danh mục</label>
                            <select className="form-control" name="categoryId" ref={register} >
                                {category && category.map(cate =>
                                    <option value={cate.id}>{cate.name}</option>
                                )}
                            </select>

                        </div>
                        <div className="form-group">
                            <label htmlFor>Giá sản phẩm<span className="text-danger">*</span></label>
                            <input ref={register({ required: true })} defaultValue={product.price} type="number" className="form-control" name="price" />
                            <small className="form-text text-danger">
                                {errors.price && errors.price.type === "required" && <span>Vui lòng không để trống</span>}
                            </small>
                        </div>

                        <div className="form-group">
                            <label htmlFor>Mô tả ngắn</label>
                            <textarea ref={register({ required: true })} defaultValue={product.content} name="content" className="form-control" rows={5} />
                            <small className="form-text text-danger">
                                {errors.content && errors.content.type === "required" && <span>Vui lòng không để trống</span>}
                            </small>
                        </div>
                    </div>
                    <div className="col-md-6">

                        <div className="row">
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor>Ảnh đại diện sản phẩm<span className="text-danger">*</span></label>
                            <input type="hidden" ref={register}  className="form-control" defaultValue={images ? images: product.image} name="image" />
                            <img src={images ? images : product.image} alt=""/>
                            <input type="file" onChange={handlChanImage} className="form-control"   />
                            {/* <small className="form-text text-danger">
                                {errors.image && errors.image.type === "required" && <span>Vui lòng không để trống</span>}
                            </small> */}
                        </div>



                    </div>
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" type="submit">Lưu</button>;
                         <Link to="/admin/products" className="btn btn-danger">Hủy</Link>
                    </div>
                </div>
            </form>

        </div>
    )
}

EditProducts.propTypes = {

}

export default EditProducts
