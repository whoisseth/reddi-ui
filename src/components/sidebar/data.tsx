/** @format */

import { IconType } from "react-icons";

// Sample icons imported from react-icons
import { AiOutlineHome, AiOutlineUser, AiOutlineSetting } from "react-icons/ai";
import { RiSettings3Line } from "react-icons/ri";

// Define SidebarItemType
type SidebarItemType = {
  icon: IconType;
  activeIcon: IconType;
  title: string;
  href?: string;
  subItems?: {
    title: string;
    href: string;
  }[];
};

// Define CategoryWithListType
type CategoryWithListType = {
  title: string;
  categories: SidebarItemType[];
};

// Define SidebarType
export type SidebarType = {
  categoryWithoutList: SidebarItemType[];
  categoryWithList: CategoryWithListType[];
};

// Sample data for SidebarType
export const sampleSidebarData: SidebarType = {
  categoryWithoutList: [
    {
      icon: AiOutlineHome,
      activeIcon: AiOutlineHome,
      title: "Home",
      href: "/home"
    },
    {
      icon: AiOutlineUser,
      activeIcon: AiOutlineUser,
      title: "Profile",
      href: "/profile"
    },
    {
      icon: RiSettings3Line,
      activeIcon: RiSettings3Line,
      title: "Settings",
      href: "/settings"
    }
  ],
  categoryWithList: [
    {
      title: "Main",
      categories: [
        {
          icon: AiOutlineHome,
          activeIcon: AiOutlineHome,
          title: "Home",
          href: "/home",
          subItems: [
            {
              title: "Profile",
              href: "/profile"
            },
            {
              title: "Main",
              href: "/main"
            },
            {
              title: "Settings",
              href: "/profile"
            },
            {
              title: "Accounnt",
              href: "/accounnt"
            }
          ]
        },
        {
          icon: AiOutlineUser,
          activeIcon: AiOutlineUser,
          title: "Profile",
          href: "/profile"
        }
      ]
    },
    {
      title: "Settings",
      categories: [
        {
          icon: RiSettings3Line,
          activeIcon: RiSettings3Line,
          title: "Settings",
          href: "/settings"
        },
        {
          icon: AiOutlineSetting,
          activeIcon: AiOutlineSetting,
          title: "Account Settings",
          href: "/account-settings",
          subItems: [
            {
              title: "Profile",
              href: "/profile"
            },
            {
              title: "Main",
              href: "/main"
            },
            {
              title: "Settings",
              href: "/profile"
            },
            {
              title: "Accounnt",
              href: "/accounnt"
            }
          ]
        }
      ]
    },
    {
      title: "User Settings",
      categories: [
        {
          icon: RiSettings3Line,
          activeIcon: RiSettings3Line,
          title: "Reddit Settings",
          href: "/reddit-settings"
        },
        {
          icon: AiOutlineSetting,
          activeIcon: AiOutlineSetting,
          title: "Account Settings",
          href: "/account-settings",
          subItems: [
            {
              title: "Profile",
              href: "/profile"
            },
            {
              title: "Main",
              href: "/main"
            },
            {
              title: "Settings",
              href: "/profile"
            },
            {
              title: "Accounnt",
              href: "/accounnt"
            }
          ]
        }
      ]
    }
  ]
};

// Output sample data
console.log(sampleSidebarData);
