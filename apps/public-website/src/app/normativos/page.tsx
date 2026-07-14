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
