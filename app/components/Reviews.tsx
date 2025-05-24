"use client";
import { useState, useEffect } from "react";

// Types
interface Review {
  id: string;
  author: {
    name: string;
    initials: string;
    verified: boolean;
  };
  rating: number;
  date: string;
  content: string;
  service: string;
  vehicle?: string;
}

// Sample review data for car detailing
const reviewsData: Review[] = [
  {
    id: "rev1",
    author: {
      name: "Rachael Villwock",
      initials: "RV",
      verified: true,
    },
    rating: 5,
    date: "April 24, 2025",
    content:
      "Isaiah detailed (inside and out) three of our cars over the weekend and all three look brand new. So much attention to detail. Highly recommend if you need this service.",
    service: "Interior & Exterior Detailing",
    vehicle: "Multiple cars",
  },
  {
    id: "rev2",
    author: {
      name: "Kelly Barnes",
      initials: "KB",
      verified: true,
    },
    rating: 5,
    date: "May 17, 2025",
    content:
      "If you want your car to look, shine, and smell better than when you first purchased it, look no further than NexGen Auto Detailing. Impeccable.",
    service: "Full Detailing",
    vehicle: "Car",
  },
  {
    id: "rev3",
    author: {
      name: "Rhonda Villwock",
      initials: "RV",
      verified: true,
    },
    rating: 5,
    date: "May 10, 2025",
    content:
      "Extremely happy with our car detailing!! It looks & smells like new!! We will recommend him to all our friends & family!!",
    service: "Full Detailing",
    vehicle: "Car",
  },
  {
    id: "rev4",
    author: {
      name: "wittzy",
      initials: "W",
      verified: true,
    },
    rating: 5,
    date: "May 19, 2025",
    content:
      "Got my car looking brand new, great service, owner was very helpful throughout the whole process of scheduling and explaining how detailing works. Very impressed.",
    service: "Interior & Exterior Detailing",
    vehicle: "Car",
  },
  {
    id: "rev5",
    author: {
      name: "Lesley Michelson",
      initials: "LM",
      verified: true,
    },
    rating: 5,
    date: "May 18, 2025",
    content:
      "My car looks like it just came off the showroom floor. Isaiah is motivated, kind and meticulous in his work. I strongly recommend him. You will NOT be disappointed.",
    service: "Interior & Exterior Detailing",
    vehicle: "Car",
  },
  {
    id: "rev6",
    author: {
      name: "Nick Zombar",
      initials: "NZ",
      verified: true,
    },
    rating: 5,
    date: "May 10, 2025",
    content:
      "Isaiah did an incredible job on my Subaru Impreza, only took him a few hours and made my 10 year old car look brand new again. I’d highly recommend him for your detailing needs!",
    service: "Full Detailing",
    vehicle: "Subaru Impreza",
  },
  {
    id: "rev7",
    author: {
      name: "Jayden Glenn",
      initials: "JG",
      verified: true,
    },
    rating: 5,
    date: "April 24, 2025",
    content:
      "Outstanding job—made my car to look brand new in just 4 hours. I hadn’t had it detailed in over 4 years, and the results blew my expectations. Highly recommended!",
    service: "Interior & Exterior Detailing",
    vehicle: "Car",
  },
  {
    id: "rev8",
    author: {
      name: "Corey McClain",
      initials: "CM",
      verified: true,
    },
    rating: 5,
    date: "April 24, 2025",
    content:
      "Can’t speak highly enough of this young man's work. He did an extremely good job cleaning the seats/interior of my F350. Looked brand new when I got it back. He is now my GO-TO for any detailing needs!",
    service: "Interior Detailing",
    vehicle: "F350",
  },
  {
    id: "rev9",
    author: {
      name: "Taylor Kozlowski",
      initials: "TK",
      verified: true,
    },
    rating: 5,
    date: "April 24, 2025",
    content:
      "Isaiah is amazing! Very detailed and takes care of your car. Every time I have used him my car has looked better than when I bought it!",
    service: "Full Detailing",
    vehicle: "Car",
  },
  {
    id: "rev10",
    author: {
      name: "Kurt Fairchild",
      initials: "KF",
      verified: true,
    },
    rating: 5,
    date: "May 10, 2025",
    content:
      "Great experience! Will definitely have more detailing/work done in the future! Would 100% recommend NexGen for your next detailing project!",
    service: "Full Detailing",
    vehicle: "Car",
  },
  {
    id: "rev11",
    author: {
      name: "Daniel Musgrave",
      initials: "DM",
      verified: true,
    },
    rating: 5,
    date: "April 24, 2025",
    content:
      "Fantastic job!!! I decided to try another detailer and will never go back to my old one. Car was absolutely spotless and he was very respectful.",
    service: "Full Detailing",
    vehicle: "Car",
  },
  {
    id: "rev12",
    author: {
      name: "Heather Halstead",
      initials: "HH",
      verified: true,
    },
    rating: 5,
    date: "April 24, 2025",
    content:
      "Isiah did an excellent job with my car! Will definitely be using him again in the future!",
    service: "Interior & Exterior Detailing",
    vehicle: "Car",
  },
  {
    id: "rev13",
    author: {
      name: "Sheri McClelland",
      initials: "SM",
      verified: true,
    },
    rating: 5,
    date: "May 17, 2025",
    content:
      "Excellent service! Above & beyond, will definitely be a reoccurring customer! Thanks again!!",
    service: "Full Detailing",
    vehicle: "Car",
  },
  {
    id: "rev14",
    author: {
      name: "Keith Kozlowski",
      initials: "KK",
      verified: true,
    },
    rating: 5,
    date: "April 24, 2025",
    content: "Highly Recommend! I will be Using Nextgen for all my Vehicles!",
    service: "Full Detailing",
    vehicle: "Multiple Vehicles",
  },
  {
    id: "rev15",
    author: {
      name: "Doug Stein",
      initials: "DS",
      verified: true,
    },
    rating: 5,
    date: "April 24, 2025",
    content: "Great Service, and results! Gotta give this Detwiler a shot👍👍",
    service: "Detailing",
    vehicle: "Car",
  },
  {
    id: "rev16",
    author: {
      name: "Gabriel Altawil",
      initials: "GA",
      verified: true,
    },
    rating: 5,
    date: "April 24, 2025",
    content:
      "Dedicated, aspiring young man who pours his heart and soul into every job",
    service: "Detailing",
    vehicle: "Car",
  },
  {
    id: "rev17",
    author: {
      name: "Hannah Stein",
      initials: "HS",
      verified: true,
    },
    rating: 5,
    date: "April 24, 2025",
    content: "Amazing service! Would highly recommend!!",
    service: "Detailing",
    vehicle: "Car",
  },
  {
    id: "rev18",
    author: {
      name: "Olivia Merten",
      initials: "OM",
      verified: true,
    },
    rating: 5,
    date: "April 24, 2025",
    content: "good pricing and great service !!",
    service: "Detailing",
    vehicle: "Car",
  },
  {
    id: "rev19",
    author: {
      name: "Linda Lilly",
      initials: "LL",
      verified: true,
    },
    rating: 5,
    date: "May 23, 2025",
    content:
      "Highly recommend Isaiah at NexGen auto detail. His professionalism and talent are second to none. Here are some of my before and after photos. My car looks better than it did the day I drove it off the car lot.",
    service: "Interior & Exterior Detailing",
    vehicle: "4 Door SUV",
  },
];

