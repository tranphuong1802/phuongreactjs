import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import api1 from '../../../../api/categoryApi';
import apiRequest from '../../../../api/productApi'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'


const Shop = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  let history = useHistory();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getproducts = async () => {
      try {
        const { data } = await apiRequest.getAll();
        setProducts(data);
        // console.log(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getproducts();
  }, []);


  const [category, setCategory] = useState([]);
  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data } = await api1.getAll();
        setCategory(data);
        console.log(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getCategory();
  }, []);



  const getAllProductsByCateId = async (id) => {
    try {
      const { data } = await api1.getProductsByCateId(id)
      setProducts(data)
    } catch (error) {
      console.log(error)
    }
  }
  const onHandelClick = (id) => {
    getAllProductsByCateId(id)
  }
  //search
  const onHandleSubmit = (data) => {
    console.log(data.name);
    history.push(`/search/${data.name}`)
  }


  //phân trang
  const [Sotrang, setSotrang] = useState(0)

  const tongSp = products.length;
  console.log(222, products)

  const tinhTrang = Math.ceil(tongSp / 6);

  const mang = [];
  for (var i = 1; i <= tinhTrang; i++) {
    mang.push(i)
  }


  return (
    <div>
      <div className="hero-wrap hero-bread" style={{ backgroundImage: 'url("images/bg_6.jpg")' }}>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 ftco-animate text-center fadeInUp ftco-animated">
              <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Shop</span></p>
              <h1 className="mb-0 bread">Shop</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row">

            <div className="col-md-8 col-lg-10 order-md-last">
              <div className="row">
                {products && products.map((el, index) => (
                  index < (((Sotrang + 1) * 6)) && index > ((Sotrang * 6) - 1) &&
                  <div className="col-sm-12 col-md-12 col-lg-4 ftco-animate d-flex fadeInUp ftco-animated">
                    <div className="product d-flex flex-column">
                      <a href="#" className="img-prod"><img className="img-fluid" src={el.image} alt="Colorlib Template" />
                        <div className="overlay" />
                      </a>
                      <div className="text py-3 pb-4 px-3">
                        <div className="d-flex">
                          <div className="cat">
                            <span> {category && category.map(cate => Number(cate.id) == el.categoryId && cate.name)}</span>
                          </div>
                          <div className="rating">
                            <p className="text-right mb-0">
                              <a href="#"><span className="ion-ios-star-outline" /></a>
                              <a href="#"><span className="ion-ios-star-outline" /></a>
                              <a href="#"><span className="ion-ios-star-outline" /></a>
                              <a href="#"><span className="ion-ios-star-outline" /></a>
                              <a href="#"><span className="ion-ios-star-outline" /></a>
                            </p>
                          </div>
                        </div>
                        <h3><a href="#">{el.name}</a></h3>
                        <div className="pricing">
                          <p className="price"><span>{el.price}</span></p>
                        </div>
                        <p className="bottom-area d-flex px-3">
                          <a href="#" className="add-to-cart text-center py-2 mr-1"><span>Add to cart <i className="ion-ios-add ml-1" /></span></a>
                          <a href="#" className="buy-now text-center py-2">Buy now<span><i className="ion-ios-cart ml-1" /></span></a>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}


              </div>
              <div className="row mt-5">
                <div className="col text-center">
                  <div className="block-27">
                    <ul>
                      {Sotrang > 0 &&
                        <li onClick={() => setSotrang(Sotrang - 1)}><a href="#">&lt;</a></li>}
                      {mang && mang.map((sotrang, index) =>
                        <li onClick={() => setSotrang(sotrang - 1)} className={Sotrang == (index) && "active"}><a href="#"> {sotrang}</a></li>
                      )}
                      {Sotrang < (mang.length - 1) &&
                        <li onClick={() => setSotrang(Sotrang + 1)}><a href="#">&gt;</a></li>
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="sidebar-box">
              <form onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="text" placeholder="Search Here" name="name" ref={register()} />
                <button className="search-btn"><i className="ion-ios-search-strong" /></button>
              </form>
            </div>

            <div className="col-md-4 col-lg-2">
              <div className="sidebar">
                <div className="sidebar-box-2">
                  <h2 className="heading">Categories</h2>
                  <div className="fancy-collapse-panel">
                    <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

                      <div className="panel panel-default">

                        <div className="panel-heading" id="headingOne">
                          {category.map((el, index) =>
                            <h4 className="panel-title">
                              <Link to={`/product/category/${el.id}`}>{el.name}</Link>
                            </h4>
                          )}
                        </div>

                        <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">

                        </div>

                      </div>




                    </div>
                  </div>
                </div>
                <div className="sidebar-box-2">
                  <h2 className="heading">Price Range</h2>
                  <form method="post" className="colorlib-form-2">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="guests">Price from:</label>
                          <div className="form-field">
                            <i className="icon icon-arrow-down3" />
                            <select name="people" id="people" className="form-control">
                              <option value="#">1</option>
                              <option value="#">200</option>
                              <option value="#">300</option>
                              <option value="#">400</option>
                              <option value="#">1000</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="guests">Price to:</label>
                          <div className="form-field">
                            <i className="icon icon-arrow-down3" />
                            <select name="people" id="people" className="form-control">
                              <option value="#">2000</option>
                              <option value="#">4000</option>
                              <option value="#">6000</option>
                              <option value="#">8000</option>
                              <option value="#">10000</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

Shop.propTypes = {

}

export default Shop
