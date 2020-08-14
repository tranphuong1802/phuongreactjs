import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import apiRequest from '../../../../api/postApi';
import api1 from '../../../../api/categoryPostApi';
import Swal from 'sweetalert2'

const Post = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        const getPost = async () => {
            try {
                const { data } = await apiRequest.getAll();
                setPost(data);
                // console.log(data);
            } catch (error) {
                console.log('failed to request API: ', error)
            }
        }
        getPost();
    }, []);
    //xóa
    const deletePost = async (id) => {
        // const data = await apiRequest.remove(id);
        const dataFilter = post.filter(el => el.id !== id)
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
                setPost(dataFilter);
                apiRequest.remove(id)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

    }


    const [categoryPost, setCategoryPost] = useState('')
    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await api1.getAll();
                setCategoryPost(data);
            } catch (error) {
            }
        }
        getCategory()
    }, []);

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="h3 mb-2 text-gray-800">Quản lý bài viết</h1>
                <Link to="/admin/post/add" className="btn btn-primary">Thêm bài viết</Link>
            </div>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Tiêu đề bài viết</th>
                                    <th scope="col">Danh mục </th>
                                    <th scope="col">Ảnh bài viết</th>
                                    <th scope="col">Nội dung</th>
                                    <th scope="col" width="150"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {post.map((el, index) =>
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{el.title}</td>
                                        <td>
                                            {categoryPost && categoryPost.map(categoryPost => Number(categoryPost.id) == el.id_catePost && categoryPost.name)}
                                        </td>

                                        <td><img src={el.image} alt="" width="100" /></td>
                                        <td>{el.content}</td>
                                        
                                        <td>
                                            <Link to={`/admin/post/edit/${el.id}`} className="btn btn-primary" >Sửa</Link>
                                            <button className="btn btn-danger ml-3" onClick={() => deletePost(el.id)}
                                            >Xóa</button>
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

Post.propTypes = {

}

export default Post