export default function GoogleReviews() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviewsData.length / reviewsPerPage);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Calculate average rating
  const averageRating =
    reviewsData.reduce((acc, review) => acc + review.rating, 0) /
    reviewsData.length;

  // Get current page reviews
  const currentReviews = reviewsData.slice(
    currentPage * reviewsPerPage,
    (currentPage + 1) * reviewsPerPage
  );

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Render stars
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} style={{ color: "#FBBF24", fontSize: "20px" }}>
          ★
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span
          key="half"
          style={{ color: "#FBBF24", fontSize: "20px", position: "relative" }}
        >
          <span
            style={{ position: "absolute", width: "50%", overflow: "hidden" }}
          >
            ★
          </span>
          <span style={{ color: "#D1D5DB" }}>☆</span>
        </span>
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} style={{ color: "#D1D5DB", fontSize: "20px" }}>
          ☆
        </span>
      );
    }

    return stars;
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        color: "#111827",
        borderRadius: "12px",
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        overflow: "hidden",
        border: "1px solid #F3F4F6",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      {/* Google Reviews Header */}
      <div
        style={{
          borderBottom: "1px solid #F3F4F6",
          padding: isMobile ? "24px 20px" : "32px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: isMobile ? "24px" : "32px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 272 92"
            width={isMobile ? "70" : "90"}
            height={isMobile ? "23" : "30"}
            style={{ marginRight: "12px" }}
            aria-hidden="true"
          >
            <path
              fill="#EA4335"
              d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
            />
            <path
              fill="#FBBC05"
              d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
            />
            <path
              fill="#4285F4"
              d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
            />
            <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z" />
            <path
              fill="#EA4335"
              d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
            />
            <path
              fill="#4285F4"
              d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"
            />
          </svg>
          <h2
            style={{
              fontSize: isMobile ? "18px" : "20px",
              fontWeight: "600",
              color: "#374151",
              margin: 0,
            }}
          >
            Customer Reviews
          </h2>
          <div
            style={{
              marginLeft: "12px",
              backgroundColor: "#DBEAFE",
              color: "#1D4ED8",
              border: "1px solid #BFDBFE",
              borderRadius: "9999px",
              padding: "4px 12px",
              fontSize: "12px",
              fontWeight: "500",
            }}
          >
            Verified by Google
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "stretch" : "center",
            justifyContent: "space-between",
            gap: isMobile ? "20px" : "32px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: isMobile ? "20px" : "32px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: isMobile ? "36px" : "48px",
                  fontWeight: "bold",
                  color: "#374151",
                }}
              >
                {averageRating.toFixed(1)}
              </div>
              <div style={{ display: "flex", marginTop: "8px" }}>
                {renderStars(averageRating)}
              </div>
              <div
                style={{ fontSize: "14px", color: "#6B7280", marginTop: "8px" }}
              >
                {reviewsData.length} reviews
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#DBEAFE",
                padding: isMobile ? "16px" : "20px",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  color: "#1D4ED8",
                  fontWeight: "600",
                  marginBottom: "4px",
                }}
              >
                Google Rating
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    fontSize: isMobile ? "20px" : "24px",
                    fontWeight: "bold",
                    color: "#1D4ED8",
                    marginRight: "8px",
                  }}
                >
                  {averageRating.toFixed(1)}
                </div>
                <div style={{ display: "flex" }}>
                  {renderStars(averageRating)}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "8px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#059669"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "4px" }}
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span style={{ fontSize: "14px", color: "#4B5563" }}>
                  Verified Business
                </span>
              </div>
            </div>
          </div>
          <a
            href="https://www.google.com/search?sca_esv=13e69eccba0c2d69&biw=1247&bih=853&sxsrf=AE3TifMRtsPKCheFITzJvz23XzTOiw_BMQ:1748105964371&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EwyFPgBfK3xuDaB4crBF2ZUYRuAtLMSfFLAgdgkfJO07v-6iLnWWxOV5C0oirDiP13zSjaHkMaVi4BiugQDgiQSgdojq75x33yT4An7a6BOUdn5mFw%3D%3D&q=NexGen+Auto+Detail+Reviews&sa=X&ved=2ahUKEwi626SYyryNAxVVq4kEHQ3lCV4Q0bkNegQIJhAD"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#2563EB",
              color: "white",
              padding: isMobile ? "10px 20px" : "12px 24px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              fontWeight: "500",
              textDecoration: "none",
              transition: "background-color 0.15s",
              fontSize: isMobile ? "14px" : "16px",
              justifyContent: "center",
            }}
          >
            Write a Review
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginLeft: "8px" }}
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </a>
        </div>
      </div>

      {/* Reviews List */}
      <div>
        {currentReviews.map((review, index) => (
          <div
            key={review.id}
            style={{
              padding: isMobile ? "20px" : "32px",
              borderBottom:
                index !== currentReviews.length - 1
                  ? "1px solid #F3F4F6"
                  : "none",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <div style={{ marginRight: isMobile ? "12px" : "20px" }}>
                <div
                  style={{
                    width: isMobile ? "48px" : "56px",
                    height: isMobile ? "48px" : "56px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    backgroundColor: "#F3F4F6",
                    border: "1px solid #E5E7EB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: isMobile ? "18px" : "20px",
                    fontWeight: "600",
                    color: "#374151",
                  }}
                >
                  {review.author.initials}
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "8px",
                    flexWrap: "wrap",
                  }}
                >
                  <h3
                    style={{
                      fontWeight: "600",
                      color: "#374151",
                      marginRight: "8px",
                      margin: 0,
                      fontSize: isMobile ? "16px" : "18px",
                    }}
                  >
                    {review.author.name}
                  </h3>
                  {review.author.verified && (
                    <div
                      style={{
                        backgroundColor: "#DCFCE7",
                        color: "#059669",
                        border: "1px solid #BBF7D0",
                        borderRadius: "9999px",
                        padding: "2px 8px",
                        fontSize: "12px",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ marginRight: "4px" }}
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Verified
                    </div>
                  )}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                    color: "#6B7280",
                    marginBottom: "12px",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    {renderStars(review.rating)}
                  </div>
                  <div>{formatDate(review.date)}</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#DBEAFE",
                      color: "#1D4ED8",
                      border: "1px solid #BFDBFE",
                      borderRadius: "9999px",
                      padding: "4px 12px",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    {review.service}
                  </div>
                  {review.vehicle && (
                    <div
                      style={{
                        backgroundColor: "#F9FAFB",
                        color: "#4B5563",
                        border: "1px solid #E5E7EB",
                        borderRadius: "9999px",
                        padding: "4px 12px",
                        fontSize: "12px",
                        fontWeight: "500",
                      }}
                    >
                      {review.vehicle}
                    </div>
                  )}
                </div>
                <div
                  style={{
                    color: "#374151",
                    lineHeight: "1.625",
                    fontSize: isMobile ? "14px" : "16px",
                  }}
                >
                  {review.content}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div
          style={{
            backgroundColor: "#F9FAFB",
            padding: isMobile ? "16px 20px" : "20px 32px",
            borderTop: "1px solid #F3F4F6",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
            style={{
              border: "1px solid #D1D5DB",
              color: "#4B5563",
              backgroundColor: "white",
              borderRadius: "6px",
              padding: isMobile ? "8px 12px" : "10px 16px",
              fontSize: "14px",
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
              cursor: currentPage === 0 ? "not-allowed" : "pointer",
              opacity: currentPage === 0 ? 0.5 : 1,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginRight: "8px" }}
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            {!isMobile && "Previous"}
          </button>
          <div
            style={{ fontSize: "14px", color: "#6B7280", fontWeight: "500" }}
          >
            Page {currentPage + 1} of {totalPages}
          </div>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
            }
            disabled={currentPage === totalPages - 1}
            style={{
              border: "1px solid #D1D5DB",
              color: "#4B5563",
              backgroundColor: "white",
              borderRadius: "6px",
              padding: isMobile ? "8px 12px" : "10px 16px",
              fontSize: "14px",
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
              cursor:
                currentPage === totalPages - 1 ? "not-allowed" : "pointer",
              opacity: currentPage === totalPages - 1 ? 0.5 : 1,
            }}
          >
            {!isMobile && "Next"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginLeft: "8px" }}
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      )}

      {/* Footer */}
      <div
        style={{
          backgroundColor: "#F9FAFB",
          padding: "16px",
          borderTop: "1px solid #F3F4F6",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 272 92"
          width="60"
          height="20"
          style={{ marginRight: "8px" }}
          aria-hidden="true"
        >
          <path
            fill="#EA4335"
            d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
          />
          <path
            fill="#FBBC05"
            d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
          />
          <path
            fill="#4285F4"
            d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
          />
          <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z" />
          <path
            fill="#EA4335"
            d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
          />
          <path
            fill="#4285F4"
            d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"
          />
        </svg>
        <span style={{ fontSize: "14px", color: "#6B7280", fontWeight: "500" }}>
          Verified Reviews
        </span>
      </div>
    </div>
  );
}
