"use client";

import { FaPhoneAlt, FaRegClock } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import "../styles/Header.scss";
import React from "react";

export default function Header() {
  return (
    <header className="max-width">
      <div className="header-left">
        <h1>
          NEXGEN <span>Auto-Detail</span>
        </h1>
      </div>

      <div className="header-right">
        <div className="icon-container">
          <div className="icon">
            <FaRegClock size={20} color="#FFF" />
          </div>
          <div>
            <p>Opening Hours</p>
            <p>Book With Me Anytime!</p>
          </div>
        </div>
        <div className="icon-container">
          <div className="icon">
            <FaPhoneAlt size={20} color="#FFF" />
          </div>
          <div>
            <p>Call Me</p>
            <p>
              <a href="tel:+13309848257">+1 (330)-984-8257 </a>
            </p>
          </div>
        </div>
        <div className="icon-container">
          <div className="icon">
            <MdOutlineEmail size={20} color="#FFF" />
          </div>
          <div>
            <p>Email Me</p>
            <p>
              <a href="mailto:nexgenautodetail330@gmail.com" target="_blank">
                nexgenautodetail330@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
