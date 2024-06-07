"use client"
import React, { useState, useRef, useEffect } from 'react';
import styles from "./right-main-body.module.css";
import Slider from 'react-slick';
const images = [
    'https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1461264/pexels-photo-1461264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/433989/pexels-photo-433989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/804605/pexels-photo-804605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1858115/pexels-photo-1858115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];
export default function RightBody() {
    // const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    //   const handleImageClick = (index: number) => {
    //     setZoomedIndex(index === zoomedIndex ? null : index);
    //   };
      return (
        <div className={styles.carouselContainer}>
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div key={index} className={styles.carouselItem}>
                    <img src={src} alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
      );
}

