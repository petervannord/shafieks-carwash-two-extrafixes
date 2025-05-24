// Images
import hero1 from "./assets/images/taxi.jpg";
import hero5 from "./assets/images/callout.jpg";
import hero7 from "./assets/images/couches.jpg";

// Icons
import { FaLocationDot } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { FaCar } from "react-icons/fa";

// What we do grid icons
import Interior from "./assets/images/interior-wash.png";
import Window from "./assets/images/window-wipe.png";
import Wet from "./assets/images/wet-cleaning.png";
import Seats from "./assets/images/seats-wash.png";
import Vacuum from "./assets/images/vacuum.png";
import Wash from "./assets/images/wash.png";

// Navigation Links
export const navLinks = {
  links: [
    { id: 0, name: "Home", link: "#home" },
    { id: 1, name: "About", link: "#about" },
    {
      id: 2,
      name: "Services",
      link: "#whatwedo",
      children: [
        {
          id: 2.1,
          name: "Standard Treatment",
          link: "/services/standard-treatment",
        },
        {
          id: 2.2,
          name: "Full Treatment",
          link: "/services/full-treatment",
        },
      ],
    },
    { id: 4, name: "Reviews", link: "#reviews" },
    { id: 5, name: "Pricing", link: "#pricing" },
    { id: 6, name: "Contact", link: "#contact" },
  ],
};

// Hero section images
export const headerImages = {
  images: [
    { id: 0, source: hero1 },
    { id: 4, source: hero5 },
    { id: 6, source: hero7 },
  ],
};

// Services grid - "What We Do"
export const whatWeDo = {
  wedo: [
    {
      id: 3,
      alt: "Standard Exterior Cleaning",
      heading: "Standard Exterior Cleaning",
      text: `Our Standard Exterior Cleaning service features a Hand Wash, thorough Wheel Cleaning, Bugs Removal, and a Spray Wax finish. We also ensure your windows are cleaned and your tires shine bright.`,
      pricing: {
        Small: "$50",
        Midsize: "$65",
        Large: "$80",
      },
    },
    {
      id: 1,
      alt: "Standard Interior Cleaning",
      heading: "Standard Interior Cleaning",
      text: `Our Standard Interior Cleaning service offers a thorough Clean and Wipe down of all surfaces, along with Dusting and Vacuuming to keep your vehicle looking pristine. We also ensure your windows are cleaned for a clear view.`,
      pricing: {
        Small: "$100",
        Midsize: "$120",
        Large: "$150",
      },
    },
    {
      id: 5,
      alt: "Full Maintenance Package",
      heading: "Full Maintenance Package",
      text: `Keep your vehicle in top condition with our Full Maintenance Package. This service includes regular upkeep to maintain cleanliness both inside and out. 
      * **Exterior:** Hand Wash, Wheel Cleaning, Bugs Removal, Spray Wax, Cleaning Windows, and Tire Shine. 
      * **Interior:** Comprehensive Clean and Wipe down of all surfaces, along with Dusting and Vacuuming.`,
      pricing: {
        Small: "$150",
        Midsize: "$225",
        Large: "$250",
      },
    },
    {
      id: 2,
      alt: "Full Exterior Detailing",
      heading: "Full Exterior Detailing",
      text: `Transform your vehicle's exterior with our Full Exterior Detailing service. This includes a Deep Hand Wash, meticulous Wheel Cleaning, Bugs Removal, Iron Decontamination, Clay Bar Treatment, and a protective Sealant Wax (lasting 3+ months). We also restore your trim and provide a Tire Shine, ensuring your vehicle looks its absolute best.`,
      pricing: {
        Small: "$120",
        Midsize: "$140",
        Large: "$160",
      },
    },
    {
      id: 0,
      alt: "Full Interior Detailing",
      heading: "Full Interior Detailing",
      text: `Experience a comprehensive interior rejuvenation with our Full Interior Detailing service. This includes a meticulous Deep Plastic Steam Clean, protection for Leather, Plastic, and Vinyl surfaces, thorough Shampooing of Seats & Carpets, gentle Headliner Cleaning, and effective Germ/Odor Elimination. We ensure your windows are spotless for a crystal-clear view.`,
      pricing: {
        Small: "$175",
        Midsize: "$200",
        Large: "$225",
      },
    },
    {
      id: 4,
      alt: "Full Makeover Package",
      heading: "Full Makeover Package",
      text: `Indulge in our Full Makeover Package for a complete transformation of your vehicle. This service includes: 
      * **Exterior:** Deep Hand Wash, Deep Wheel Cleaning, Bugs Removal, Iron Decontamination, Clay Bar Treatment, Engine Bay Detailing, Sealant Wax (3-month coverage), Trim Restoration, and Tire Shine.
      * **Interior:** Deep Plastic Steam Clean, protection for Leather, Plastic, and Vinyl surfaces, Shampooing of Seats & Carpets, gentle Headliner Cleaning, and Germ/Odor Elimination.`,
      pricing: {
        Small: "$280",
        Midsize: "$330",
        Large: "$375",
      },
    },
  ],
};

// Counter statistics
export const Counts = {
  counts: [
    { id: 0, icon: FaLocationDot, text: "Service Points", number: 4 },
    { id: 1, icon: IoPerson, text: "Happy Clients", number: "23" },
    { id: 2, icon: FaCar, text: "Projects Completed", number: 23 },
  ],
};

// Client reviews
export const reviews = {
  review: [
    // {
    //   id: 0,
    //   text: "Did you use a product on the outside of the windows to make the rain bead up???? Whatever you did made my drive so much easier in the rain yesterday morning",
    // },
    // {
    //   id: 1,
    //   text: "Hi, my mom is very happy with how it turned out!",
    // },
    // {
    //   id: 2,
    //   text: "Best detail service and vehicle care In town!",
    // },
    // {
    //   id: 3,
    //   text: "Excellent service. My car was full of dog hair and he managed to get rid of all of it. Car is so clean.  Very happy with the service, Thank you again!",
    // },
    // {
    //   id: 4,
    //   text: "Very good detail, my car is clean again.",
    // },
    // {
    //   id: 6,
    //   text: "He did an excellent job in cleaning my vehicles. He was professional and thorough. Highly recommend.",
    // },
  ],
};
