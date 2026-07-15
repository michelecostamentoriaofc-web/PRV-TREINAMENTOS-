"use client";

import { useMemo, useState } from "react";

type StandardStatus = "Available" | "Historical";

type Standard = {
  number: string;
  title: string;
  category: string;
  status: StandardStatus;
};

const standards: Standard[] = [
  {
    number: "NR 01",
    title: "General Provisions and Occupational Risk Management",
    category: "Risk Management",
    status: "Available",
  },
  {
    number: "NR 02",
    title: "Preliminary Inspection",
    category: "Historical Standard",
    status: "Historical",
  },
  {
    number: "NR 03",
    title: "Embargo and Interdiction",
    category: "Inspection",
    status: "Available",
  },
  {
    number: "NR 04",
    title: "Specialized Services in Occupational Safety and Medicine",
    category: "Occupational Health",
    status: "Available",
  },
  {
    number: "NR 05",
    title: "Internal Commission for Accident and Harassment Prevention",
    category: "Accident Prevention",
    status: "Available",
  },
  {
    number: "NR 06",
    title: "Personal Protective Equipment",
    category: "Personal Protection",
    status: "Available",
  },
  {
    number: "NR 07",
    title: "Occupational Health Medical Control Program",
    category: "Occupational Health",
    status: "Available",
  },
  {
    number: "NR 08",
    title: "Buildings",
    category: "Workplace Safety",
    status: "Available",
  },
  {
    number: "NR 09",
    title: "Assessment and Control of Occupational Exposure",
    category: "Occupational Exposure",
    status: "Available",
  },
  {
    number: "NR 10",
    title: "Safety in Electrical Installations and Services",
    category: "Electrical Safety",
    status: "Available",
  },
  {
    number: "NR 11",
    title: "Transportation, Handling, Storage and Material Movement",
    category: "Material Handling",
    status: "Available",
  },
  {
    number: "NR 12",
    title: "Safety at Work with Machinery and Equipment",
    category: "Machine Safety",
    status: "Available",
  },
  {
    number: "NR 13",
    title: "Boilers, Pressure Vessels, Piping and Metal Storage Tanks",
    category: "Pressure Equipment",
    status: "Available",
  },
  {
    number: "NR 14",
    title: "Industrial Furnaces",
    category: "Industrial Safety",
    status: "Available",
  },
  {
    number: "NR 15",
    title: "Unhealthy Activities and Operations",
    category: "Occupational Exposure",
    status: "Available",
  },
  {
    number: "NR 16",
    title: "Hazardous Activities and Operations",
    category: "High-Risk Activities",
    status: "Available",
  },
  {
    number: "NR 17",
    title: "Ergonomics",
    category: "Ergonomics",
    status: "Available",
  },
  {
    number: "NR 18",
    title: "Occupational Safety and Health in the Construction Industry",
    category: "Construction",
    status: "Available",
  },
  {
    number: "NR 19",
    title: "Explosives",
    category: "High-Risk Activities",
    status: "Available",
  },
  {
    number: "NR 20",
    title: "Safety and Health with Flammable and Combustible Materials",
    category: "Fire and Chemical Safety",
    status: "Available",
  },
  {
    number: "NR 21",
    title: "Open-Air Work",
    category: "Outdoor Work",
    status: "Available",
  },
  {
    number: "NR 22",
    title: "Occupational Safety and Health in Mining",
    category: "Mining",
    status: "Available",
  },
  {
    number: "NR 23",
    title: "Fire Protection",
    category: "Fire Safety",
    status: "Available",
  },
  {
    number: "NR 24",
    title: "Sanitary and Comfort Conditions in Workplaces",
    category: "Workplace Conditions",
    status: "Available",
  },
  {
    number: "NR 25",
    title: "Industrial Waste",
    category: "Environmental Safety",
    status: "Available",
  },
  {
    number: "NR 26",
    title: "Safety Signage",
    category: "Safety Communication",
    status: "Available",
  },
  {
    number: "NR 27",
    title: "Professional Registration of Occupational Safety Technicians",
    category: "Historical Standard",
    status: "Historical",
  },
  {
    number: "NR 28",
    title: "Inspection and Penalties",
    category: "Inspection",
    status: "Available",
  },
  {
    number: "NR 29",
    title: "Occupational Safety and Health in Port Operations",
    category: "Port Operations",
    status: "Available",
  },
  {
    number: "NR 30",
    title: "Occupational Safety and Health in Waterway Work",
    category: "Maritime Safety",
    status: "Available",
  },
  {
    number: "NR 31",
    title:
      "Occupational Safety and Health in Agriculture, Livestock and Forestry",
    category: "Rural Work",
    status: "Available",
  },
  {
    number: "NR 32",
    title: "Occupational Safety and Health in Healthcare Services",
    category: "Healthcare",
    status: "Available",
  },
  {
    number: "NR 33",
    title: "Safety and Health in Confined Spaces",
    category: "Confined Spaces",
    status: "Available",
  },
  {
    number: "NR 34",
    title: "Working Conditions in Shipbuilding, Repair and Dismantling",
    category: "Shipbuilding",
    status: "Available",
  },
  {
    number: "NR 35",
    title: "Work at Height",
    category: "High-Risk Activities",
    status: "
