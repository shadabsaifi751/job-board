import { FileText, Briefcase, Building2 } from "lucide-react";

export default function Hero({ mainFilter, toggleMainFilter }) {
  return (
    <section className="max-w-[800px] mt-16 mb-12 mx-0 animate-fadeIn">
      <h1 className="text-[2.5rem] md:text-[3.5rem] leading-[1.5] md:leading-[1.1] font-bold tracking-[-0.03em] mb-6 text-gray-900">
        Find top jobs for web designers and developers.
      </h1>
      <p className="text-[1rem] md:text-[1.125rem] text-gray-500 max-w-[600px] mb-8 leading-relaxed">
        Hiring? Connect with over 11,000 talented web designers and developers
        available for full-time, part-time, or freelance opportunities.
      </p>

      <div className="flex flex-wrap gap-4">
        {[
          { label: "Web Design", icon: FileText },
          { label: "Web Development", icon: Briefcase },
          { label: "Web Entry", icon: Building2 },
        ].map(({ label, icon: Icon }) => (
          <button
            key={label}
            className={`flex items-center gap-2 py-2.5 px-5 border rounded-lg font-semibold text-sm cursor-pointer transition-all ${
              mainFilter === label
                ? "bg-white border-gray-200 shadow-md text-gray-900"
                : "border-transparent bg-gray-100 text-gray-900 hover:bg-gray-200"
            }`}
            onClick={() => toggleMainFilter(label)}
          >
            <Icon size={18} />
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}
