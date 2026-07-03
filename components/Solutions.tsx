export default function Solutions() {
  const solutions = [
    {
      title: "Industrial Chains",
      desc: "Reliable conveyor, drag and bucket elevator chains for cement, biomass and heavy industries.",
    },
    {
      title: "Conveyor Belts",
      desc: "Durable rubber conveyor belts designed for reliable material handling across demanding industries.",
    },
    {
      title: "Rollers",
      desc: "High-performance conveyor rollers engineered for long service life and reduced maintenance.",
    },
    {
      title: "Wear Parts",
      desc: "Custom wear parts and replacement components manufactured for harsh industrial environments.",
    },
    {
      title: "Engineering & QC",
      desc: "Engineering support, product verification and third-party inspection to ensure quality and compliance.",
    },
    {
      title: "Global Sourcing",
      desc: "Worldwide sourcing and procurement support through carefully selected manufacturing partners.",
    },
  ];

  return (
    <section id="solutions" className="bg-white pt-16 pb-6 lg:pt-24 lg:pb-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-blue-600">
            OUR SOLUTIONS
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Industrial Solutions
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            We deliver engineering, procurement and industrial solutions that
            improve reliability, productivity and operational efficiency for
            heavy industries.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {solutions.map((item) => (

            <div
              key={item.title}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Image Placeholder */}
              <div className="aspect-[16/9] bg-slate-200">
                {/* ใส่รูปทีหลัง */}
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">

                <h3 className="text-xl font-bold text-gray-900 lg:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}