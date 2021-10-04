import React from 'react';
import Course from '../../hooks/LoadData';
import Service from '../service/Service';
import './Home.css'

const Home = () => {
    const [courses] = Course([])
    return (
        <div>
            <div classNameName="container">
                <div className="caro-container">
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/thumbnail/lead/news/6789545_New%20Project(1).jpg" className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://d1v9pyzt136u2g.cloudfront.net/blog/wp-content/uploads/2021/09/08022737/digital-marketing-trends-2021-digital-marketing.png" className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://cdn4.vectorstock.com/i/1000x1000/46/73/e-learning-education-online-and-university-banner-vector-19934673.jpg" className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="course-container">
                    {
                        courses.slice(0, 3).map(course => <Service key={course.id} course={course}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;