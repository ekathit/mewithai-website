export default function Industries() {
  const industries = [
    {
      title: "Cement",
      products: [
        "Industrial Chains",
        "Conveyor Belts",
        "Wear Parts",
        "Rollers",
        "Engineering & QC",
      ],
    },
    {
      title: "Biomass Power Plant",
      products: [
        "Industrial Chains",
        "Conveyor Belts",
        "Rollers",
        "Inspection",
        "Global Sourcing",
      ],
    },
    {
      title: "Pulp & Paper",
      products: [
        "Industrial Chains",
        "Conveyor Belts",
        "Rollers",
        "Wear Parts",
        "Engineering & QC",
      ],
    },
    {
      title: "Palm Oil Mill",
      products: [
        "Industrial Chains",
        "Conveyor Belts",
        "Rollers",
        "Wear Parts",
      ],
    },
    {
      title: "Sugar Mill",
      products: [
        "Industrial Chains",
        "Conveyor Belts",
        "Rollers",
        "Engineering & QC",
      ],
    },
    {
      title: "Mining & Quarry",
      products: [
        "Conveyor Belts",
        "Rollers",
        "Wear Parts",
        "Global Sourcing",
      ],
    },
  ];

  return (
    <section id="industries" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Industries
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Industries We Serve
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Supporting heavy industries with engineering, industrial products,
            procurement, and reliable supply chain solutions.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Placeholder Image */}
              <div className="h-56 bg-slate-200" />

              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {industry.title}
                </h3>

                <div className="mt-6 flex flex-wrap gap-2">
                  {industry.products.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}