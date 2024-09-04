import React from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  return (
    <div id='Service' className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="services-container">
            {Services_Data.map(({s_no,s_name,s_desc},index)=>{
                return <div key={index} className='services_format'>
                    <h3>{s_no}</h3>
                    <h2>{s_name}</h2>
                    <p>{s_desc}</p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="" />
                    </div>

                </div>

            })}


        </div>
      
    </div>
  )
}

export default Services
