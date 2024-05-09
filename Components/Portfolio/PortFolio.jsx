import React from 'react';
import './Postfolio.css';
import "swiper/css";
import FlipCard from '../FlipCard/FlipCard';
import pizza from '../../img/pizza-frontpage.png'
import ecommerce from '../../img/ecommerce.png'


const PortFolio = () => {
  return (
    <div className="portfolio" id="PortFolio">
      <span>Recent Projects</span>
      <span>Portfolio</span>
      <div className='projects'>
        <FlipCard title="Metro-Ticket-Booking-Application" imagesrc="https://cdn.dribbble.com/userupload/11047682/file/original-b26aeaa98634e2ee598692201aaf3afa.jpg?resize=1024x732" description="Developed backend APIs using Spring Boot, ensuring security with Spring Security and JWT" />

        <FlipCard title="Pizza-Order-Application" imagesrc={pizza} description="full-stack app with Spring Boot APIs and React.js front end styled with Tailwind CSS for seamless user experience" />
        
        <FlipCard title="Ecommerce-Application" imagesrc={ecommerce} description="Secure full-stack application with Spring Boot APIs, fortified by Spring Security and JWT, complemented by a React.js front end styled with Tailwind CSS" />
      </div>
    </div>
  );
};

export default PortFolio;
