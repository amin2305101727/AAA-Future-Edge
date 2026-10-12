import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/logo/Future-Edge.jpg";
import { GoChevronDown } from "react-icons/go";

function NavigationLinks({ mobile = false }) {
  const linkClass = "block rounded px-3 py-2 hover:text-[#f58a1f]";
  const dropdownClass = mobile
    ? "ml-3 border-l border-gray-200 pl-2"
    : "absolute left-0 top-full z-20 mt-2 hidden min-w-56 rounded bg-white p-2 text-black shadow-lg group-hover:block group-focus-within:block";

  return (
    <>
      <li>
        <Link className={linkClass} href="/">
          Home
        </Link>
      </li>
      <li>
        <Link className={linkClass} href="/explore">
          Explore
        </Link>
      </li>
      <li className="group relative">
        <details>
          <summary className={`${linkClass} flex cursor-pointer list-none items-center`}>
            Solutions <GoChevronDown aria-hidden="true" className="ml-1 text-xl" />
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
          <summary className={`${linkClass} flex cursor-pointer list-none items-center`}>
            Services <GoChevronDown aria-hidden="true" className="ml-1 text-xl" />
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
        <Link className={linkClass} href="/gallery">
          Gallery
        </Link>
      </li>
      <li>
        <Link className={linkClass} href="/blog">
          Blogs
        </Link>
      </li>
      <li>
        <Link className={linkClass} href="/contact">
          Contact
        </Link>
      </li>
    </>
  );
}

const Navbar = () => (
  <header className="fancyNav sticky top-0 z-[9999] bg-white text-black shadow-md">
    <div className="container mx-auto flex items-center justify-between px-4">
      <Link href="/" aria-label="AAA Future Edge home" className="shrink-0">
        <Image
          src={logo}
          alt="AAA Future Edge"
          width={logo.width}
          height={logo.height}
          priority
          className="h-auto w-20"
        />
      </Link>

      <details className="group relative lg:hidden">
        <summary className="flex cursor-pointer list-none items-center rounded p-3 hover:bg-gray-100 focus-visible:outline">
          <span className="sr-only">Open navigation menu</span>
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
          className="absolute right-0 top-full z-20 mt-2 max-h-[80vh] w-72 overflow-y-auto rounded bg-white p-3 shadow-lg"
        >
          <ul className="space-y-1">
            <NavigationLinks mobile />
          </ul>
        </nav>
      </details>

      <nav aria-label="Primary navigation" className="hidden lg:block">
        <ul className="flex items-center gap-1 text-lg">
          <NavigationLinks />
        </ul>
      </nav>
    </div>
  </header>
);

export default Navbar;
