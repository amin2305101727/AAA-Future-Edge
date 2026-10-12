"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoChevronDown } from "react-icons/go";
import { FiArrowRight, FiSearch } from "react-icons/fi";
import logo from "../../../public/flogo.png";

type NavigationLinksProps = Readonly<{
  mobile?: boolean;
}>;

function NavigationLinks({ mobile = false }: NavigationLinksProps) {
  const pathname = usePathname();
  const linkClass =
    "block rounded px-3 py-2 text-center text-lg font-bold text-[#111c37] transition-colors hover:text-[#ff7900] xl:px-3 xl:text-xl";
  const dropdownClass = mobile
    ? "ml-3 border-l border-orange-200 pl-2"
    : "absolute left-0 top-full z-20 mt-2 hidden min-w-56 rounded-xl border border-orange-100 bg-white p-2 text-black shadow-lg group-hover:block group-focus-within:block";

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href;

  const getLinkClass = (href: string) =>
    `${linkClass} ${
      isActive(href)
        ? "text-[#f47700] after:block after:mt-1.5 after:h-[3px] after:rounded-full after:bg-[#ff7900] after:content-['']"
        : ""
    }`;

  return (
    <>
      <li>
        <Link
          aria-current={isActive("/") ? "page" : undefined}
          className={getLinkClass("/")}
          href="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          aria-current={isActive("/explore") ? "page" : undefined}
          className={getLinkClass("/explore")}
          href="/explore"
        >
          Explore
        </Link>
      </li>
      <li className="group relative">
        <details>
          <summary className={`${linkClass} flex cursor-pointer list-none items-center justify-center`}>
            Solutions
            <GoChevronDown aria-hidden="true" className="ml-1 text-lg" />
          </summary>
          <ul className={dropdownClass}>
            <li>
              <Link className={linkClass} href="/hr-strategy">
                HR Strategy
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/scope-of-works">
                Scope of Works
              </Link>
            </li>
          </ul>
        </details>
      </li>
      <li className="group relative">
        <details>
          <summary className={`${linkClass} flex cursor-pointer list-none items-center justify-center`}>
            Services
            <GoChevronDown aria-hidden="true" className="ml-1 text-lg" />
          </summary>
          <ul className={dropdownClass}>
            <li>
              <Link className={linkClass} href="/hr-services">
                HR Services
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/core-services">
                Core Services
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/career-counselling">
                Career Counseling
              </Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link
          aria-current={isActive("/gallery") ? "page" : undefined}
          className={getLinkClass("/gallery")}
          href="/gallery"
        >
          Gallery
        </Link>
      </li>
      <li>
        <Link
          aria-current={isActive("/blog") ? "page" : undefined}
          className={getLinkClass("/blog")}
          href="/blog"
        >
          Blogs
        </Link>
      </li>
      {mobile && (
        <li>
          <Link
            aria-current={isActive("/contact") ? "page" : undefined}
            className={getLinkClass("/contact")}
            href="/contact"
          >
            Contact
          </Link>
        </li>
      )}
    </>
  );
}

const Navbar = () => (
  <header className="sticky top-0 z-[9999] bg-[#f7f9fc]/90 px-3 pt-3 backdrop-blur-md sm:px-5 sm:pt-4">
    <div className="relative mx-auto flex h-[72px] max-w-[1920px] items-center justify-between rounded-[18px] bg-white px-4 shadow-[0_10px_28px_rgba(23,32,51,0.1)] sm:h-[78px] sm:px-6 xl:h-[86px] xl:rounded-[22px] xl:px-7 2xl:h-[94px] 2xl:px-9">
      <Link
        href="/"
        aria-label="AAA Future Edge home"
        className="shrink-0"
      >
        <Image
          src={logo}
          alt="AAA Future Edge — A Trust Builder"
          width={logo.width}
          height={logo.height}
          priority
          className="h-auto w-[88px] sm:w-[98px] xl:w-[96px] 2xl:w-[108px]"
        />
      </Link>

      <nav
        aria-label="Primary navigation"
        className="absolute left-1/2 hidden -translate-x-1/2 xl:block"
      >
        <ul className="flex items-center justify-center gap-1.5 2xl:gap-3">
          <NavigationLinks />
        </ul>
      </nav>

      <div className="ml-auto flex items-center gap-2 sm:gap-3 xl:gap-5">
        <details className="group relative xl:hidden">
          <summary className="flex cursor-pointer list-none items-center rounded-full bg-orange-50 p-2.5 text-[#111c37] transition-colors hover:bg-orange-100 focus-visible:outline">
            <span className="sr-only">Open navigation menu</span>
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </summary>
          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-full z-20 mt-3 max-h-[80vh] w-72 overflow-y-auto rounded-2xl border border-orange-100 bg-white p-3 shadow-xl"
          >
            <ul className="space-y-1">
              <NavigationLinks mobile />
            </ul>
          </nav>
        </details>

        <div
          aria-hidden="true"
          className="hidden h-10 w-px bg-[#dfe3eb] xl:block"
        />
        <div
          aria-hidden="true"
          className="hidden h-[48px] w-[48px] items-center justify-center rounded-full bg-orange-50 text-[#111c37] xl:flex"
        >
          <FiSearch className="h-6 w-6" />
        </div>
        <Link
          href="/contact"
          className="hidden items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#ff7900] to-[#ff5300] px-7 py-3 text-xl font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg xl:flex 2xl:px-8"
        >
          Contact
          <FiArrowRight aria-hidden="true" className="h-6 w-6" />
        </Link>
      </div>
    </div>
  </header>
);

export default Navbar;
