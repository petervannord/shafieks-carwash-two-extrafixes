import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { createClient } from "@supabase/supabase-js";
import "../styles/BookingForm.scss";
import Head from "next/head";

// -- Types ------------------------------------------------------------------

interface BookingFormInputs {
  name: string;
  email: string;
  phone: string;
  car: string; // New field for car make and model
  comments?: string; // New optional field for additional comments or concerns
}

interface Addon {
  name: string;
  price: number;
}

interface PackageOption {
  name: string;
  description: string[];
  prices: {
    Small: number;
    Midsize: number;
    Large: number;
  };
  addons?: Addon[];
}

interface ServiceCategory {
  category: string;
  exclusiveCategory: boolean;
  packages: PackageOption[];
}

interface ServiceSelection {
  package: string;
  size: string | null;
  addons?: string[];
}

export interface SelectedServices {
  [category: string]: ServiceSelection;
}

interface BookingFormProps {
  initialSelectedService?: string | null;
  initialSize?: "Small" | "Midsize" | "Large" | null;
}

// -- Supabase Client --------------------------------------------------------

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// -- Data -------------------------------------------------------------------

const availableServices: ServiceCategory[] = [
  {
    category: "Full Interior",
    exclusiveCategory: false,
    packages: [
      {
        name: "Full Interior",
        description: [
          "Deep Plastic Steam Clean",
          "Leather, Plastic, Vinyl Protection",
          "Shampooing Seats & Carpet",
          "Germ/Odor Elimination",
          "Clean Windows",
        ],
        prices: { Small: 175, Midsize: 200, Large: 225 },
        addons: [
          { name: "Stain Removal", price: 30 },
          { name: "Deep Odor Elimination", price: 30 },
        ],
      },
    ],
  },
  {
    category: "Standard Interior",
    exclusiveCategory: false,
    packages: [
      {
        name: "Standard Interior",
        description: [
          "Clean/Wipe down all Surfaces",
          "Dust & Vacuum",
          "Clean Windows",
        ],
        prices: { Small: 100, Midsize: 120, Large: 150 },
        addons: [
          { name: "Shampoo Seats & Carpet", price: 50 },
          { name: "Leather, Plastic, Vinyl Protection", price: 30 },
          { name: "Deep Plastic Steam Clean", price: 50 },
          { name: "Stain Removal", price: 30 },
          { name: "Odor Elimination", price: 30 },
        ],
      },
    ],
  },
  {
    category: "Full Exterior",
    exclusiveCategory: false,
    packages: [
      {
        name: "Full Exterior",
        description: [
          "Deep Hand Wash",
          "Deep Wheel Cleaning",
          "Bugs Removal",
          "Iron Decon Removal",
          "Clay Bar Treatment",
          "Sealant Wax (3 month coverage)",
          "Trim Restoration",
          "Tire Shine",
          "Cleaning Windows",
        ],
        prices: { Small: 120, Midsize: 140, Large: 160 },
        addons: [
          { name: "Chrome Trim Treatment", price: 20 },
          { name: "Engine Bay Detail", price: 35 },
        ],
      },
    ],
  },
  {
    category: "Standard Exterior",
    exclusiveCategory: false,
    packages: [
      {
        name: "Standard Exterior",
        description: [
          "Hand Wash",
          "Wheel Cleaning",
          "Bugs Removal",
          "Spray Wax",
          "Cleaning Windows",
          "Tire Shine",
        ],
        prices: { Small: 50, Midsize: 65, Large: 80 },
        addons: [
          { name: "Black Trim Restoration", price: 20 },
          { name: "Engine Bay Detail", price: 35 },
          { name: "Chrome Trim Treatment", price: 20 },
        ],
      },
    ],
  },
  {
    category: "Full Makeover",
    exclusiveCategory: true,
    packages: [
      {
        name: "Full Makeover",
        description: ["Includes both Full Interior and Full Exterior services"],
        prices: { Small: 280, Midsize: 330, Large: 375 },
      },
    ],
  },
  {
    category: "Full Maintenance",
    exclusiveCategory: true,
    packages: [
      {
        name: "Full Maintenance",
        description: [
          "Includes both Standard Interior and Standard Exterior services",
        ],
        prices: { Small: 150, Midsize: 225, Large: 250 },
      },
    ],
  },
];

