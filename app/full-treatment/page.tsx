// pages/full-treatments.js
import React from "react";
import "../styles/full-treatment.scss";
import Navv from "../components/Navv";
import Footer from "../components/Footer";
import Head from "next/head";
const FullTreatments = () => {
  return (
    <>
      {/* <Nav2 /> */}
      <Head>
        <title>Full Treatments | NEXGEN Auto Detail</title>
        <meta
          name="description"
          content="Explore our premium full detailing services at NEXGEN Auto Detail in Howland & Warren, Ohio. Get a showroom shine for your vehicle with our expert detailing services."
        />
        <meta
          property="og:title"
          content="Full Treatments | NEXGEN Auto Detail"
        />
        <meta
          property="og:description"
          content="Explore our premium full detailing services at NEXGEN Auto Detail in Howland & Warren, Ohio. Get a showroom shine for your vehicle with our expert detailing services."
        />
        <meta
          property="og:url"
          content="https://www.nexgenautodetail.com/full-treatments"
        />
        <meta property="og:site_name" content="NEXGEN Auto Detail" />
      </Head>
      <div className="full-treatments">
        <header>
          <h1>Full Treatments</h1>
          <h4>
            Our premium full detailing services provide a complete deep clean
            for both the interior and exterior of your vehicle, restoring it to
            near-showroom condition.
          </h4>
        </header>

        <section className="treatment-card">
          <h2>Full Interior Deep Clean</h2>
          <p>
            A meticulous deep clean that eliminates dirt, stains, and odors,
            leaving your cabin refreshed.
          </p>
          <ul>
            <li>Intensive plastic and steam cleaning</li>
            <li>Leather, plastic, and vinyl protection treatment</li>
            <li>Professional shampooing of seats & carpet</li>
            <li>Gentle headliner cleaning</li>
            <li>Complete germ and odor elimination</li>
            <li>Crystal-clear window cleaning</li>
          </ul>
          <p>
            <strong>Pricing:</strong> Small - $175 | Midsize - $200 | Large -
            $225
          </p>
        </section>

        <section className="treatment-card">
          <h2>Full Exterior Detail</h2>
          <p>
            We go beyond the standard wash to provide a deep, lasting clean that
            enhances your vehicle's protection and shine.
          </p>
          <ul>
            <li>Thorough hand wash with premium solutions</li>
            <li>Deep wheel and tire cleaning</li>
            <li>Bug and road debris removal</li>
            <li>Iron decontamination treatment</li>
            <li>Clay bar treatment for a smooth finish</li>

            <li>Sealant wax for 3-month protection</li>
            <li>Trim restoration to revive faded plastics</li>
            <li>Final tire shine & window cleaning</li>
          </ul>
          <p>
            <strong>Pricing:</strong> Small - $150 | Midsize - $175 | Large -
            $200
          </p>
        </section>

        <Navv />
        <footer>
          <h4>
            Looking for
            <a href="/#pricing"> routine maintenance</a>? Try our{" "}
            <a href="/standard-treatment">Standard Treatments</a>!
          </h4>
        </footer>
      </div>
      <Footer />
    </>
  );
};

export default FullTreatments;
