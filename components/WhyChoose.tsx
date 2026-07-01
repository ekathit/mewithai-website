export default function WhyChoose() {
  const features = [
    {
      icon: "⚙️",
      title: "Engineering Support",
      desc: "Application engineering and technical consultation.",
    },
    {
      icon: "🔍",
      title: "Quality Inspection",
      desc: "Third-party inspection and quality verification.",
    },
    {
      icon: "🌍",
      title: "Global Supplier Network",
      desc: "Qualified manufacturers from worldwide partners.",
    },
    {
      icon: "⚡",
      title: "Fast Response",
      desc: "Quick quotation and technical support.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            WHY CHOOSE MEWI
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Your Reliable Industrial Partner
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            We combine engineering expertise, reliable sourcing and quality
            assurance to deliver industrial solutions that reduce risk,
            improve efficiency and create long-term value.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-16">
          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition"
            >
              <div className="text-5xl">{item.icon}</div>

              <h3 className="mt-6 text-2xl font-bold">
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