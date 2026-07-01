import Navbar from "@/components/Navbar";

export default function NewsPage() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-50 pt-36 pb-24">
        <div className="mx-auto max-w-5xl px-6">

          <p className="font-semibold uppercase tracking-[0.25em] text-blue-600">
            News & Updates
          </p>

          <h1 className="mt-4 text-5xl font-bold text-gray-900">
            Latest News
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Follow our latest activities, factory visits, exhibitions,
            partnerships and industrial engineering updates.
          </p>

          <div className="mt-16 rounded-3xl border border-dashed border-gray-300 bg-white p-16 text-center shadow-sm">

            <h2 className="text-3xl font-bold text-gray-900">
              Coming Soon
            </h2>

            <p className="mt-6 text-lg text-gray-500">
              Our latest news and project updates will be published here.
            </p>

          </div>

        </div>
      </section>
    </>
  );
}