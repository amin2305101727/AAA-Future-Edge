"use client";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="mx-auto flex min-h-[55vh] max-w-3xl flex-col items-center justify-center px-6 py-20 text-center">
      <h1 className="text-3xl font-bold text-[#172033]">
        This is an error page
      </h1>
      <button
        type="button"
        onClick={reset}
        className="mt-8 rounded-md bg-[#f58a1f] px-6 py-3 font-semibold text-white hover:bg-[#898b8d]"
      >
        Try again
      </button>
    </section>
  );
}
