import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Header = props => {
    return (
        <div>
            <div className="py-1 bg-black">
                <div className="container">
                    <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
                        <div className="col-lg-12 d-block">
                            <div className="row d-flex">
                                <div className="col-md pr-4 d-flex topper align-items-center">
                                    <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-phone2" /></div>
                                    <span className="text">+ 1235 355 98</span>
                                </div>
                                <div className="col-md pr-4 d-flex topper align-items-center">
                                    <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-paper-plane" /></div>
                                    <span className="text">youremail@email.com</span>
                                </div>
                                <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
                                    <span className="text">3-5 Business days delivery &amp; Free Returns</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light" id="ftco-navbar">
                <div class="container">
                    <a class="navbar-brand" to="index.html">Minishop</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="oi oi-menu"></span> Menu
	      </button>

                    <div class="collapse navbar-collapse" id="ftco-nav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active"><Link to="/" class="nav-link">Home</Link></li>
                            {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Catalog</a>
                                <div class="dropdown-menu" aria-labelledby="dropdown04">
                                    <Link class="dropdown-item" to="/single-product">Single Product</Link>
                                    <Link class="dropdown-item" to="/cart">Cart</Link>
                                    <Link class="dropdown-item" to="/checkout">Checkout</Link>
                                </div>
                            </li> */}
                            <li class="nav-item"><Link to="/shop" class="nav-link">Shop</Link></li>

                            {/* <li class="nav-item"><Link to="/about" class="nav-link">About</Link></li> */}
                            <li class="nav-item"><Link to="/blog" class="nav-link">Blog</Link></li>
                            <li class="nav-item"><Link to="/contact" class="nav-link">Contact</Link></li>
                            <li class="nav-item cta cta-colored"><Link to="/cart" class="nav-link"><span class="icon-shopping_cart"></span>[0]</Link></li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Header.propTypes = {

}

export default Header
