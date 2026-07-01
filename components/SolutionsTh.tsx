export default function SolutionsTH() {
  return (
    <section id="solutions" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Our Solutions
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            ครบทุกความต้องการ เพื่ออุตสาหกรรมของคุณ
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            เราจัดหาอุปกรณ์อุตสาหกรรม พร้อมบริการด้านวิศวกรรม
            และการจัดซื้อ เพื่อช่วยเพิ่มความน่าเชื่อถือ
            ประสิทธิภาพ และความต่อเนื่องของการดำเนินงาน
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {/* Chain */}
          <div className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-6 h-44 rounded-xl bg-slate-200" />

            <h3 className="text-2xl font-semibold text-gray-900">
              Industrial Chains
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              โซ่ลำเลียง โซ่ลาก และโซ่ Bucket Elevator
              สำหรับงานอุตสาหกรรมที่ต้องการความทนทานและความน่าเชื่อถือสูง
            </p>
          </div>

          {/* Belt */}
          <div className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-6 h-44 rounded-xl bg-slate-200" />

            <h3 className="text-2xl font-semibold text-gray-900">
              Conveyor Belts
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              สายพานยางสำหรับอุตสาหกรรมเหมืองแร่
              โรงปูน โรงไฟฟ้า ชีวมวล และงานลำเลียงวัสดุทุกประเภท
            </p>
          </div>

          {/* Roller */}
          <div className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-6 h-44 rounded-xl bg-slate-200" />

            <h3 className="text-2xl font-semibold text-gray-900">
              Rollers
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              ลูกกลิ้งรองรับ ลูกกลิ้งกระแทก
              และลูกกลิ้งส่งกลับ ที่ออกแบบเพื่ออายุการใช้งานที่ยาวนาน
            </p>
          </div>

          {/* Wear Parts */}
          <div className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-6 h-44 rounded-xl bg-slate-200" />

            <h3 className="text-2xl font-semibold text-gray-900">
              Wear Parts
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              ผลิตและจัดหาชิ้นส่วนทดแทน
              สำหรับเครื่องจักรอุตสาหกรรม
              เพื่อยืดอายุการใช้งานและลด Downtime
            </p>
          </div>

          {/* Engineering */}
          <div className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-6 h-44 rounded-xl bg-slate-200" />

            <h3 className="text-2xl font-semibold text-gray-900">
              Engineering & Quality Control
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              ให้คำปรึกษาทางวิศวกรรม
              บริการตรวจสอบโดยบุคคลที่สาม
              และควบคุมคุณภาพก่อนส่งมอบ
            </p>
          </div>

          {/* Global Sourcing */}
          <div className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-6 h-44 rounded-xl bg-slate-200" />

            <h3 className="text-2xl font-semibold text-gray-900">
              Global Sourcing
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              คัดเลือกผู้ผลิตที่มีคุณภาพ
              พร้อมบริหารจัดการการจัดซื้อ
              เพื่อให้ได้สินค้าที่เหมาะสมกับโครงการของคุณ
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}