import Image from "next/image";

export default function Contact() {
  const partners = [
    { name: "Bando Chain", file: "bandologo.png", width: 120 },
    { name: "DRB Industrial", file: "drblogo.png", width: 220 },
    { name: "Joyroll", file: "Joyroll.png", width: 250 },
    { name: "Mackchain", file: "mackchainlogo.avif", width: 180 },
    { name: "Qadri Group", file: "qadrilogo.jpg", width: 90 },
    { name: "Shining", file: "shininglogo.png", width: 120 },
  ];

  return (
    <section id="contact" className="pt-12 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            We are ready to support your industrial projects and procurement requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 mt-14 items-center">
          <div>
            <h3 className="text-2xl font-bold">MEWI Thai International Supply</h3>
            <p className="text-blue-600 font-semibold mt-2">
              Authorized Representative
            </p>

            <div className="mt-8 space-y-6 text-gray-700">
              <div>
                <p className="font-semibold">📍 Address</p>
                <p>
                  Bangkok, Thailand
                  <br />
                  (Office address to be updated)
                </p>
              </div>

              <div>
                <p className="font-semibold">☎ Phone</p>
                <p>+66 xx xxx xxxx</p>
              </div>

              <div>
                <p className="font-semibold">✉ Email</p>
                <p>sales@mewithai.store</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.192534567232!2d100.5463433!3d13.9094125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e28359f8ff9a6d%3A0x7242dd9ad9238a1c!2z4LiV4Li24LiB KaitakIOC4iuC4seC5iSA1!5e0!3m2!1sth!2sth!4v1719642000000!5m2!1sth!2sth"
              width="100%"
              height="420"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Our Manufacturing Partners
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Trusted manufacturing partners across Asia.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="h-36 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center p-8"
              >
                <Image
                  src={`/images/${partner.file}`}
                  alt={partner.name}
                  width={partner.width}
                  height={80}
                  className="object-contain max-h-20 opacity-80 hover:opacity-100 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 MEWI Thai International Supply. All Rights Reserved.</p>
          <p className="mt-3 md:mt-0">
            Industrial Supply & Engineering Solutions
          </p>
        </div>

      </div>
    </section>
  );
}