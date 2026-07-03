export default function Industries() {
  const industries = [
    { title: "Cement" },
    { title: "Biomass" },
    { title: "Pulp & Paper" },
    { title: "Palm Oil" },
    { title: "Sugar" },
    { title: "Mining" },
  ];

  return (
    <section
      id="industries"
      className="bg-gray-50 pt-8 pb-10 lg:pt-16 lg:pb-24"
    >
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
            procurement and reliable supply chain solutions.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-8">

          {industries.map((industry) => (

            <div
              key={industry.title}
              className="group relative overflow-hidden rounded-2xl shadow-md"
            >

              {/* Placeholder */}
              <div className="aspect-[4/3] bg-slate-300 transition duration-500 group-hover:scale-105">
                {/* ใส่รูปทีหลัง */}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

              {/* Title */}
              <div className="absolute inset-0 flex items-center justify-center">

                <h3 className="px-4 text-center text-xl font-bold text-white drop-shadow-lg lg:text-3xl">
                  {industry.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}