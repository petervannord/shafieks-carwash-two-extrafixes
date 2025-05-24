"use client";

import React, { useState, useEffect, useRef } from "react";

import AboutImage3 from "../assets/images/else5.jpg";
import AboutImage4 from "../assets/images/else3.jpg";
import AboutImage5 from "../assets/images/else2.jpg";

import AboutImage6 from "../assets/images/else.jpg";

import { FaRegCircleCheck } from "react-icons/fa6";
import Image from "next/image";
import "../styles/about.scss";
import Head from "next/head";

const images = [AboutImage6, AboutImage3, AboutImage4, AboutImage5];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);

  // Automatically change image every 3 seconds if autoplay is enabled
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Observe if the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleImageSelect = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false); // Stop autoplay when user selects an image
  };

  return (
    <section
      ref={sectionRef}
      className={`about max-width ${isVisible ? "in-view" : ""}`}
      id="about"
    >
      <Head>
        <title>About Our Services</title>
        <meta
          name="description"
          content="Experience top-notch car detailing with NEXGEN Auto Detail located in Howland & Warren, Ohio. We ensure your vehicle shines like new."
        />
      </Head>
      <div className="about-left">
        <div className="main-image">
          <Image src={images[currentIndex]} alt="about" />
        </div>
        <div className="image-thumbnails">
          {images.map((img, index) => (
            <button
              key={index}
              className={`thumbnail-btn ${
                currentIndex === index ? "active" : ""
              }`}
              onClick={() => handleImageSelect(index)}
              title={`Thumbnail for image ${index + 1}`} // Added title for accessibility
            >
              <Image src={img} alt={`thumbnail-${index}`} />
            </button>
          ))}
        </div>
      </div>
      <div className="about-right">
        <div className="about-text">
          <div className="text-head">
            <h3>About Us</h3>
            <h2>Car Washing And Detailing</h2>
            <p>
              - Maintenance package recommended, must receive full makeover
              prior then maintain that look all year round. - Discover the
              pinnacle of automotive care at NexGen Auto Detailing, the premier
              auto detailing service in Howland, Ohio. With an unwavering
              commitment to perfection, NexGen Auto Detailing sets the standard
              for meticulous craftsmanship and unparalleled customer service.
            </p>
          </div>
          <div className="list">
            <p style={{ color: "white" }}>
              <FaRegCircleCheck color="#E81C2E" />
              &nbsp; - Hassle free, either drop off or I'll come to you instead!
            </p>
            <p style={{ color: "white" }}>
              <FaRegCircleCheck color="#E81C2E" />
              &nbsp; - Just book a slot, clear out most items and leave the rest
              to me!
            </p>
            {/* <p style={{ color: "white" }}>
              <FaRegCircleCheck color="#E81C2E" />
              &nbsp;
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
