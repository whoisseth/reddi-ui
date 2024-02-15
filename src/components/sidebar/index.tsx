/** @format */
"use client";

import React from "react";
import { CategoryWithListType, SidebarItemType, SidebarType } from "./type";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import sidebarData from "./data";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useAtom } from "jotai";
import { menuAtom } from "@/app/store";

// sidebarData

export default function Sidebar() {
  console.log("sidebarData", sidebarData);
  const [animationParent] = useAutoAnimate({
    duration: 300,
    easing: "ease-in-out"
  });
  const [isMenuOpen] = useAtom(menuAtom);

  sidebarData;
  return (
    <div ref={animationParent}>
      {isMenuOpen && (
        <div className="md:hidden fixed top-[64px] left-0 bg-black/50 h-screen w-full  z-10 backdrop-blur-sm">
          <MainSidebar className="bg-white dark:bg-black" />
        </div>
      )}
      <div className="hidden md:flex">
        <MainSidebar />
      </div>
    </div>
  );
}

function MainSidebar(props: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-1  border-r w-[250px] h-full py-3 p-2 ",
        props.className
      )}
    >
      <div className="flex flex-col gap-1 w-full ">
        {sidebarData.categoryWithoutList?.map((d, i) => (
          <SidebarItem key={i} {...{ ...d }} />
        ))}
      </div>
      {/* {sidebarData.categoryWithList && <br />} */}

      <div className="flex flex-col gap-1 w-full">
        {sidebarData.categoryWithList?.map((d, i) => (
          <CategoryWithList key={i} {...{ ...d }} />
        ))}
      </div>
    </div>
  );
}

function SidebarItem(props: SidebarItemType) {
  const pathName = usePathname();
  const currentPath = pathName === props.href;

  const { icon: Icon, activeIcon: ActiveIcon } = props;

  const [isSubItemOpen, setSubItem] = useState(false);

  function toggleSubItem() {
    setSubItem(!isSubItemOpen);
  }

  return (
    <Link href={props.href ?? ""}>
      {/* left  */}
      {/* icon */}
      <section
        className={cn(
          "w-full flex   items-center  transition-all rounded-md py-2 px-4 hover:bg-secondary justify-between",
          currentPath && "bg-secondary   "
        )}
      >
        <div className="flex items-center gap-2">
          <div className="text-lx">
            {currentPath ? <ActiveIcon /> : <Icon />}
          </div>
          <p>{props.title}</p>
        </div>
        {props.subItems && (
          <button onClick={toggleSubItem}>
            <FaChevronDown />
          </button>
        )}
      </section>

      {props.subItems && isSubItemOpen && (
        <section>
          {props.subItems.map((d, i) => (
            <Link key={i} href={d.href}>
              {d.title}
            </Link>
          ))}
        </section>
      )}
    </Link>
  );
}

function CategoryWithList(props: CategoryWithListType) {
  const pathName = usePathname();
  const [isCategoryOpen, setCategoryOpen] = useState(false);

  const [animationParent] = useAutoAnimate();

  function toggleCategory() {
    setCategoryOpen(!isCategoryOpen);
  }
  return (
    <div ref={animationParent} className="  flex flex-col gap-1 w-full">
      <button
        onClick={toggleCategory}
        className={cn(
          "w-full flex transition-all  rounded-md py-2 px-4 hover:bg-secondary justify-between"
        )}
      >
        <h2 className="uppercase  text-gray-400 text-sm  "> {props.title} </h2>
        <FaChevronDown
          className={cn(
            "text-sm text-gray-500 transition-all",
            !isCategoryOpen && "rotate-180"
          )}
        />
      </button>
      {/*categories  */}

      {isCategoryOpen && (
        <div className=" pl-4">
          {props.categories.map((d, i) => (
            <Link
              className={cn(
                "w-full flex  rounded-md py-2 px-4 hover:bg-secondary",
                pathName === d.href && "bg-secondary "
              )}
              href={d.href}
              key={i}
            >
              {d.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
