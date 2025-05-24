import "../styles/Extras.scss";
import React from "react";
import Head from "next/head";

export default function Extras() {
  return (
    <section className="extras max-width" id="extras">
      <Head>
        <title>Extras | NEXGEN Auto Detail</title>
        <meta
          name="description"
          content="Explore the additional services offered by NEXGEN Auto Detail in Howland & Warren, Ohio, enhancing your car detailing experience."
        />
        <meta
          property="og:title"
          content="Service Booking | NEXGEN Auto Detail"
        />
        <meta
          property="og:description"
          content="Schedule a car detailing service with NEXGEN Auto Detail in Howland & Warren, Ohio. Get a showroom shine for your vehicle with our expert detailing services."
        />
        <meta
          property="og:url"
          content="https://www.nexgenautodetail.com/#extras"
        />
        <meta property="og:site_name" content="NEXGEN Auto Detail" />
      </Head>
      <h3 className="bar">Car Detailing Services</h3>
      <h2>Mobile Car Detailing</h2>
      <div className="grid">
        <div className="grid-2">
          <h2></h2>
          <div>
            <p>
              <strong>Detailing Every Nook and Cranny: </strong> No detail is
              too small for us. we meticulously clean hard-to-reach areas, such
              as air vents and every single crevice, ensuring a thorough and
              complete transformation of your vehicle
            </p>
          </div>
          <div>
            <p>
              <strong> Washing:</strong> The exterior is thoroughly washed using
              a gentle automotive shampoo or soap to remove dirt, grime, and
              other contaminants. Special attention is paid to areas like the
              grille, wheels, tires.
            </p>
          </div>
          <div>
            <p>
              <strong> Waxing:</strong> Once the paint surface is cleaned and
              corrected, it is protected using a sealant or wax. Wax/Paint
              Protection adds depth and warmth to the paint finish with a
              long-lasting protection against environmental contaminants and UV
              rays.
            </p>
          </div>

          <div style={{ height: "50px", visibility: "hidden" }}></div>

          <h2 style={{ color: "var(--blue)" }}>Why Get Your Car Detailed?</h2>

          <div>
            <p>
              <strong>Enhanced Comfort:</strong> Revel in the comfort of a
              meticulously cleaned and refreshed interior.
            </p>
          </div>
          <div>
            <p>
              <strong>Preserved Resale Value: </strong> Regular
              detailing/disaster cleaning contributes to maintaining your
              vehicle's resale value by keeping it in optimal condition.
            </p>
          </div>
          <div>
            <p>
              <strong>Driving Pleasure:</strong> A clean and organized interior
              enhances the overall driving experience, making every journey a
              delight
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
