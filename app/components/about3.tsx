"use client";

import React from "react";
import { reviews as staticReviews } from "../data";
import "../styles/Reviews.scss";

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import { supabase } from "../../supabaseClient"; // Your Supabase client (using env variables)

export default function Reviews() {
  return (
    <section className="reviews max-width" id="reviews">
      <h3 className="bar">What Our Customers Say</h3>
      <h2>Real Reviews from Real Clients</h2>
    </section>
  );
}
