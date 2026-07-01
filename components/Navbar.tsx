"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isThai, setIsThai] = useState(false);
  useEffect(() => {
  // ถ้าอยู่หน้าไทย ให้จำไว้
  if (pathname.startsWith("/th")) {
    localStorage.setItem("lang", "th");
    setIsThai(true);
    return;
  }

  // ถ้าอยู่หน้าอังกฤษ ให้จำไว้
  if (pathname === "/") {
    localStorage.setItem("lang", "en");
    setIsThai(false);
    return;
  }

  // หน้าอื่น เช่น /news /projects
  const savedLang = localStorage.getItem("lang");

  setIsThai(savedLang === "th");
}, [pathname]);

  const home = isThai ? "/th" : "/";
  const news = "/news";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link href={home} className="flex flex-col">
          <span className="text-3xl font-black tracking-tight text-blue-700">
            MEWI
          </span>

          <span className="text-[11px] uppercase tracking-[0.18em] text-gray-500">
            Industrial Supply & Engineering
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">

          <Link href={home} className="transition hover:text-blue-600">
            Home
          </Link>

          <Link href={`${home}#solutions`} className="transition hover:text-blue-600">
            Solutions
          </Link>

          <Link href={`${home}#industries`} className="transition hover:text-blue-600">
            Industries
          </Link>

          <Link href={`${home}#projects`} className="transition hover:text-blue-600">
            Projects
          </Link>

          <Link href={news} className="transition hover:text-blue-600">
            News & Updates
          </Link>

          <Link href={`${home}#contact`} className="transition hover:text-blue-600">
            Contact Us
          </Link>

          <div className="ml-2 flex items-center border-l border-gray-300 pl-6">

            <Link
              href="/"
              className={!isThai ? "font-semibold text-blue-600" : "text-gray-600 transition hover:text-blue-600"}
            >
              EN
            </Link>

            <span className="mx-2 text-gray-300">|</span>

            <Link
              href="/th"
              className={isThai ? "font-semibold text-blue-600" : "text-gray-600 transition hover:text-blue-600"}
            >
              TH
            </Link>

          </div>

        </nav>

      </div>
    </header>
  );
}