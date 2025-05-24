"use client";

import { FaLocationDot } from "react-icons/fa6";
import React from "react";
import "../styles/Contact.scss";
import Head from "next/head";

export default function Contact() {
  return (
    <section className="contact max-width" id="contact">
      <Head>
        <title>Contact Us | NEXGEN Auto Detail</title>
        <meta
          name="description"
          content="Get in touch with NEXGEN Auto Detail in Howland & Warren, Ohio for all your car detailing needs. Contact us for a showroom shine for your vehicle."
        />
      </Head>
      <div className="contact-body">
        <h3 className="bar">Washing Location</h3>
        <h2>Serving Trumbull & Mahoning Counties</h2>
        <div className="locate">
          <FaLocationDot size={30} color="#E81C2E" />
          <div className="locate-details">
            <h4>NEXGEN Auto-Detail & Car Care</h4>
            <a
              href="https://www.google.com/maps/place/Trumbull+County,+OH"
              target="_blank"
              rel="noopener noreferrer"
            >
              Covering Howland, Warren, Boardman & Canfield Areas
            </a>
            <p>
              <strong>Call:</strong>{" "}
              <a href="tel:+13309848257">+1 (330) 984-8257</a>
            </p>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38806.79340253206!2d-80.85!3d41.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8833e0f3f4e1c0a5%3A0x3e9aad121d7e3e6a!2sTrumbull+County,+OH!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
