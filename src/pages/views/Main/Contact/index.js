import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import apiRequest from '../../../../api/contactApi'
import { useHistory, Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';


const Contact = () => {
    const [contact, setContact] = useState([]);
    useEffect(() => {
        const getcontact = async () => {
            try {
                const { data } = await apiRequest.getAll();
                setContact(data);
                console.log(data);
            } catch (error) {
                console.log('failed to request API: ', error)
            }
        }
        getcontact();
    }, []);
    const history = useHistory()
    const { register, handleSubmit, watch, errors } = useForm();

    const onHandleSubmit = async (data) => {
        console.log(data);
        // apiRequest.create(data);
        
        // history.push('/contact')
        Swal.fire(
            'Gửi thành công!',
            'You clicked the button!',
            'success'
        )
    }


    return (
        <div>
            <div className="hero-wrap hero-bread" style={{ backgroundImage: 'url("images/bg_6.jpg")' }}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center fadeInUp ftco-animated">
                            <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>Contact</span></p>
                            <h1 className="mb-0 bread">Contact Us</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section className="ftco-section contact-section bg-light">
                <div className="container">
                    <div className="row d-flex mb-5 contact-info">
                        <div className="w-100" />
                        <div className="col-md-3 d-flex">
                            <div className="info bg-white p-4">
                                <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="info bg-white p-4">
                                <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="info bg-white p-4">
                                <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="info bg-white p-4">
                                <p><span>Website</span> <a href="#">yoursite.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="row block-9">
                        <div className="col-md-6 order-md-last d-flex">
                            <form onSubmit={handleSubmit(onHandleSubmit)} method="post" className="bg-white p-5 contact-form" >
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Name" name="name" ref={register} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Email"
                                        name="email" ref={register} 
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Address"
                                        name="address" ref={register} 
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea name id cols={30} rows={7} className="form-control" placeholder="Message" name="message" ref={register} />
                                </div>
                                <div className="form-group">
                                    <input type="submit" defaultValue="Send Message" className="btn btn-primary py-3 px-5" />
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6 d-flex">
                            <div id="map" className="bg-white" style={{ position: 'relative', overflow: 'hidden' }}><div style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'rgb(229, 227, 223)' }}><div className="gm-style" style={{ position: 'absolute', zIndex: 0, left: 0, top: 0, height: '100%', width: '100%', padding: 0, borderWidth: 0, margin: 0 }}><div tabIndex={0} style={{ position: 'absolute', zIndex: 0, left: 0, top: 0, height: '100%', width: '100%', padding: 0, borderWidth: 0, margin: 0, cursor: 'url("https://maps.gstatic.com/mapfiles/openhand_8_8.cur"), default', touchAction: 'pan-x pan-y' }}><div style={{ zIndex: 1, position: 'absolute', left: '50%', top: '50%', width: '100%', transform: 'translate(0px, 0px)' }}><div style={{ position: 'absolute', left: 0, top: 0, zIndex: 100, width: '100%' }}><div style={{ position: 'absolute', left: 0, top: 0, zIndex: 0 }}><div style={{ position: 'absolute', zIndex: 993, transform: 'matrix(1, 0, 0, 1, -181, -34)' }}><div style={{ position: 'absolute', left: 0, top: 0, width: 256, height: 256 }}><div style={{ width: 256, height: 256 }} /></div><div style={{ position: 'absolute', left: '-256px', top: 0, width: 256, height: 256 }}><div style={{ width: 256, height: 256 }} /></div><div style={{ position: 'absolute', left: '-256px', top: '-256px', width: 256, height: 256 }}><div style={{ width: 256, height: 256 }} /></div><div style={{ position: 'absolute', left: 0, top: '-256px', width: 256, height: 256 }}><div style={{ width: 256, height: 256 }} /></div><div style={{ position: 'absolute', left: 256, top: '-256px', width: 256, height: 256 }}><div style={{ width: 256, height: 256 }} /></div><div style={{ position: 'absolute', left: 256, top: 0, width: 256, height: 256 }}><div style={{ width: 256, height: 256 }} /></div><div style={{ position: 'absolute', left: 256, top: 256, width: 256, height: 256 }}><div style={{ width: 256, height: 256 }} /></div><div style={{ position: 'absolute', left: 0, top: 256, width: 256, height: 256 }}><div style={{ width: 256, height: 256 }} /></div><div style={{ position: 'absolute', left: '-256px', top: 256, width: 256, height: 256 }}><div style={{ width: 256, height: 256 }} /></div></div></div></div><div style={{ position: 'absolute', left: 0, top: 0, zIndex: 101, width: '100%' }} /><div style={{ position: 'absolute', left: 0, top: 0, zIndex: 102, width: '100%' }} /><div style={{ position: 'absolute', left: 0, top: 0, zIndex: 103, width: '100%' }}><div style={{ position: 'absolute', left: 0, top: 0, zIndex: -1 }}><div style={{ position: 'absolute', zIndex: 993, transform: 'matrix(1, 0, 0, 1, -181, -34)' }}><div style={{ width: 256, height: 256, overflow: 'hidden', position: 'absolute', left: 0, top: 0 }} /><div style={{ width: 256, height: 256, overflow: 'hidden', position: 'absolute', left: '-256px', top: 0 }} /><div style={{ width: 256, height: 256, overflow: 'hidden', position: 'absolute', left: '-256px', top: '-256px' }} /><div style={{ width: 256, height: 256, overflow: 'hidden', position: 'absolute', left: 0, top: '-256px' }} /><div style={{ width: 256, height: 256, overflow: 'hidden', position: 'absolute', left: 256, top: '-256px' }} /><div style={{ width: 256, height: 256, overflow: 'hidden', position: 'absolute', left: 256, top: 0 }} /><div style={{ width: 256, height: 256, overflow: 'hidden', position: 'absolute', left: 256, top: 256 }} /><div style={{ width: 256, height: 256, overflow: 'hidden', position: 'absolute', left: 0, top: 256 }} /><div style={{ width: 256, height: 256, overflow: 'hidden', position: 'absolute', left: '-256px', top: 256 }} /></div></div></div><div style={{ position: 'absolute', left: 0, top: 0, zIndex: 0 }}><div style={{ position: 'absolute', zIndex: 993, transform: 'matrix(1, 0, 0, 1, -181, -34)' }}><div style={{ position: 'absolute', left: '-256px', top: '-256px', width: 256, height: 256, transition: 'opacity 200ms linear 0s' }}><img draggable="false" alt role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i7!2i36!3i47!4i256!2m3!1e0!2sm!3i521238568!2m3!1e2!6m1!3e5!3m17!2svi-VN!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&token=100206" style={{ width: 256, height: 256, userSelect: 'none', border: 0, padding: 0, margin: 0, maxWidth: 'none' }} /></div><div style={{ position: 'absolute', left: 0, top: '-256px', width: 256, height: 256, transition: 'opacity 200ms linear 0s' }}><img draggable="false" alt role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i7!2i37!3i47!4i256!2m3!1e0!2sm!3i521238568!2m3!1e2!6m1!3e5!3m17!2svi-VN!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&token=65763" style={{ width: 256, height: 256, userSelect: 'none', border: 0, padding: 0, margin: 0, maxWidth: 'none' }} /></div><div style={{ position: 'absolute', left: 256, top: 0, width: 256, height: 256, transition: 'opacity 200ms linear 0s' }}><img draggable="false" alt role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i7!2i38!3i48!4i256!2m3!1e0!2sm!3i521238568!2m3!1e2!6m1!3e5!3m17!2svi-VN!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&token=1092" style={{ width: 256, height: 256, userSelect: 'none', border: 0, padding: 0, margin: 0, maxWidth: 'none' }} /></div><div style={{ position: 'absolute', left: 256, top: '-256px', width: 256, height: 256, transition: 'opacity 200ms linear 0s' }}><img draggable="false" alt role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i7!2i38!3i47!4i256!2m3!1e0!2sm!3i521238568!2m3!1e2!6m1!3e5!3m17!2svi-VN!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&token=31320" style={{ width: 256, height: 256, userSelect: 'none', border: 0, padding: 0, margin: 0, maxWidth: 'none' }} /></div><div style={{ position: 'absolute', left: 0, top: 256, width: 256, height: 256, transition: 'opacity 200ms linear 0s' }}><img draggable="false" alt role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i7!2i37!3i49!4i256!2m3!1e0!2sm!3i521238568!2m3!1e2!6m1!3e5!3m17!2svi-VN!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&token=5307" style={{ width: 256, height: 256, userSelect: 'none', border: 0, padding: 0, margin: 0, maxWidth: 'none' }} /></div><div style={{ position: 'absolute', left: 256, top: 256, width: 256, height: 256, transition: 'opacity 200ms linear 0s' }}><img draggable="false" alt role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i7!2i38!3i49!4i256!2m3!1e0!2sm!3i521238568!2m3!1e2!6m1!3e5!3m17!2svi-VN!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&token=101935" style={{ width: 256, height: 256, userSelect: 'none', border: 0, padding: 0, margin: 0, maxWidth: 'none' }} /></div><div style={{ position: 'absolute', left: '-256px', top: 256, width: 256, height: 256, transition: 'opacity 200ms linear 0s' }}><img draggable="false" alt role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i7!2i36!3i49!4i256!2m3!1e0!2sm!3i521238568!2m3!1e2!6m1!3e5!3m17!2svi-VN!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&token=39750" style={{ width: 256, height: 256, userSelect: 'none', border: 0, padding: 0, margin: 0, maxWidth: 'none' }} /></div><div style={{ position: 'absolute', left: 0, top: 0, width: 256, height: 256, transition: 'opacity 200ms linear 0s' }}><img draggable="false" alt role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i7!2i37!3i48!4i256!2m3!1e0!2sm!3i521238568!2m3!1e2!6m1!3e5!3m17!2svi-VN!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&token=35535" style={{ width: 256, height: 256, userSelect: 'none', border: 0, padding: 0, margin: 0, maxWidth: 'none' }} /></div><div style={{ position: 'absolute', left: '-256px', top: 0, width: 256, height: 256, transition: 'opacity 200ms linear 0s' }}><img draggable="false" alt role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i7!2i36!3i48!4i256!2m3!1e0!2sm!3i521238568!2m3!1e2!6m1!3e5!3m17!2svi-VN!3sUS!5e18!12m4!1e68!2m2!1sset!2sRoadmap!12m3!1e37!2m1!1ssmartmaps!12m4!1e26!2m2!1sstyles!2zcC5zOi02MHxwLmw6LTYw!4e0&key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&token=69978" style={{ width: 256, height: 256, userSelect: 'none', border: 0, padding: 0, margin: 0, maxWidth: 'none' }} /></div></div></div></div><div className="gm-style-pbc" style={{ zIndex: 2, position: 'absolute', height: '100%', width: '100%', padding: 0, borderWidth: 0, margin: 0, left: 0, top: 0, opacity: 0 }}><p className="gm-style-pbt" /></div><div style={{ zIndex: 3, position: 'absolute', height: '100%', width: '100%', padding: 0, borderWidth: 0, margin: 0, left: 0, top: 0, touchAction: 'pan-x pan-y' }}><div style={{ zIndex: 4, position: 'absolute', left: '50%', top: '50%', width: '100%', transform: 'translate(0px, 0px)' }}><div style={{ position: 'absolute', left: 0, top: 0, zIndex: 104, width: '100%' }} /><div style={{ position: 'absolute', left: 0, top: 0, zIndex: 105, width: '100%' }} /><div style={{ position: 'absolute', left: 0, top: 0, zIndex: 106, width: '100%' }} /><div style={{ position: 'absolute', left: 0, top: 0, zIndex: 107, width: '100%' }} /></div></div></div><iframe aria-hidden="true" frameBorder={0} tabIndex={-1} style={{ zIndex: -1, position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none' }} /><div style={{ marginLeft: 5, marginRight: 5, zIndex: 1000000, position: 'absolute', left: 0, bottom: 0 }}><a target="_blank" rel="noopener" href="https://maps.google.com/maps?ll=40.69847,-73.951442&z=7&t=m&hl=vi-VN&gl=US&mapclient=apiv3" title="Mở khu vực này trong Google Maps (mở cửa sổ mới)" style={{ position: 'static', overflow: 'visible', float: 'none', display: 'inline' }}><div style={{ width: 66, height: 26, cursor: 'pointer' }}><img alt src="https://maps.gstatic.com/mapfiles/api-3/images/google_white5.png" draggable="false" style={{ position: 'absolute', left: 0, top: 0, width: 66, height: 26, userSelect: 'none', border: 0, padding: 0, margin: 0 }} /></div></a></div><div style={{ backgroundColor: 'white', padding: '15px 21px', border: '1px solid rgb(171, 171, 171)', fontFamily: 'Roboto, Arial, sans-serif', color: 'rgb(34, 34, 34)', boxSizing: 'border-box', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 16px', zIndex: 10000002, display: 'none', width: 300, height: 180, position: 'absolute', left: 120, top: 186 }}><div style={{ padding: '0px 0px 10px', fontSize: 16, boxSizing: 'border-box' }}>Dữ liệu Bản đồ</div><div style={{ fontSize: 13 }}>Dữ liệu bản đồ ©2020 Google</div><button draggable="false" title="Đóng" aria-label="Đóng" type="button" className="gm-ui-hover-effect" style={{ background: 'none', display: 'block', border: 0, margin: 0, padding: 0, position: 'absolute', cursor: 'pointer', userSelect: 'none', top: 0, right: 0, width: 37, height: 37 }}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23000000%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M19%206.41L17.59%205%2012%2010.59%206.41%205%205%206.41%2010.59%2012%205%2017.59%206.41%2019%2012%2013.41%2017.59%2019%2019%2017.59%2013.41%2012z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{ pointerEvents: 'none', display: 'block', width: 13, height: 13, margin: 12 }} /></button></div><div className="gmnoprint" style={{ zIndex: 1000001, position: 'absolute', right: 100, bottom: 0, width: 143 }}><div draggable="false" className="gm-style-cc" style={{ userSelect: 'none', height: 14, lineHeight: 14 }}><div style={{ opacity: '0.7', width: '100%', height: '100%', position: 'absolute' }}><div style={{ width: 1 }} /><div style={{ backgroundColor: 'rgb(245, 245, 245)', width: 'auto', height: '100%', marginLeft: 1 }} /></div><div style={{ position: 'relative', paddingRight: 6, paddingLeft: 6, boxSizing: 'border-box', fontFamily: 'Roboto, Arial, sans-serif', fontSize: 10, color: 'rgb(68, 68, 68)', whiteSpace: 'nowrap', direction: 'ltr', textAlign: 'right', verticalAlign: 'middle', display: 'inline-block' }}><a style={{ textDecoration: 'none', cursor: 'pointer', display: 'none' }}>Dữ liệu Bản đồ</a><span>Dữ liệu bản đồ ©2020 Google</span></div></div></div><div className="gmnoscreen" style={{ position: 'absolute', right: 0, bottom: 0 }}><div style={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: 11, color: 'rgb(68, 68, 68)', direction: 'ltr', textAlign: 'right', backgroundColor: 'rgb(245, 245, 245)' }}>Dữ liệu bản đồ ©2020 Google</div></div><div className="gmnoprint gm-style-cc" draggable="false" style={{ zIndex: 1000001, userSelect: 'none', height: 14, lineHeight: 14, position: 'absolute', right: 0, bottom: 0 }}><div style={{ opacity: '0.7', width: '100%', height: '100%', position: 'absolute' }}><div style={{ width: 1 }} /><div style={{ backgroundColor: 'rgb(245, 245, 245)', width: 'auto', height: '100%', marginLeft: 1 }} /></div><div style={{ position: 'relative', paddingRight: 6, paddingLeft: 6, boxSizing: 'border-box', fontFamily: 'Roboto, Arial, sans-serif', fontSize: 10, color: 'rgb(68, 68, 68)', whiteSpace: 'nowrap', direction: 'ltr', textAlign: 'right', verticalAlign: 'middle', display: 'inline-block' }}><a href="https://www.google.com/intl/vi-VN_US/help/terms_maps.html" target="_blank" rel="noopener" style={{ textDecoration: 'none', cursor: 'pointer', color: 'rgb(68, 68, 68)' }}>Điều khoản sử dụng</a></div></div><button draggable="false" title="Chuyển đổi chế độ xem toàn màn hình" aria-label="Chuyển đổi chế độ xem toàn màn hình" type="button" className="gm-control-active gm-fullscreen-control" style={{ background: 'none rgb(255, 255, 255)', border: 0, margin: 10, padding: 0, position: 'absolute', cursor: 'pointer', userSelect: 'none', borderRadius: 2, height: 40, width: 40, boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px -1px', overflow: 'hidden', top: 0, right: 0 }}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%20018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{ height: 18, width: 18 }} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{ height: 18, width: 18 }} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{ height: 18, width: 18 }} /></button><div draggable="false" className="gm-style-cc" style={{ userSelect: 'none', height: 14, lineHeight: 14, display: 'none', position: 'absolute', right: 0, bottom: 0 }}><div style={{ opacity: '0.7', width: '100%', height: '100%', position: 'absolute' }}><div style={{ width: 1 }} /><div style={{ backgroundColor: 'rgb(245, 245, 245)', width: 'auto', height: '100%', marginLeft: 1 }} /></div><div style={{ position: 'relative', paddingRight: 6, paddingLeft: 6, boxSizing: 'border-box', fontFamily: 'Roboto, Arial, sans-serif', fontSize: 10, color: 'rgb(68, 68, 68)', whiteSpace: 'nowrap', direction: 'ltr', textAlign: 'right', verticalAlign: 'middle', display: 'inline-block' }}><a target="_blank" rel="noopener" title="Báo cáo lỗi trong bản đồ đường hoặc hình ảnh đến Google" href="https://www.google.com/maps/@40.6984703,-73.9514422,7z/data=!10m1!1e1!12b1?source=apiv3&rapsrc=apiv3" style={{ fontFamily: 'Roboto, Arial, sans-serif', fontSize: 10, color: 'rgb(68, 68, 68)', textDecoration: 'none', position: 'relative' }}>Báo cáo một lỗi bản đồ</a></div></div><div className="gmnoprint gm-bundled-control gm-bundled-control-on-bottom" draggable="false" controlwidth={40} controlheight={81} style={{ margin: 10, userSelect: 'none', position: 'absolute', bottom: 95, right: 40 }}><div className="gmnoprint" controlwidth={40} controlheight={81} style={{ position: 'absolute', left: 0, top: 0 }}><div draggable="false" style={{ userSelect: 'none', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px -1px', borderRadius: 2, cursor: 'pointer', backgroundColor: 'rgb(255, 255, 255)', width: 40, height: 81 }}><button draggable="false" title="Phóng to" aria-label="Phóng to" type="button" className="gm-control-active" style={{ background: 'none', display: 'block', border: 0, margin: 0, padding: 0, position: 'relative', cursor: 'pointer', userSelect: 'none', overflow: 'hidden', width: 40, height: 40, top: 0, left: 0 }}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{ height: 18, width: 18 }} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23333%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{ height: 18, width: 18 }} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23111%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{ height: 18, width: 18 }} /></button><div style={{ position: 'relative', overflow: 'hidden', width: 30, height: 1, margin: '0px 5px', backgroundColor: 'rgb(230, 230, 230)', top: 0 }} /><button draggable="false" title="Thu nhỏ" aria-label="Thu nhỏ" type="button" className="gm-control-active" style={{ background: 'none', display: 'block', border: 0, margin: 0, padding: 0, position: 'relative', cursor: 'pointer', userSelect: 'none', overflow: 'hidden', width: 40, height: 40, top: 0, left: 0 }}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{ height: 18, width: 18 }} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{ height: 18, width: 18 }} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{ height: 18, width: 18 }} /></button></div></div><div className="gmnoprint" controlwidth={40} controlheight={40} style={{ display: 'none', position: 'absolute' }}><div style={{ width: 40, height: 40 }}><button draggable="false" title="Xoay bản đồ 90 độ" aria-label="Xoay bản đồ 90 độ" type="button" className="gm-control-active" style={{ background: 'none rgb(255, 255, 255)', display: 'none', border: 0, margin: '0px 0px 32px', padding: 0, position: 'relative', cursor: 'pointer', userSelect: 'none', width: 40, height: 40, top: 0, left: 0, overflow: 'hidden', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px -1px', borderRadius: 2 }}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{ height: 18, width: 18 }} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{ height: 18, width: 18 }} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{ height: 18, width: 18 }} /></button><button draggable="false" title="Nghiêng bản đồ" aria-label="Nghiêng bản đồ" type="button" className="gm-tilt gm-control-active" style={{ background: 'none rgb(255, 255, 255)', display: 'block', border: 0, margin: 0, padding: 0, position: 'relative', cursor: 'pointer', userSelect: 'none', width: 40, height: 40, top: 0, left: 0, overflow: 'hidden', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px -1px', borderRadius: 2 }}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{ width: 18 }} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{ width: 18 }} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{ width: 18 }} /></button></div></div></div></div></div><div style={{ backgroundColor: 'white', fontWeight: 500, fontFamily: 'Roboto, sans-serif', padding: '15px 25px', boxSizing: 'border-box', top: 5, border: '1px solid rgba(0, 0, 0, 0.12)', borderRadius: 5, left: '50%', maxWidth: 375, position: 'absolute', transform: 'translateX(-50%)', width: 'calc(100% - 10px)', zIndex: 1 }}><div><img alt src="https://maps.gstatic.com/mapfiles/api-3/images/google_gray.svg" draggable="false" style={{ padding: 0, margin: 0, border: 0, height: 17, verticalAlign: 'middle', width: 52, userSelect: 'none' }} /></div><div style={{ lineHeight: 20, margin: '15px 0px' }}><span style={{ color: 'rgba(0, 0, 0, 0.87)', fontSize: 14 }}>Trang này không thể tải Google Maps đúng cách.</span></div><table style={{ width: '100%' }}><tbody><tr><td style={{ lineHeight: 16, verticalAlign: 'middle' }}><a href="https://developers.google.com/maps/documentation/javascript/error-messages?utm_source=maps_js&utm_medium=degraded&utm_campaign=billing#api-key-and-billing-errors" target="_blank" rel="noopener" style={{ color: 'rgba(0, 0, 0, 0.54)', fontSize: 12 }}>Bạn có sở hữu trang web này không?</a></td><td style={{ textAlign: 'right' }}><button className="dismissButton">OK</button></td></tr></tbody></table></div></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-gallery ftco-section ftco-no-pb">
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

Contact.propTypes = {

}

export default Contact
