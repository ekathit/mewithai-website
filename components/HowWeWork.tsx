import Image from "next/image";

export default function HowWeWork() {
  return (
    <section className="pt-4 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Image
          src="/images/how-we-work-numbers.png"
          alt="How We Work"
          width={1536}
          height={1024}
          className="w-full rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
}