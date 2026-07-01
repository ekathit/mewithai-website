export default function Solutions() {
  const solutions = [
    {
      icon: "⛓️",
      title: "Industrial Chain",
      desc: "Conveyor, drag and bucket elevator chains for demanding industrial applications.",
    },
    {
      icon: "🛞",
      title: "Conveyor Belt",
      desc: "Rubber conveyor belts for mining, cement, biomass and heavy industries.",
    },
    {
      icon: "⚙️",
      title: "Rollers",
      desc: "Impact, carrying and return rollers with reliable performance and long service life.",
    },
    {
      icon: "🔩",
      title: "Wear Parts",
      desc: "Custom wear parts, fabrication and replacement components for industrial equipment.",
    },
    {
      icon: "🛠️",
      title: "Engineering & QC",
      desc: "Engineering support, third-party inspection and quality control services.",
    },
    {
      icon: "🌍",
      title: "Global Sourcing",
      desc: "Worldwide supplier sourcing, qualification and procurement support.",
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            OUR SOLUTIONS
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Industrial Solutions
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600">
            We deliver engineering, procurement and industrial solutions that
            improve reliability, productivity and operational efficiency for
            heavy industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {solutions.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {item.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
