import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Services = ({ servicesWork }) => {
   
    return (

        <div className='col-lg-4 mb-3'>
            <div className="card-section">
                <div className="services-container text-center">
                    <img src={servicesWork.photo} alt="" />
                </div>
                <div className="caption-post-section text-center">
                    <p> ${servicesWork.price}</p>
                    <h4>{servicesWork.title}</h4>
                    <h6>{servicesWork.description}</h6>
                </div>
                <div className="explore-more text-center">
                    <Link to={`/details/${servicesWork._id}`} ><button >Explore More</button></Link>
                </div>
            </div>
        </div>

    );
};

export default Services;