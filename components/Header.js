import Image from "next/image";
import React from "react";
import HeaderItem from "./HeaderItem";
import {
  ArrowTrendingUpIcon,
  BoltIcon,
  CheckBadgeIcon,
  HomeIcon,
  ListBulletIcon,
  MagnifyingGlassIcon,
  RectangleStackIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto ">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={BoltIcon} />
        <HeaderItem title="HOME" Icon={CheckBadgeIcon} />
        <HeaderItem title="HOME" Icon={RectangleStackIcon} />
        <HeaderItem title="HOME" Icon={MagnifyingGlassIcon} />
        <HeaderItem title="HOME" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="/img/logo.png"
        width={200}
        height={100}
        alt="logo"
      />
    </header>
  );
}

export default Header;
