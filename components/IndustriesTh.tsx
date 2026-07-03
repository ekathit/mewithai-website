export default function IndustriesTH() {
  const industries = [
    { title: "โรงงานปูนซีเมนต์" },
    { title: "โรงไฟฟ้าชีวมวล" },
    { title: "อุตสาหกรรมเยื่อและกระดาษ" },
    { title: "โรงงานปาล์มน้ำมัน" },
    { title: "โรงงานน้ำตาล" },
    { title: "เหมืองแร่" },
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
            อุตสาหกรรมที่เราให้บริการ
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            เราให้บริการในหลากหลายอุตสาหกรรมหนัก
          </p>

        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-8">

          {industries.map((industry) => (

            <div
              key={industry.title}
              className="group relative overflow-hidden rounded-2xl shadow-md"
            >

              {/* Image Placeholder */}
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