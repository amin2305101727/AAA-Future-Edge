import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[55vh] max-w-3xl flex-col items-center justify-center px-6 py-20 text-center">
      <h1 className="text-4xl font-bold text-[#172033]">Page not found</h1>
      <p className="mt-4 text-gray-600">
        The page you are looking for could not be found.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-[#f58a1f] px-6 py-3 font-semibold text-white hover:bg-[#898b8d]"
      >
        Return home
      </Link>
    </section>
  );
}
