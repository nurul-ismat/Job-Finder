import React from 'react';


const Blog = () => {
    
    return (
        <div className="card card-compact bg-base-100 rounded-none hover:-translate-y-3 duration-700 ease-in-out">
            <figure><img src="https://apiabroad.com/wp-content/uploads/2022/06/Tamaras-Experience-in-Spain-Blog-300x250.png" alt="" /></figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    <p>Tamara Anderson</p>
                    <p>June 14 2022</p>
                </div>
                <h2 className="card-title">TAMARA’S EXPERIENCE IN SPAIN</h2>
                <p>Meet Tamara Anderson, an API Alum who majored in Marketing at Concordia University in St. Paul,..</p>
                <div className="card-actions justify-start">
                    <a href="https://apiabroad.com/tamaras-experience-in-spain/" className="text-primary text-xl">Read more...</a>
                </div>
            </div>
        </div>
    );
};

export default Blog;