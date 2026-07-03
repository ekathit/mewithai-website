export default function SolutionsTH() {
  const solutions = [
    {
      title: "Industrial Chains",
      desc: "โซ่ลำเลียง โซ่ลาก และโซ่ Bucket Elevator สำหรับงานอุตสาหกรรมที่ต้องการความทนทานและความน่าเชื่อถือสูง",
    },
    {
      title: "Conveyor Belts",
      desc: "สายพานยางสำหรับอุตสาหกรรมเหมืองแร่ โรงปูน โรงไฟฟ้า ชีวมวล และงานลำเลียงวัสดุทุกประเภท",
    },
    {
      title: "Rollers",
      desc: "ลูกกลิ้งรองรับ ลูกกลิ้งกระแทก และลูกกลิ้งส่งกลับ ที่ออกแบบเพื่ออายุการใช้งานที่ยาวนาน",
    },
    {
      title: "Wear Parts",
      desc: "ผลิตและจัดหาชิ้นส่วนทดแทนสำหรับเครื่องจักรอุตสาหกรรม เพื่อยืดอายุการใช้งานและลด Downtime",
    },
    {
      title: "Engineering & Quality Control",
      desc: "ให้คำปรึกษาทางวิศวกรรม บริการตรวจสอบโดยบุคคลที่สาม และควบคุมคุณภาพก่อนส่งมอบ",
    },
    {
      title: "Global Sourcing",
      desc: "คัดเลือกผู้ผลิตที่มีคุณภาพ พร้อมบริหารจัดการการจัดซื้อ เพื่อให้ได้สินค้าที่เหมาะสมกับโครงการของคุณ",
    },
  ];

  return (
    <section
      id="solutions"
      className="bg-white pt-16 pb-6 lg:pt-24 lg:pb-20"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.2em] text-blue-600">
            OUR SOLUTIONS
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            ครบทุกความต้องการ
            <br className="sm:hidden" />
            เพื่ออุตสาหกรรมของคุณ
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            เราจัดหาอุปกรณ์อุตสาหกรรม พร้อมบริการด้านวิศวกรรม และการจัดซื้อ
            เพื่อช่วยเพิ่มความน่าเชื่อถือ ประสิทธิภาพ
            และความต่อเนื่องของการดำเนินงาน
          </p>

        </div>

        {/* Cards */}
        <div className="mt-10 lg:mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {solutions.map((item) => (

            <div
              key={item.title}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Image */}
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