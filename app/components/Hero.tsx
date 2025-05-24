"use client";

import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { headerImages } from "../data";
import Image from "next/image";
import "../styles/hero.scss";

interface Settings {
  dots: boolean;
  infinite: boolean;
  arrows: boolean;
  speed: number;
  autoplaySpeed: number;
  autoplay: boolean;
  slidesToShow: number;
  slidesToScroll: number;
}

export default function Hero() {
  const [heroText, setHeroText] = useState("");

  // Slick slider settings
  const settings: Settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 1000,
    autoplaySpeed: 3000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const nav = document.getElementById("nav");
    const hero = document.getElementById("hero");

    function scrollFunction() {
      if (window.innerWidth > 1024) {
        // Ensure smooth transition of marginTop when scrolling up
        if (document.documentElement.scrollTop < 80) {
          if (nav) nav.classList.remove("fixed-nav");
          if (hero) {
            hero.style.transition = "margin-top 0.3s ease-out"; // Smooth transition
            hero.style.marginTop = "0";
          }
        } else {
          if (nav) nav.classList.add("fixed-nav");
          if (hero) {
            hero.style.transition = "none"; // Remove transition when margin is set
            hero.style.marginTop = "78px"; // Adjust this value if needed
          }
        }
      }
    }

    function updateHeroText() {
      if (window.innerWidth <= 768) {
        setHeroText("Serving Trumbull County, car detailing near you!");
      } else {
        setHeroText(
          "Experience the best in local car detailing with NEXGEN Auto Detailing, proudly serving Trumbull County, Ohio & Surrounding Areas. We take pride in meticulously detailing your vehicle to exceed your expectations!"
        );
      }
    }

    window.addEventListener("scroll", scrollFunction);
    window.addEventListener("resize", updateHeroText);
    updateHeroText();

    return () => {
      window.removeEventListener("scroll", scrollFunction);
      window.removeEventListener("resize", updateHeroText);
    };
  }, []);

  return (
    <section
      id="hero"
      className="hero"
      aria-label="Premium Car Washing Services"
    >
      <div className="hero-body">
        <div className="hero-text">
          <h2>PREMIUM WASHING & DETAILING</h2>
          <h1 style={{ color: "var(--blue)" }}>NexGen Detailing in Howland!</h1>
          <p>{heroText}</p>
        </div>

        {/* Slick Image Slider */}
        <div className="slider-container">
          <Slider {...settings}>
            {headerImages.images.map((image) => (
              <div className="image" key={image.id}>
                <Image
                  width={1920}
                  height={1080}
                  src={image.source}
                  alt="Professional car detailing"
                  priority={true}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
