import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import Products from '../pages/views/Admin/Products'
import EditProducts from '../pages/views/Admin/Products/edit';
import AddProducts from '../pages/views/Admin/Products/add';
import Category from '../pages/views/Admin/Category/index';
import AddCategory from '../pages/views/Admin/Category/add'
import EditCategory from '../pages/views/Admin/Category/edit'
import CategoryPost from '../pages/views/Admin/CategoryPost/index'
import AddCategoryPost from '../pages/views/Admin/CategoryPost/add'
import EditCategoryPost from '../pages/views/Admin/CategoryPost/edit'
import Post from '../pages/views/Admin/Post/index'
import AddPost from '../pages/views/Admin/Post/add'
import EditPost from '../pages/views/Admin/Post/edit'

//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import Shop from '../pages/views/Main/Shop'
import Blog from '../pages/views/Main/Blog'
import Cart from '../pages/views/Main/Cart'
import Checkout from '../pages/views/Main/Checkout'
import Contact from '../pages/views/Main/Contact'
import SingleProduct from '../pages/views/Main/SingleProduct'
import BlogSingle from'../pages/views/Main/BlogSingle'
import ProductCate from '../pages/views/Main/ProductCate'
import Search from '../pages/views/Main/Search'



const Routers = () => {

    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard />
                            </Route>
                            <Route path='/admin/products' exact >
                                <Products />

                            </Route>
                            <Route path='/admin/products/add'>
                                <AddProducts />
                            </Route>

                            <Route path='/admin/products/edit/:id' exact>
                                <EditProducts />

                            </Route>
                            <Route path='/admin/category' exact>
                                <Category />
                            </Route>
                            <Route path='/admin/category/add' exact>

                                <AddCategory />

                            </Route>
                            <Route path='/admin/category/edit/:id'>
                                <EditCategory />
                            </Route>
                            <Route path='/admin/categoryPost' exact>
                                <CategoryPost />
                            </Route>
                            <Route path='/admin/categoryPost/add'>
                                <AddCategoryPost />
                            </Route>
                            <Route path='/admin/categoryPost/edit/:id'>
                                <EditCategoryPost/>
                            </Route>
                            <Route path='/admin/post' exact>
                                <Post />
                            </Route>
                            <Route path='/admin/post/add'>
                                <AddPost />
                            </Route>
                            <Route path='/admin/post/edit/:id'>
                                <EditPost />
                            </Route>
                            
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutMain>
                        <Switch>
                            <Route path="/" exact>
                                <Home />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/blog">
                                <Blog />
                            </Route>
                            <Route path="/blog-single" >
                                <BlogSingle />
                            </Route>
                            <Route path="/cart">
                                <Cart />
                            </Route>
                            <Route path="/checkout">
                                <Checkout />
                            </Route>
                            <Route path="/contact">
                                <Contact />
                            </Route>
                            <Route path="/single-product/:id">
                                <SingleProduct />
                            </Route>
                            <Route path="/shop">
                                <Shop />
                            </Route>
                            <Route path="/product/category/:id">
                                <ProductCate />
                            </Route>
                            <Route path="/search/:name">
                                <Search />
                            </Route>


                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers