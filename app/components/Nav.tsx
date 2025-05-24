// Nav.js
"use client";

import { Squash } from "hamburger-react";
import React, { useEffect, useRef, useState } from "react";
import { navLinks } from "../data";
import "../styles/Nav.scss";
import Link from "next/link";
import BookingForm from "../components/BookingForm"; // Ensure this component exists

export default function Nav() {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [openServices, setOpenServices] = useState<boolean>(false);
  const [openBooking, setOpenBooking] = useState<boolean>(false);

  const desktopDropdownRef = useRef<HTMLLIElement>(null);
  const mobileDropdownRef = useRef<HTMLLIElement>(null);

  // Adjust hero margin based on nav state
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (hero) {
      hero.style.marginTop = openNav ? "300px" : "0px";
    }
  }, [openNav]);

  // Close dropdown when clicking outside (both desktop & mobile)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target as Node) &&
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target as Node)
      ) {
        setOpenServices(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav id="nav">
        <div className="nav-body max-width">
          <ol>
            {navLinks.links.map((item) => {
              if (item.name === "Services") {
                return (
                  <li
                    key={item.id}
                    ref={desktopDropdownRef}
                    className={`dropdown ${openServices ? "active" : ""}`}
                  >
                    <button
                      onClick={() => setOpenServices(!openServices)}
                      className="dropdown-toggle"
                    >
                      {item.name}
                    </button>
                    {openServices && (
                      <ul className="dropdown-menu">
                        <li>
                          <Link href="/standard-treatment">
                            Standard Treatment
                          </Link>
                        </li>
                        <li>
                          <Link href="/full-treatment">Full Treatment</Link>
                        </li>
                      </ul>
                    )}
                  </li>
                );
              }
              return (
                <li key={item.id}>
                  <Link key={item.id} href={item.link}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ol>
          <button onClick={() => setOpenBooking(true)}>Make a Booking</button>
        </div>
        <div className="mobile-nav">
          <p></p>
          <div>
            <Squash
              toggled={openNav}
              toggle={setOpenNav}
              size={25}
              color="#FFF"
            />
          </div>
        </div>
        <div id="openNav" className={`mobile-menu ${openNav ? "open" : ""}`}>
          <ol>
            {navLinks.links.map((item) => {
              if (item.name === "Services") {
                return (
                  <li
                    key={item.id}
                    ref={mobileDropdownRef}
                    className={`dropdown ${openServices ? "active" : ""}`}
                  >
                    <button
                      onClick={() => setOpenServices(!openServices)}
                      className="dropdown-toggle"
                    >
                      {item.name}
                    </button>
                    {openServices && (
                      <ul className="dropdown-menu">
                        <li>
                          <Link href="/full-treatment">Full Treatment</Link>
                        </li>
                        <li>
                          <Link href="/standard-treatment">
                            Standard Treatment
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                );
              }
              return (
                <li key={item.id}>
                  <Link href={item.link}>{item.name}</Link>
                </li>
              );
            })}
          </ol>
        </div>
      </nav>

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
