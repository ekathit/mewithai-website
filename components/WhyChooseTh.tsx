export default function WhyChooseTH() {
  return (
    <section className="bg-white py-12 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            WHY CHOOSE MEWI
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            พันธมิตรที่คุณไว้วางใจ
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600 lg:text-lg">
            เราผสานความเชี่ยวชาญด้านวิศวกรรม
            การจัดหาจากผู้ผลิตที่เชื่อถือได้
            การควบคุมคุณภาพ และการตอบสนองที่รวดเร็ว
            เพื่อช่วยลดความเสี่ยง เพิ่มประสิทธิภาพ
            และสร้างคุณค่าให้ธุรกิจของคุณในระยะยาว
          </p>

        </div>

        {/* Cards */}
        <div className="mt-10 lg:mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          {/* Card 1 */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 lg:p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="text-3xl lg:text-4xl">
              ⚙️
            </div>

            <h3 className="mt-4 text-lg font-semibold text-gray-900 lg:mt-6 lg:text-xl">
              การสนับสนุนด้านวิศวกรรม
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600 lg:mt-4 lg:text-base lg:leading-7">
              ให้คำปรึกษาและช่วยเลือกอุปกรณ์
              ให้เหมาะสมกับการใช้งานของแต่ละอุตสาหกรรม
            </p>

          </div>

          {/* Card 2 */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 lg:p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="text-3xl lg:text-4xl">
              🔍
            </div>

            <h3 className="mt-4 text-lg font-semibold text-gray-900 lg:mt-6 lg:text-xl">
              การตรวจสอบคุณภาพ
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600 lg:mt-4 lg:text-base lg:leading-7">
              ควบคุมคุณภาพและประสานงาน
              การตรวจสอบจากหน่วยงานอิสระ
              ตามมาตรฐานสากล
            </p>

          </div>

          {/* Card 3 */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 lg:p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="text-3xl lg:text-4xl">
              🌍
            </div>

            <h3 className="mt-4 text-lg font-semibold text-gray-900 lg:mt-6 lg:text-xl">
              ผู้ผลิตที่เชื่อถือได้
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600 lg:mt-4 lg:text-base lg:leading-7">
              ทำงานร่วมกับผู้ผลิตและพันธมิตร
              ที่ผ่านการคัดเลือก เพื่อส่งมอบสินค้า
              ที่มีคุณภาพและเชื่อถือได้
            </p>

          </div>

          {/* Card 4 */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 lg:p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="text-3xl lg:text-4xl">
              ⚡
            </div>

            <h3 className="mt-4 text-lg font-semibold text-gray-900 lg:mt-6 lg:text-xl">
              ตอบสนองอย่างรวดเร็ว
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600 lg:mt-4 lg:text-base lg:leading-7">
              เสนอราคา ประสานงาน
              และสนับสนุนด้านเทคนิค
              อย่างรวดเร็วตลอดโครงการ
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}