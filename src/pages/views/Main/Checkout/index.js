import React from 'react'
import PropTypes from 'prop-types'

const Checkout = props => {
    return (
        <div>
            <div className="hero-wrap hero-bread" style={{ backgroundImage: 'url("images/bg_6.jpg")' }}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center fadeInUp ftco-animated">
                            <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Checkout</span></p>
                            <h1 className="mb-0 bread">Checkout</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 ftco-animate fadeInUp ftco-animated">
                            <form action="#" className="billing-form">
                                <h3 className="mb-4 billing-heading">Billing Details</h3>
                                <div className="row align-items-end">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="firstname">Firt Name</label>
                                            <input type="text" className="form-control" placeholder />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="lastname">Last Name</label>
                                            <input type="text" className="form-control" placeholder />
                                        </div>
                                    </div>
                                    <div className="w-100" />
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="country">State / Country</label>
                                            <div className="select-wrap">
                                                <div className="icon"><span className="ion-ios-arrow-down" /></div>
                                                <select name id className="form-control">
                                                    <option value>France</option>
                                                    <option value>Italy</option>
                                                    <option value>Philippines</option>
                                                    <option value>South Korea</option>
                                                    <option value>Hongkong</option>
                                                    <option value>Japan</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-100" />
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="streetaddress">Street Address</label>
                                            <input type="text" className="form-control" placeholder="House number and street name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Appartment, suite, unit etc: (optional)" />
                                        </div>
                                    </div>
                                    <div className="w-100" />
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="towncity">Town / City</label>
                                            <input type="text" className="form-control" placeholder />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="postcodezip">Postcode / ZIP *</label>
                                            <input type="text" className="form-control" placeholder />
                                        </div>
                                    </div>
                                    <div className="w-100" />
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone</label>
                                            <input type="text" className="form-control" placeholder />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="emailaddress">Email Address</label>
                                            <input type="text" className="form-control" placeholder />
                                        </div>
                                    </div>
                                    <div className="w-100" />
                                    <div className="col-md-12">
                                        <div className="form-group mt-4">
                                            <div className="radio">
                                                <label className="mr-3"><input type="radio" name="optradio" /> Create an Account? </label>
                                                <label><input type="radio" name="optradio" /> Ship to different address</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>{/* END */}
                            <div className="row mt-5 pt-3 d-flex">
                                <div className="col-md-6 d-flex">
                                    <div className="cart-detail cart-total bg-light p-3 p-md-4">
                                        <h3 className="billing-heading mb-4">Cart Total</h3>
                                        <p className="d-flex">
                                            <span>Subtotal</span>
                                            <span>$20.60</span>
                                        </p>
                                        <p className="d-flex">
                                            <span>Delivery</span>
                                            <span>$0.00</span>
                                        </p>
                                        <p className="d-flex">
                                            <span>Discount</span>
                                            <span>$3.00</span>
                                        </p>
                                        <hr />
                                        <p className="d-flex total-price">
                                            <span>Total</span>
                                            <span>$17.60</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="cart-detail bg-light p-3 p-md-4">
                                        <h3 className="billing-heading mb-4">Payment Method</h3>
                                        <div className="form-group">
                                            <div className="col-md-12">
                                                <div className="radio">
                                                    <label><input type="radio" name="optradio" className="mr-2" /> Direct Bank Tranfer</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-12">
                                                <div className="radio">
                                                    <label><input type="radio" name="optradio" className="mr-2" /> Check Payment</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-12">
                                                <div className="radio">
                                                    <label><input type="radio" name="optradio" className="mr-2" /> Paypal</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-12">
                                                <div className="checkbox">
                                                    <label><input type="checkbox" defaultValue className="mr-2" /> I have read and accept the terms and conditions</label>
                                                </div>
                                            </div>
                                        </div>
                                        <p><a href="#" className="btn btn-primary py-3 px-4">Place an order</a></p>
                                    </div>
                                </div>
                            </div>
                        </div> {/* .col-md-8 */}
                    </div>
                </div>
            </section>


        </div>
    )
}

Checkout.propTypes = {

}

export default Checkout
