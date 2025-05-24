"use client";

import React from "react";
import Link from "next/link";
import "../styles/Navv.scss";

export default function ReturnHome() {
  return (
    <nav id="nav">
      <div className="nav-container">
        <Link href="/#hero">
          <button className="return-home-button">Return Home</button>
        </Link>
      </div>
    </nav>
  );
}
