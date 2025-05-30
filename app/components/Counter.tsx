"use client";

import CountUp from "react-countup";
import { Counts } from "../data";
import "../styles/Counter.scss";
import React from "react";
import Head from "next/head";

export default function Counter() {
  return (
    <section className="counter">
      <Head>
        <title>Car Detailing Statistics | NEXGEN Auto Detail</title>
        <meta
          name="description"
          content="Explore the impressive statistics of NEXGEN Auto Detail, a leading car detailing service provider in Howland & Warren, Ohio."
        />
        <meta
          property="og:title"
          content="Car Detailing Statistics | NEXGEN Auto Detail"
        />
        <meta
          property="og:description"
          content="Explore the impressive statistics of NEXGEN Auto Detail, a leading car detailing service provider in Howland & Warren, Ohio."
        />
        <meta
          property="og:url"
          content="https://www.nexgenautodetail.com/#counter"
        />
        <meta property="og:site_name" content="NEXGEN Auto Detail" />
      </Head>
      <div className="counting max-width">
        {Counts.counts.map((item) => {
          return (
            <div className="counters" key={item.id}>
              <div className="counter-body">
                <item.icon size={50} color="#E81C2E" />
                <h1>
                  <CountUp
                    enableScrollSpy
                    duration={2}
                    end={Number(item.number)}
                  />
                </h1>
              </div>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
