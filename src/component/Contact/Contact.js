import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div>
            <div className="header">
                <h1>Contact us</h1>
            </div>
            <div className="contact-container">
        <section id="contact">
            <div className="container bg-light p-5">
                <p className="text-center w-75 m-auto">Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.</p>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3 my-5">
                        <div className="card border-0">
                            <div className="card-body text-center">
                                <i className="fa fa-phone fa-5x mb-3" aria-hidden="true"></i>
                                <h4 className="text-uppercase mb-5">call us</h4>
                                <p>+8801850314709</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 my-5">
                        <div className="card border-0">
                            <div className="card-body text-center">
                                <i className="fa fa-map-marker fa-5x mb-3" aria-hidden="true"></i>
                                <h4 className="text-uppercase mb-5">office loaction</h4>
                                <address>Satkania Chittagong </address>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 my-5">
                        <div className="card border-0">
                            <div className="card-body text-center">
                                <i className="fa fa-map-marker fa-5x mb-3" aria-hidden="true"></i>
                                <h4 className="text-uppercase mb-5">office loaction</h4>
                                <address>Satkania Chittagong </address>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 my-5">
                        <div className="card border-0">
                            <div className="card-body text-center">
                                <i className="fa fa-globe fa-5x mb-3" aria-hidden="true"></i>
                                <h4 className="text-uppercase mb-5">email</h4>
                                <p>brandshowkatul2@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </div>
        </div>
    );
};

export default Contact;