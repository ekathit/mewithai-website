const industries = [
  {
    category: "Cement Industry",
    image: "/projects/cement.jpg",
    customers: [
      "SCG แก่งคอย",
      "SCG ทุ่งสง",
      "TPI Polene...",
    ],
  },
  {
    category: "Biomass Power Plant",
    image: "/projects/biomass.jpg",
    customers: [
      "Glow SPP2",
      "PPP Green Complex",
      "แม่เมาะ...",
    ],
  },
  {
    category: "Paper & Pulp",
    image: "/projects/paper.jpg",
    customers: [
      "SCG Packaging",
      "Siam Kraft Industry",
      "ปัญจพล...",
    ],
  },
  {
    category: "Mining & Quarry",
    image: "/projects/mining.jpg",
    customers: [
      "โรงโม่หินสานนท์",
      "Asia Cement Quarry...",
    ],
  },
];
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white pt-10 pb-24 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Projects
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Selected Projects
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            ตัวอย่างสินค้าและบริการที่เราเคยส่งมอบ
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {industries.map((item) => (
            <div
              key={item.category}
              className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="relative h-64">

                <Image
                  src={item.image}
                  alt={item.category}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-7">

                {/* Category */}

                <h3 className="text-2xl font-bold text-slate-900">
                  {item.category}
                </h3>

                <div className="mt-3 h-1 w-10 rounded bg-blue-600" />

                {/* Customers */}

                <ul className="mt-7 space-y-3">

                  {item.customers.map((customer) => (

                    <li
                      key={customer}
                      className="flex items-center text-[15px] text-slate-500"
                    >
                      <span className="mr-3 text-slate-400">
                        ▪
                      </span>

                      {customer}

                    </li>

                  ))}

                </ul>

              </div>

            </div>
          ))}

        </div>

        {/* View All */}

        <div className="mt-12 flex justify-end">

          <Link
            href="/projects"
            className="rounded-xl bg-blue-600 px-7 py-4 text-base font-semibold text-white transition hover:bg-blue-700"
          >
            View More Projects →
          </Link>

        </div>

      </div>
    </section>
  );
}