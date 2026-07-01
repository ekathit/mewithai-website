"use client";

import CountUp from "react-countup";

const stats = [
  {
    value: 6,
    suffix: "+",
    title: "Global",
    subtitle: "Partners",
  },
  {
    value: 4,
    title: "Industries",
    subtitle: "Served",
  },
  {
    value: 30,
    suffix: "+",
    title: "Customers",
    subtitle: "Served",
  },
  {
    value: 100,
    suffix: "%",
    title: "Engineering &",
    subtitle: "Quality Focused",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-16 border-t border-white/20 pt-10">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">

        {stats.map((item) => (
          <div key={item.title} className="text-center">

            <div className="text-4xl font-extrabold text-white md:text-5xl">
              <CountUp
                end={item.value}
                duration={1.5}
                enableScrollSpy
                scrollSpyOnce
              />
              {item.suffix}
            </div>

            <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-blue-200">
              {item.title}
            </p>

            <p className="text-sm uppercase tracking-wider text-blue-200">
              {item.subtitle}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}