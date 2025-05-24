// Define a type for vehicle size
export type VehicleSize = "Small" | "Midsize" | "Large";

// Define a service package
export interface ServicePackage {
  name: string;
  description: string[];
  prices: {
    Small: number;
    Midsize: number;
    Large: number;
  };
}

// Define a service category that can contain one or more packages
export interface ServiceCategory {
  category: string;
  exclusiveCategory: boolean;
  packages: ServicePackage[];
}

// Define the structure for selected services in a booking
export interface BookingServices {
  [category: string]: {
    package: string;
    size: VehicleSize | null;
  };
}

// Define the overall booking data structure
export interface BookingData {
  name: string;
  email: string;
  phone: string;
  date: string; // ISO string format
  services: BookingServices;
  status: string;
}
