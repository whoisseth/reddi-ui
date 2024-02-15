/** @format */

import { IconType } from "react-icons";

export type SidebarItemType = {
  icon: IconType;
  activeIcon: IconType;
  title: string;
  href?: string;
  subItems?: {
    title: string;
    href: string;
  }[];
};

export type SidebarType = {
  categoryWithoutList: SidebarItemType[];
  categoryWithList: CategoryWithListType[];
};

export type CategoryWithListType = {
  title: string;
  categories: SidebarItemType[];
};
