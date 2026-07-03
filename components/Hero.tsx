import Link from "next/link";
import HeroStats from "@/components/HeroStats";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-slate-950 px-6 pt-32 lg:pt-20 text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.78),rgba(15,23,42,0.88))]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">

        <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
          MEWI THAI
        </h1>

        <h2 className="mt-5 text-2xl font-semibold text-blue-200 md:text-3xl">
          Industrial Supply & Engineering Solutions
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-200 md:text-xl">
          Reliable Partner for Industrial Supply,
          <br />
          Engineering Procurement and Technical Solutions.
        </p>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/rfq"
            className="rounded-xl bg-blue-600 px-9 py-4 text-base font-bold text-white shadow-xl transition hover:bg-blue-700"
          >
            Request Quotation
          </Link>
        </div>

        {/* Statistics */}
        <HeroStats />

      </div>
    </section>
  );
}