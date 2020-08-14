import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import api from '../../../../api/postApi'
import api1 from '../../../../api/categoryApi'


const Blog = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        const getPost = async () => {
            try {
                const { data } = await api.getAll();
                setPost(data);
                console.log(data);
            } catch (error) {
                console.log('failed to request API: ', error)
            }
        }
        getPost();
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

   
    return (
        <div>
            <div className="hero-wrap hero-bread" style={{ backgroundImage: 'url("images/bg_6.jpg")' }}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center fadeInUp ftco-animated">
                            <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Blog</span></p>
                            <h1 className="mb-0 bread">Blog</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section className="ftco-section ftco-degree-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 order-lg-last ftco-animate fadeInUp ftco-animated">
                            <div className="row">
                                {post.map((el, index) => 
                                <div className="col-md-12 d-flex ftco-animate fadeInUp ftco-animated">
                                    <div className="blog-entry align-self-stretch d-md-flex">
                                            <a href="#" className="block-20"  ><img className="img-fluid" src={el.image} alt="Colorlib Template" />
                                        </a>
                                        <div className="text d-block pl-md-4">
                                            <div className="meta mb-3">
                                                <div><a href="#">April 9, 2019</a></div>
                                                <div><a href="#">Admin</a></div>
                                                <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                                            </div>
                                <h3 className="heading"><a href="#">{el.title}</a></h3>
                                <p>{el.content}</p>
                                            <p><a href="#" className="btn btn-primary py-2 px-3">Read more</a></p>
                                        </div>
                                    </div>
                                </div>
                                )}
                                
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    <div className="block-27">
                                        <ul>
                                            <li><a href="#">&lt;</a></li>
                                            <li className="active"><span>1</span></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>
                                            <li><a href="#">&gt;</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div> {/* .col-md-8 */}
                        <div className="col-lg-4 sidebar ftco-animate fadeInUp ftco-animated">
                            <div className="sidebar-box">
                                <form action="#" className="search-form">
                                    <div className="form-group">
                                        <span className="icon ion-ios-search" />
                                        <input type="text" className="form-control" placeholder="Type a keyword and hit enter" />
                                    </div>
                                </form>
                            </div>
                            <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
                                <h3 className="heading">Categories</h3>
                                {category.map((el,index) =>
                                <ul className="categories">
                                    <li><a href="#">{el.name}<span></span></a></li>
                                    
                                </ul>
                                )}
                            </div>
                            <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
                                <h3 className="heading">Recent Blog</h3>
                                <div className="block-21 mb-4 d-flex">
                                    <a className="blog-img mr-4" style={{ backgroundImage: 'url(images/image_1.jpg)' }} />
                                    <div className="text">
                                        <h3 className="heading-1"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                        <div className="meta">
                                            <div><a href="#"><span className="icon-calendar" /> April 27, 2019</a></div>
                                            <div><a href="#"><span className="icon-person" /> Admin</a></div>
                                            <div><a href="#"><span className="icon-chat" /> 19</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block-21 mb-4 d-flex">
                                    <a className="blog-img mr-4" style={{ backgroundImage: 'url(images/image_2.jpg)' }} />
                                    <div className="text">
                                        <h3 className="heading-1"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                        <div className="meta">
                                            <div><a href="#"><span className="icon-calendar" /> April 27, 2019</a></div>
                                            <div><a href="#"><span className="icon-person" /> Admin</a></div>
                                            <div><a href="#"><span className="icon-chat" /> 19</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block-21 mb-4 d-flex">
                                    <a className="blog-img mr-4" style={{ backgroundImage: 'url(images/image_3.jpg)' }} />
                                    <div className="text">
                                        <h3 className="heading-1"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                        <div className="meta">
                                            <div><a href="#"><span className="icon-calendar" /> April 27, 2019</a></div>
                                            <div><a href="#"><span className="icon-person" /> Admin</a></div>
                                            <div><a href="#"><span className="icon-chat" /> 19</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
                                <h3 className="heading">Tag Cloud</h3>
                                <div className="tagcloud">
                                    <a href="#" className="tag-cloud-link">shop</a>
                                    <a href="#" className="tag-cloud-link">products</a>
                                    <a href="#" className="tag-cloud-link">shirt</a>
                                    <a href="#" className="tag-cloud-link">jeans</a>
                                    <a href="#" className="tag-cloud-link">shoes</a>
                                    <a href="#" className="tag-cloud-link">dress</a>
                                    <a href="#" className="tag-cloud-link">coats</a>
                                    <a href="#" className="tag-cloud-link">jumpsuits</a>
                                </div>
                            </div>
                            <div className="sidebar-box ftco-animate fadeInUp ftco-animated">
                                <h3 className="heading">Paragraph</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-gallery">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 heading-section text-center mb-4 ftco-animate fadeInUp ftco-animated">
                            <h2 className="mb-4">Follow Us On Instagram</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-0">
                    <div className="row no-gutters">
                        <div className="col-md-4 col-lg-2 ftco-animate fadeInUp ftco-animated">
                            <a href="images/gallery-1.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: 'url(images/gallery-1.jpg)' }}>
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram" />
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 col-lg-2 ftco-animate fadeInUp ftco-animated">
                            <a href="images/gallery-2.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: 'url(images/gallery-2.jpg)' }}>
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram" />
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 col-lg-2 ftco-animate fadeInUp ftco-animated">
                            <a href="images/gallery-3.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: 'url(images/gallery-3.jpg)' }}>
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram" />
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 col-lg-2 ftco-animate fadeInUp ftco-animated">
                            <a href="images/gallery-4.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: 'url(images/gallery-4.jpg)' }}>
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram" />
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 col-lg-2 ftco-animate fadeInUp ftco-animated">
                            <a href="images/gallery-5.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: 'url(images/gallery-5.jpg)' }}>
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram" />
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 col-lg-2 ftco-animate fadeInUp ftco-animated">
                            <a href="images/gallery-6.jpg" className="gallery image-popup img d-flex align-items-center" style={{ backgroundImage: 'url(images/gallery-6.jpg)' }}>
                                <div className="icon mb-4 d-flex align-items-center justify-content-center">
                                    <span className="icon-instagram" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

Blog.propTypes = {

}

export default Blog
