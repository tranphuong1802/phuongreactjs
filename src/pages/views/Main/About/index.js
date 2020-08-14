import React from 'react'
import PropTypes from 'prop-types'

const About = props => {
    return (
        <div>
            <div className="hero-wrap hero-bread" style={{ backgroundImage: 'url("images/bg_6.jpg")' }}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center fadeInUp ftco-animated">
                            <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>About</span></p>
                            <h1 className="mb-0 bread">About Us</h1>
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
            <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/about.jpg)' }}>
                            <a href="https://vimeo.com/45830194" className="icon popup-vimeo d-flex justify-content-center align-items-center">
                                <span className="icon-play" />
                            </a>
                        </div>
                        <div className="col-md-7 py-md-5 wrap-about pb-md-5 ftco-animate fadeInUp ftco-animated">
                            <div className="heading-section-bold mb-4 mt-md-5">
                                <div className="ml-md-0">
                                    <h2 className="mb-4">Stablished Sinced 1975</h2>
                                </div>
                            </div>
                            <div className="pb-md-5 pb-4">
                                <p>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                                <p>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her.</p>
                                <p><a href="#" className="btn btn-primary">Shop now</a></p>
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
                                <div className="services-2 p-4 d-flex ftco-animate fadeInUp ftco-animated">
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
                            <div className="carousel-testimony owl-carousel ftco-animate owl-loaded owl-drag fadeInUp ftco-animated">
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

About.propTypes = {

}

export default About
