// app/page.tsx
"use client";

import ScrollToTop from "react-scroll-to-top";
import { useState } from "react";
import WhatWeDo from "./components/WhatWeDo";
import Counter from "./components/Counter";
import Contact from "./components/Contact";
import Reviews from "./components/Reviews";
import Header from "./components/Header";
import Extras from "./components/Extras";
import Footer from "./components/Footer";
import About from "./components/About";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Pricing from "./components/Pricing";
import BookingForm from "./components/BookingForm";
import About2 from "./components/about2";
import About3 from "./components/about3";
// Import your CSS file where you'll style the button (create this next)
import "../app/styles/Home.scss"; // Or your global styles if you prefer
import ComparisonSlider from "../app/components/ComparisonSlider";

export default function Home() {
  const [openBooking, setOpenBooking] = useState<boolean>(false); // You might need to manage modal state here now

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoDetailingShop",
            name: "NEXGEN Auto Detail",
            image: "https://www.nexgenautodetail.com/logo.png",
            "@id": "https://www.nexgenautodetail.com",
            url: "https://www.nexgenautodetail.com",
            description:
              "Professional auto detailing services in Trumbull County, Canfield & Surrounding Area.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "redacted!",
              addressLocality: "Howland",
              addressRegion: "OH",
              postalCode: "44484",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "41.2376",
              longitude: "-80.8184",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
            ],
            priceRange: "$$",
            telephone: "+1-330-984-8257",
            sameAs: [
              "https://www.facebook.com/nexgenautodetail",
              "https://www.instagram.com/nexgenautodetail",
            ],
            serviceType: [
              "Interior Detailing",
              "Exterior Detailing",
              "Ceramic Coating",
              "Paint Correction",
              "Headlight Restoration",
              "Engine Bay Cleaning",
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "250",
            },
            review: [
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "John Doe",
                },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                },
                reviewBody:
                  "Amazing detailing service! My car looks brand new.",
              },
            ],
          }),
        }}
      />
      <Header />
      <Nav />
      <Hero />

      <div style={{ height: "100px" }}></div>
      <About />
      <div style={{ height: "100px", visibility: "hidden" }}></div>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-transparent rounded-lg shadow-lg">
        <About2 />
        <div style={{ height: "50px" }}></div>
        <ComparisonSlider />
      </div>

      {/* <Counter /> */}
      <div style={{ height: "100px", visibility: "hidden" }}></div>

      <main className="space-y-8">
        <div
          style={{
            minHeight: "100vh",
            background: "transparent",
            padding: "20px",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 16px",
            }}
          >
            <div
              style={{
                textAlign: "center",
                marginBottom: "40px",
                padding: "20px 0",
              }}
            ></div>
            <About3 />
            <div style={{ height: "100px", visibility: "hidden" }}></div>
            <Reviews />
          </div>
        </div>

        {/* other content here */}
      </main>
      <div style={{ height: "150px", visibility: "hidden" }}></div>

      <div style={{ height: "30px" }}></div>
      <Extras />

      <Pricing />

      {/* Mobile-Only Button Added Here */}
      <button
        onClick={() => setOpenBooking(true)}
        className="mobile-page-button"
      >
        Book Now
      </button>

      <div style={{ height: "70px" }}></div>
      <Contact />

      <Footer />
      <ScrollToTop smooth />

      {/*  Booking Modal - If you want to trigger modal from this page button, keep modal structure here or move it from Nav if needed */}
      {openBooking && (
        <div className="booking-modal" onClick={() => setOpenBooking(false)}>
          <div
            className="booking-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-modal"
              onClick={() => setOpenBooking(false)}
            >
              ×
            </button>
            <BookingForm />
          </div>
        </div>
      )}
    </>
  );
}
