import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import apiRequest from '../../../../api/productApi';
import api1 from '../../../../api/categoryApi';
import {Link} from 'react-router-dom'



const Home = props => {

    const [products, setproducts] = useState([]);
    useEffect(() => {
        const getproducts = async () => {
            try {
                const { data } = await apiRequest.getAll();
                setproducts(data);
                // console.log(data);
            } catch (error) {
                console.log('failed to request API: ', error)
            }
        }
        getproducts();
    }, []);
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

    return (
        <div>
            <div className="container-fluid p-0">
                <div className="row d-md-flex no-gutters slider-text align-items-center justify-content-end" data-scrollax-parent="true">
                    <img className="one-third order-md-last img-fluid" src="images/bg_1.png" alt="" />
                    <div className="one-forth d-flex align-items-center ftco-animate fadeInUp ftco-animated" data-scrollax=" properties: { translateY: '70%' }" style={{ transform: 'translateZ(0px) translateY(-3.56195%)' }}>
                        <div className="text">
                            <span className="subheading">#New Arrival</span>

                        </div>
                    </div>
                </div>
            </div>

            <section className="ftco-section ftco-no-pt ftco-no-pb">
                <div className="container">
                    <div className="row no-gutters ftco-services">
                        <div className="col-lg-4 text-center d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
                            <div className="media block-6 services p-4 py-md-5">
                                <div className="icon d-flex justify-content-center align-items-center mb-4">
                                    <span className="flaticon-bag" />
                                </div>
                                <div className="media-body">
                                    <h3 className="heading">Free Shipping</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
                            <div className="media block-6 services p-4 py-md-5">
                                <div className="icon d-flex justify-content-center align-items-center mb-4">
                                    <span className="flaticon-customer-service" />
                                </div>
                                <div className="media-body">
                                    <h3 className="heading">Support Customer</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
                            <div className="media block-6 services p-4 py-md-5">
                                <div className="icon d-flex justify-content-center align-items-center mb-4">
                                    <span className="flaticon-payment-security" />
                                </div>
                                <div className="media-body">
                                    <h3 className="heading">Secure Payments</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row justify-content-center mb-3 pb-3">
                        <div className="col-md-12 heading-section text-center ftco-animate fadeInUp ftco-animated">
                            <h2 className="mb-4">New Shoes Arrival</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        
                        {products.map((el, index) =>
                            <div className="col-sm-12 col-md-6 col-lg-3 ftco-animate d-flex fadeInUp ftco-animated">

                                <div className="product d-flex flex-column" key={index}>

                                    <Link to={`/single-product/${el.id}`} className="img-prod"><img className="img-fluid" src={el.image} alt="Colorlib Template" />
                                        <div className="overlay" />
                                    </Link>
                                    <div className="text py-3 pb-4 px-3">
                                        <div className="d-flex">
                                            <div className="cat">
                                                <span> {category && category.map(cate => Number(cate.id) == el.id_cate && cate.name)}</span>
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
                        )}
                     
                         </div>
                </div>
            </section>
            <section className="ftco-section ftco-choose ftco-no-pb ftco-no-pt">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-lg-4">
                            <div className="choose-wrap divider-one img p-5 d-flex align-items-end" style={{ backgroundImage: 'url(images/choose-1.jpg)' }}>
                                <div className="text text-center text-white px-2">
                                    <span className="subheading">Men's Shoes</span>
                                    <h2>Men's Collection</h2>
                                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                    <p><a href="#" className="btn btn-black px-3 py-2">Shop now</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row no-gutters choose-wrap divider-two align-items-stretch">
                                <div className="col-md-12">
                                    <div className="choose-wrap full-wrap img align-self-stretch d-flex align-item-center justify-content-end" style={{ backgroundImage: 'url(images/choose-2.jpg)' }}>
                                        <div className="col-md-7 d-flex align-items-center">
                                            <div className="text text-white px-5">
                                                <span className="subheading">Women's Shoes</span>
                                                <h2>Women's Collection</h2>
                                                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                                <p><a href="#" className="btn btn-black px-3 py-2">Shop now</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="row no-gutters">
                                        <div className="col-md-6">
                                            <div className="choose-wrap wrap img align-self-stretch bg-light d-flex align-items-center">
                                                <div className="text text-center px-5">
                                                    <span className="subheading">Summer Sale</span>
                                                    <h2>Extra 50% Off</h2>
                                                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                                    <p><a href="#" className="btn btn-black px-3 py-2">Shop now</a></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="choose-wrap wrap img align-self-stretch d-flex align-items-center" style={{ backgroundImage: 'url(images/choose-3.jpg)' }}>
                                                <div className="text text-center text-white px-5">
                                                    <span className="subheading">Shoes</span>
                                                    <h2>Best Sellers</h2>
                                                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                                    <p><a href="#" className="btn btn-black px-3 py-2">Shop now</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section testimony-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="services-flow">
                                <div className="services-2 p-4 d-flex ftco-animate fadeInUp ftco-animated">
                                    <div className="icon">
                                        <span className="flaticon-bag" />
                                    </div>
                                    <div className="text">
                                        <h3>Free Shipping</h3>
                                        <p className="mb-0">Separated they live in. A small river named Duden flows</p>
                                    </div>
                                </div>
                                <div className="services-2 p-4 d-flex ftco-animate fadeInUp ftco-animated">
                                    <div className="icon">
                                        <span className="flaticon-heart-box" />
                                    </div>
                                    <div className="text">
                                        <h3>Valuable Gifts</h3>
                                        <p className="mb-0">Separated they live in. A small river named Duden flows</p>
                                    </div>
                                </div>
                                <div className="services-2 p-4 d-flex ftco-animate fadeInUp ftco-animated">
                                    <div className="icon">
                                        <span className="flaticon-payment-security" />
                                    </div>
                                    <div className="text">
                                        <h3>All Day Support</h3>
                                        <p className="mb-0">Separated they live in. A small river named Duden flows</p>
                                    </div>
                                </div>
                                <div className="services-2 p-4 d-flex ftco-animate">
                                    <div className="icon">
                                        <span className="flaticon-customer-service" />
                                    </div>
                                    <div className="text">
                                        <h3>All Day Support</h3>
                                        <p className="mb-0">Separated they live in. A small river named Duden flows</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="heading-section ftco-animate mb-5 fadeInUp ftco-animated">
                                <h2 className="mb-4">Our satisfied customer says</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                            </div>
                            <div className="carousel-testimony owl-carousel owl-loaded owl-drag">
                                <div className="owl-stage-outer"><div className="owl-stage" style={{ transition: 'all 0s ease 0s', width: 7315, transform: 'translate3d(-1994px, 0px, 0px)' }}><div className="owl-item cloned" style={{ width: '634.984px', marginRight: 30 }}><div className="item">
                                    <div className="testimony-wrap">
                                        <div className="user-img mb-4" style={{ backgroundImage: 'url(images/person_3.jpg)' }}>
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left" />
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Garreth Smith</p>
                                            <span className="position">UI Designer</span>
                                        </div>
                                    </div>
                                </div></div><div className="owl-item cloned" style={{ width: '634.984px', marginRight: 30 }}><div className="item">
                                    <div className="testimony-wrap">
                                        <div className="user-img mb-4" style={{ backgroundImage: 'url(images/person_1.jpg)' }}>
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left" />
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Garreth Smith</p>
                                            <span className="position">Web Developer</span>
                                        </div>
                                    </div>
                                </div></div><div className="owl-item cloned" style={{ width: '634.984px', marginRight: 30 }}><div className="item">
                                    <div className="testimony-wrap">
                                        <div className="user-img mb-4" style={{ backgroundImage: 'url(images/person_1.jpg)' }}>
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left" />
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Garreth Smith</p>
                                            <span className="position">System Analyst</span>
                                        </div>
                                    </div>
                                </div></div><div className="owl-item active center" style={{ width: '634.984px', marginRight: 30 }}><div className="item">
                                    <div className="testimony-wrap">
                                        <div className="user-img mb-4" style={{ backgroundImage: 'url(images/person_1.jpg)' }}>
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left" />
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Garreth Smith</p>
                                            <span className="position">Marketing Manager</span>
                                        </div>
                                    </div>
                                </div></div><div className="owl-item" style={{ width: '634.984px', marginRight: 30 }}><div className="item">
                                    <div className="testimony-wrap">
                                        <div className="user-img mb-4" style={{ backgroundImage: 'url(images/person_2.jpg)' }}>
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left" />
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Garreth Smith</p>
                                            <span className="position">Interface Designer</span>
                                        </div>
                                    </div>
                                </div></div><div className="owl-item" style={{ width: '634.984px', marginRight: 30 }}><div className="item">
                                    <div className="testimony-wrap">
                                        <div className="user-img mb-4" style={{ backgroundImage: 'url(images/person_3.jpg)' }}>
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left" />
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Garreth Smith</p>
                                            <span className="position">UI Designer</span>
                                        </div>
                                    </div>
                                </div></div><div className="owl-item" style={{ width: '634.984px', marginRight: 30 }}><div className="item">
                                    <div className="testimony-wrap">
                                        <div className="user-img mb-4" style={{ backgroundImage: 'url(images/person_1.jpg)' }}>
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left" />
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Garreth Smith</p>
                                            <span className="position">Web Developer</span>
                                        </div>
                                    </div>
                                </div></div><div className="owl-item" style={{ width: '634.984px', marginRight: 30 }}><div className="item">
                                    <div className="testimony-wrap">
                                        <div className="user-img mb-4" style={{ backgroundImage: 'url(images/person_1.jpg)' }}>
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left" />
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Garreth Smith</p>
                                            <span className="position">System Analyst</span>
                                        </div>
                                    </div>
                                </div></div><div className="owl-item cloned" style={{ width: '634.984px', marginRight: 30 }}><div className="item">
                                    <div className="testimony-wrap">
                                        <div className="user-img mb-4" style={{ backgroundImage: 'url(images/person_1.jpg)' }}>
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left" />
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Garreth Smith</p>
                                            <span className="position">Marketing Manager</span>
                                        </div>
                                    </div>
                                </div></div><div className="owl-item cloned" style={{ width: '634.984px', marginRight: 30 }}><div className="item">
                                    <div className="testimony-wrap">
                                        <div className="user-img mb-4" style={{ backgroundImage: 'url(images/person_2.jpg)' }}>
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left" />
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Garreth Smith</p>
                                            <span className="position">Interface Designer</span>
                                        </div>
                                    </div>
                                </div></div><div className="owl-item cloned" style={{ width: '634.984px', marginRight: 30 }}><div className="item">
                                    <div className="testimony-wrap">
                                        <div className="user-img mb-4" style={{ backgroundImage: 'url(images/person_3.jpg)' }}>
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left" />
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p className="mb-4 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Garreth Smith</p>
                                            <span className="position">UI Designer</span>
                                        </div>
                                    </div>
                                </div></div></div></div><div className="owl-nav disabled"><button role="presentation" className="owl-prev"><span className="ion-ios-arrow-back" /></button><button role="presentation" className="owl-next"><span className="ion-ios-arrow-forward" /></button></div><div className="owl-dots"><button className="owl-dot active"><span /></button><button className="owl-dot"><span /></button><button className="owl-dot"><span /></button><button className="owl-dot"><span /></button><button className="owl-dot"><span /></button></div></div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
Home.propTypes = {

}

export default Home
