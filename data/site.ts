import type { Route } from "next";

export const navigation = [
  { href: "/" as Route, label: "Home" },
  { href: "/rooms" as Route, label: "Rooms" },
  { href: "/offers" as Route, label: "Offers" },
  { href: "/gallery" as Route, label: "Gallery" },
  { href: "/about" as Route, label: "About" },
  { href: "/contact" as Route, label: "Contact" }
] as const;

export const rooms = [
  {
    slug: "garden-deluxe",
    name: "Garden Deluxe",
    price: "$145",
    capacity: "2 Guests",
    summary: "A quiet room with a garden-facing balcony and breakfast included.",
    amenities: ["Queen bed", "Balcony", "Breakfast", "Fast Wi-Fi"]
  },
  {
    slug: "family-courtyard-suite",
    name: "Family Courtyard Suite",
    price: "$220",
    capacity: "4 Guests",
    summary: "A spacious suite for families with lounge space and courtyard views.",
    amenities: ["2 beds", "Lounge area", "Mini bar", "Airport pickup"]
  },
  {
    slug: "signature-king-room",
    name: "Signature King Room",
    price: "$185",
    capacity: "2 Guests",
    summary: "A premium stay experience with elevated finishes and private seating area.",
    amenities: ["King bed", "Rain shower", "Workspace", "Late checkout"]
  }
] as const;

export const offers = [
  {
    title: "Early Booking Offer",
    description: "Save 12% on stays booked 21 days in advance.",
    validity: "Valid through December 31"
  },
  {
    title: "Weekend Garden Escape",
    description: "Two-night package with breakfast and complimentary late checkout.",
    validity: "Fridays and Saturdays"
  }
] as const;

export const testimonials = [
  {
    quote: "Beautiful grounds, helpful staff, and a booking process that felt effortless.",
    author: "Miriam K."
  },
  {
    quote: "The room was spotless and the hotel felt calm and elegant from arrival to checkout.",
    author: "Jonas R."
  }
] as const;

export const languages = [
  "English",
  "Deutsch",
  "Hebrew (nice to have)"
] as const;
