import React from 'react';
import img1 from '../../../images/picture2.jpg'
import img2 from '../../../images/picture3.jpg'
import img3 from '../../../images/picture4.jpg'
import img4 from '../../../images/picture6.png'
import BlogsItem from '../BlogsItem/BlogsItem';
import './Blog.css'

const Blog = () => {
    const images = [
        {
            img: img1
        },
        {
            img: img2
        },
        {
            img: img3
        },
        {
            img: img4
        },
        
    ]
    return (
        <section className='background-for-blog-section'>
            <div className="the-service-hading text-center py-5">
                <h1>WE <span>REPAIR</span></h1>
            </div>
            <div className='container'>
                <div className="row">
                    {
                        images.map(image => <BlogsItem key={Math.random()} image={image}></BlogsItem>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;