const exclusiveCategories = ["Full Makeover", "Full Maintenance"];
const nonExclusiveCategories = [
  "Full Interior",
  "Standard Interior",
  "Full Exterior",
  "Standard Exterior",
];

// -- Component --------------------------------------------------------------

export default function BookingForm({
  initialSelectedService = null,
  initialSize = null,
}: BookingFormProps) {
  const [selectedServices, setSelectedServices] = useState<SelectedServices>(
    () =>
      initialSelectedService
        ? {
            [initialSelectedService]: {
              package: initialSelectedService,
              size: initialSize,
            },
          }
        : {}
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [serviceMessage, setServiceMessage] = useState<string>("");
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<BookingFormInputs>({ mode: "onBlur" });

  const handleServiceChange = (
    categoryName: string,
    packageName: string,
    isChecked: boolean
  ) => {
    setSelectedServices((prev) => {
      const updated = { ...prev };
      let msg = "";

      if (isChecked) {
        if (exclusiveCategories.includes(categoryName)) {
          nonExclusiveCategories.forEach((c) => delete updated[c]);
          msg =
            "Selecting Makeover or Maintenance package will deselect individual services.";
        } else {
          exclusiveCategories.forEach((c) => delete updated[c]);
          msg =
            "Selecting individual services will deselect Makeover or Maintenance packages.";
        }
        updated[categoryName] = {
          package: packageName,
          size: null,
          addons: [],
        };
      } else {
        delete updated[categoryName];
      }

      setServiceMessage(msg);
      return updated;
    });
  };

  const handleSizeChange = (category: string, size: string) => {
    setSelectedServices((prev) => ({
      ...prev,
      [category]: { ...prev[category], size },
    }));
  };

  const handleAddonChange = (
    category: string,
    addonName: string,
    checked: boolean
  ) => {
    setSelectedServices((prev) => {
      const current = prev[category].addons || [];
      const updated = checked
        ? [...current, addonName]
        : current.filter((a) => a !== addonName);

      return {
        ...prev,
        [category]: { ...prev[category], addons: updated },
      };
    });
  };

  const onSubmit: SubmitHandler<BookingFormInputs> = async (data) => {
    setSubmissionStatus("loading");
    setErrorMessage("");

    if (!selectedDate) {
      setErrorMessage("Please select a date.");
      return setSubmissionStatus("error");
    }
    if (!Object.keys(selectedServices).length) {
      setErrorMessage("Please select at least one service.");
      return setSubmissionStatus("error");
    }
    for (const cat of Object.keys(selectedServices)) {
      if (!selectedServices[cat].size) {
        setErrorMessage(`Please select a size for "${cat}".`);
        return setSubmissionStatus("error");
      }
    }

    const booking = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      car: data.car, // Include car make/model in booking
      comments: data.comments || "", // Additional comments from the user
      date: selectedDate.toISOString().split("T")[0],
      services: selectedServices,
      status: "pending",
    };

    const { error } = await supabase.from("bookings").insert([booking]);
    if (error) {
      setErrorMessage(error.message);
      return setSubmissionStatus("error");
    }

    setSubmissionStatus("success");
    reset();
    setSelectedDate(null);
    setSelectedServices({});
    setServiceMessage("");

    // Trigger your email & Discord notifications here...
    await fetch("/api/sendBookingEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booking),
    });
    await fetch("/api/notifyDiscord", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booking),
    });
  };

  const isSubmitDisabled =
    !isValid ||
    !Object.keys(selectedServices).length ||
    submissionStatus === "loading";

  // Conditionally render our pricing note when either "Full Interior" or "Standard Interior" is selected.
  const showPricingNote =
    !!selectedServices["Full Interior"] ||
    !!selectedServices["Standard Interior"];

  return (
    <div className="booking-form">
      <Head>
        <title>Service Booking | NEXGEN Auto Detail</title>
        <meta
          name="description"
          content="Schedule a car detailing service with NEXGEN Auto Detail in Howland & Warren, Ohio."
        />
      </Head>

      <h2>Book a Car Detailing Service</h2>
      <Calendar
        onChange={(v) => setSelectedDate(v as Date)}
        value={selectedDate}
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name, Email, Phone, and Car Make/Model Inputs */}
        <input {...register("name", { required: true })} placeholder="Name" />
        {errors.name && <p className="error">Name is required</p>}

        <input
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
          placeholder="Email"
        />
        {errors.email && <p className="error">Valid email is required</p>}

        <input {...register("phone", { required: true })} placeholder="Phone" />
        {errors.phone && <p className="error">Phone is required</p>}

        <input
          {...register("car", { required: true })}
          placeholder="Car Make & Model"
        />
        {errors.car && <p className="error">Car make and model are required</p>}

        {/* Additional Comments or Concerns */}
        <textarea
          {...register("comments")}
          placeholder="Additional comments or concerns"
        />

        {/* Services */}
        <fieldset>
          <legend>Select Services:</legend>
          {serviceMessage && (
            <p className="service-message">{serviceMessage}</p>
          )}

          {availableServices.map((svc) => (
            <div key={svc.category} className="service-category">
              <h3>{svc.category}</h3>
              {svc.packages.map((pkg) => (
                <div key={pkg.name} className="service-package">
                  <label>
                    <input
                      type="checkbox"
                      checked={!!selectedServices[svc.category]}
                      onChange={(e) =>
                        handleServiceChange(
                          svc.category,
                          pkg.name,
                          e.target.checked
                        )
                      }
                    />
                    {pkg.name}
                  </label>

                  <ul className="service-description">
                    {pkg.description.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>

                  {selectedServices[svc.category]?.package === pkg.name && (
                    <>
                      {/* Size Radios */}
                      <div className="service-sizes">
                        {(["Small", "Midsize", "Large"] as const).map((sz) => (
                          <label key={sz}>
                            <input
                              type="radio"
                              name={`${svc.category}-size`}
                              value={sz}
                              checked={
                                selectedServices[svc.category]?.size === sz
                              }
                              onChange={() =>
                                handleSizeChange(svc.category, sz)
                              }
                              required
                            />
                            {sz} - ${pkg.prices[sz]}
                          </label>
                        ))}
                      </div>

                      {/* Add‑ons */}
                      {pkg.addons && (
                        <div className="service-addons">
                          <h4>Add‑ons:</h4>
                          {pkg.addons.map((a, idx) => (
                            <label key={idx} className="addon-option">
                              <input
                                type="checkbox"
                                checked={selectedServices[
                                  svc.category
                                ]?.addons?.includes(a.name)}
                                onChange={(e) =>
                                  handleAddonChange(
                                    svc.category,
                                    a.name,
                                    e.target.checked
                                  )
                                }
                              />
                              {a.name} - ${a.price}
                            </label>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          ))}
        </fieldset>

        {/* Conditional Pricing Note for Interior Services */}
        {showPricingNote && (
          <p className="pricing-note">
            <strong>Note:</strong> Pricing May Vary due to various reasons
            including: excess pet hair + debris, stain removal, foul odors.
          </p>
        )}

        <button type="submit" disabled={isSubmitDisabled}>
          {submissionStatus === "loading" ? "Booking..." : "Book Now"}
        </button>

        {submissionStatus === "success" && (
          <p className="success-message">Booking request sent successfully!</p>
        )}
        {submissionStatus === "error" && (
          <p className="error-message">{errorMessage}</p>
        )}
      </form>
    </div>
  );
}
