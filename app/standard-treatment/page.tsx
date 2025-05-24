// pages/standard-treatments.js
import React from "react";
import "../styles/standard-treatment.scss";
import Navv from "../components/Navv";
import Footer from "../components/Footer";
import Head from "next/head";
const StandardTreatments = () => {
  return (
    <>
      <Head>
        <title>Standard Treatments | NEXGEN Auto Detail</title>
        <meta
          name="description"
          content="Explore our standard car detailing packages at NEXGEN Auto Detail in Howland & Warren, Ohio. Get a professional cleaning for your vehicle without breaking the bank."
        />
        <meta
          property="og:title"
          content="Standard Treatments | NEXGEN Auto Detail"
        />
        <meta
          property="og:description"
          content="Explore our standard car detailing packages at NEXGEN Auto Detail in Howland & Warren, Ohio. Get a professional cleaning for your vehicle without breaking the bank."
        />
        <meta
          property="og:url"
          content="https://www.nexgenautodetail.com/standard-treatments"
        />
        <meta property="og:site_name" content="NEXGEN Auto Detail" />
      </Head>

      <div className="standard-treatments">
        <header>
          <h1>Standard Treatments</h1>
          <h5>
            Our standard car detailing packages offer professional cleaning to
            keep your car looking fresh and well-maintained without breaking the
            bank.
          </h5>
        </header>

        <section className="treatment-card">
          <h2>Standard Interior Cleaning</h2>
          <p>
            A perfect balance of cleanliness and care for your vehicle’s
            interior.
          </p>
          <ul>
            <li>Thorough wipe-down of all surfaces</li>
            <li>Detailed dusting & vacuuming</li>
            <li>Streak-free window cleaning</li>
          </ul>
          <p>
            <strong>Pricing:</strong> Small - $100 | Midsize - $120 | Large -
            $150
          </p>
        </section>

        <section className="treatment-card">
          <h2>Standard Exterior Cleaning</h2>
          <p>
            Preserve the shine and finish of your car with our careful hand-wash
            and detailing service.
          </p>
          <ul>
            <li>Gentle hand wash with premium products</li>
            <li>Wheel and tire cleaning</li>
            <li>Bug and debris removal</li>
            <li>Spray wax application for added shine</li>
            <li>Window cleaning & tire shine</li>
          </ul>
          <p>
            <strong>Pricing:</strong> Small - $50 | Midsize - $65 | Large - $80
          </p>
        </section>

        <Navv />
        <footer>
          <p>
            Want a more extensive detailing experience? Check out our{" "}
            <a href="/full-treatment">Full Treatments</a>!
          </p>
        </footer>
      </div>
      <div style={{ height: "150px" }}></div>
      <Footer />
    </>
  );
};

export default StandardTreatments;
