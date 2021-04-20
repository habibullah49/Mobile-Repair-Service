import React, { useEffect, useState } from 'react';
import './Services.css'
import photo from '../../../images/picture2.jpg'
import photo2 from '../../../images/picture3.jpg'
import photo3 from '../../../images/picture4.jpg'
import Services from '../Services/Services';

const Service = () => {
    const [serviceData, setServiceData] = useState([])

    const ServicesItem = [
        {
            name: 'Unlocking Mobile',
            about: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error laboriosam at a iure odio sapiente! Unde numquam enim ullam fuga odio laboriosam est, nobis corporis labore, velit quas modi deleniti!',
            price: 12,
            photo: photo,
            id: 1


        },
        {
            name: 'Water damage',
            about: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error laboriosam at a iure odio sapiente! Unde numquam enim ullam fuga odio laboriosam est, nobis corporis labore, velit quas modi deleniti!',
            price: 14,
            photo: photo2,
            id: 2


        },
        {
            name: 'wifi problem',
            about: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error laboriosam at a iure odio sapiente! Unde numquam enim ullam fuga odio laboriosam est, nobis corporis labore, velit quas modi deleniti!',
            price: 15,
            photo: photo3,
            id: 3


        }
    ]



    fetch("https://intense-ridge-44549.herokuapp.com/service")
        .then(res => res.json())
        .then(data => setServiceData(data))

    return (
        <section className='background'>
            <div className="container">


                <div className="slider-part">
                    <div className="the-service-hading text-center py-5 ">

                        <h1> Our Awesome <span>Mobile Services</span> length : {serviceData.length}</h1>

                    </div>
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="visibility active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" className='visibility' data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" className='visibility' data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className="row">
                                    {
                                        serviceData.map(servicesWork => <Services servicesWork={servicesWork}></Services>)
                                    }
                                </div>
                            </div>
                           
                        </div>
                       
                    </div>

                   
                </div>

            </div>

        </section>
    );
};

export default Service;