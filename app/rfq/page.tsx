"use client";

import Navbar from "@/components/Navbar";

export default function RFQPage() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-50 pt-36 pb-20">
        <div className="mx-auto max-w-4xl px-6">

          <div className="text-center">

            <h1 className="mt-3 text-5xl font-bold text-gray-900">
              Request for Quotation
            </h1>

            <p className="mt-5 text-lg text-gray-600">
              Please provide your project information below.
              Our sales team will contact you as soon as possible.
            </p>
          </div>

          <form className="mt-14 rounded-3xl bg-white p-10 shadow-lg">

            {/* Product */}

            <div className="mb-8">
              <label className="mb-2 block font-semibold">
                Product Request *
              </label>

              <select className="w-full rounded-xl border border-gray-300 p-4">

                <option>Conveyor Chain</option>

                <option>Conveyor Belt</option>

                <option>Roller / Idler / Belt Cleaner</option>

                <option>Wear Parts</option>

                <option>Others</option>

              </select>
            </div>

            {/* Name */}

            <div className="mb-8">
              <label className="mb-2 block font-semibold">
                Full Name *
              </label>

              <input
                type="text"
                className="w-full rounded-xl border border-gray-300 p-4"
                placeholder="John Smith"
              />
            </div>

            {/* Company */}

            <div className="mb-8">
              <label className="mb-2 block font-semibold">
                Company *
              </label>

              <input
                type="text"
                className="w-full rounded-xl border border-gray-300 p-4"
                placeholder="ABC Cement Co., Ltd."
              />
            </div>

            {/* Email */}

            <div className="mb-8">
              <label className="mb-2 block font-semibold">
                Email *
              </label>

              <input
                type="email"
                className="w-full rounded-xl border border-gray-300 p-4"
                placeholder="example@company.com"
              />
            </div>

            {/* Date */}

            <div className="mb-8">
              <label className="mb-2 block font-semibold">
                Required Before
              </label>

              <input
                type="date"
                className="w-full rounded-xl border border-gray-300 p-4"
              />
            </div>

            {/* Requirement */}

            <div className="mb-8">
              <label className="mb-2 block font-semibold">
                Any Specific Requirement
              </label>

              <textarea
                rows={6}
                className="w-full rounded-xl border border-gray-300 p-4"
                placeholder="Please describe your requirement..."
              />
            </div>

            {/* Attachment */}

            <div className="mb-10">
              <label className="mb-2 block font-semibold">
                Attachments
              </label>

              <input
                type="file"
                multiple
                accept=".pdf,.doc,.docx,.xls,.xlsx,.dwg,.step,.stp,.jpg,.jpeg,.png"
                className="w-full rounded-xl border border-gray-300 p-4"
              />

              <p className="mt-3 text-sm text-gray-500">
                You may upload up to 10 files (PDF, DWG, STEP, Excel, Images).
              </p>
            </div>

            {/* Submit */}

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
            >
              Submit RFQ
            </button>

          </form>

        </div>
      </section>
    </>
  );
}