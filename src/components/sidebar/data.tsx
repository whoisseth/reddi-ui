/** @format */
"use client";

import { IconType } from "react-icons";
import { FaHome, FaUser, FaCog, FaChartBar, FaEnvelope } from "react-icons/fa";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineBarChart,
  AiOutlineMail
} from "react-icons/ai";

import { SidebarType } from "./type";

// Create data for the sidebar
const sidebarData: SidebarType = {
  categoryWithoutList: [
    {
      icon: AiOutlineHome,
      activeIcon: FaHome, // Different active icon for Home
      title: "Home",
      href: "/home"
    },
    {
      icon: AiOutlineUser,
      activeIcon: FaUser, // Different active icon for Profile
      title: "Profile",
      href: "/profile"
    },
    {
      icon: AiOutlineSetting,
      activeIcon: FaCog, // Different active icon for Settings
      title: "Settings",
      href: "/settings"
    }
  ],
  categoryWithList: [
    {
      title: "Analytics",
      categories: [
        {
          title: "Overview",
          href: "/analytics/overview"
        },
        {
          title: "Reports",
          href: "/analytics/reports"
        },
        {
          title: "Charts",
          href: "/analytics/charts"
        }
      ]
    },
    {
      title: "Messages",
      categories: [
        {
          title: "Inbox",
          href: "/messages/inbox"
        },
        {
          title: "Sent",
          href: "/messages/sent"
        },
        {
          title: "Drafts",
          href: "/messages/drafts"
        }
      ]
    }
  ]
};

export default sidebarData;
