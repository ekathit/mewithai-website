export default function WhyChooseTH() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Why Choose MEWI
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            พันธมิตรที่คุณไว้วางใจ
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            เราผสานความเชี่ยวชาญด้านวิศวกรรม การจัดหาสินค้าจากผู้ผลิตที่น่าเชื่อถือ
            และการควบคุมคุณภาพ เพื่อตอบทุกโจทย์ด้านอุตสาหกรรม ลดความเสี่ยง
            เพิ่มประสิทธิภาพการดำเนินงาน และสร้างคุณค่าในระยะยาวให้กับธุรกิจของคุณ
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {/* Card 1 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="text-4xl">⚙️</div>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              การสนับสนุนด้านวิศวกรรม
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              ให้คำปรึกษาด้านวิศวกรรมและการเลือกใช้อุปกรณ์
              เพื่อให้เหมาะสมกับการใช้งานของแต่ละอุตสาหกรรม
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="text-4xl">🔍</div>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              การตรวจสอบคุณภาพ
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              ตรวจสอบและควบคุมคุณภาพ พร้อมประสานงานการตรวจสอบโดยหน่วยงานอิสระ
              ตามมาตรฐานสากล
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="text-4xl">🌍</div>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              เครือข่ายผู้ผลิตที่น่าเชื่อถือ
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              ร่วมงานกับผู้ผลิตและพันธมิตรที่ผ่านการคัดเลือก
              เพื่อส่งมอบสินค้าที่มีคุณภาพ ตรงตามมาตรฐาน และตอบโจทย์ความต้องการของลูกค้า
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="text-4xl">⚡</div>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              ตอบสนองที่รวดเร็ว
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              ให้บริการเสนอราคา ประสานงาน และสนับสนุนด้านเทคนิคอย่างรวดเร็ว
              เพื่อช่วยให้โครงการของคุณดำเนินไปได้อย่างต่อเนื่อง
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}