type Props = { title: string; subtitle: string };

export default function PageBanner({ title, subtitle }: Props) {
  return (
    <section
      className="relative pt-32 pb-20 px-6 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #dc2f02 0%, #f48c06 100%)" }}
    >
      <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full opacity-10 pointer-events-none" style={{ backgroundColor: "#ffba08" }} />
      <div className="absolute -bottom-16 -left-8 w-48 h-48 rounded-full opacity-10 pointer-events-none" style={{ backgroundColor: "#faa307" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">{title}</h1>
        <p className="text-lg max-w-xl" style={{ color: "#fff3e0" }}>{subtitle}</p>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40 C360 0 1080 0 1440 40 L1440 40 L0 40 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
