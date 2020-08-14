import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import api1 from '../../../../api/productApi'
import api2 from '../../../../api/categoryApi'
import api3 from '../../../../api/postApi'
import api4 from '../../../../api/categoryPostApi'

const Dashboard = props => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const { data } = await api1.getAll();
                setProducts(data);
            } catch (error) {
                console.log('failed to request API: ', error)
            }
        }
        getProducts();
    }, []);
    const [category, setCategory] = useState([]);
    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await api2.getAll();
                setCategory(data);
                console.log(data);
            } catch (error) {
                console.log('failed to request API: ', error)
            }
        }
        getCategory();
    }, []);
    const [post, setPost] = useState([]);
    useEffect(() => {
        const getPost = async () => {
            try {
                const { data } = await api3.getAll([]);
                setPost(data);
                // console.log(data);
            } catch (error) {
                console.log('failed to request API: ', error)
            }
        }
        getPost();
    }, []);
    const [categoryPost, setCategoryPost] = useState([]);
    useEffect(() => {
        const getCategoryPost = async () => {
            try {
                const { data } = await api4.getAll();
                setCategoryPost(data);
                console.log(data);
            } catch (error) {

            }
        }
        getCategoryPost();
    }, []);
    return (
        <div>
            <div className="row">

                <div class="col-md-3">
                    Product:
                    {products.length}
                </div>

                <div class="col-md-3">
                    Category:
                    {category.length}
                </div>

                <div class="col-md-3">
                    Post:
                    {post.length}
                </div>

                <div class="col-md-3">
                    CategoryPost:
                    {categoryPost.length}
                </div>

            </div>
        </div>
    )
}

Dashboard.propTypes = {

}

export default Dashboard
