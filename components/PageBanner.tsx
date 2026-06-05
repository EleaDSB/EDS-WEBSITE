import Image from "next/image";

type Props = {
  title: string;
  subtitle: string;
  image?: string;
};

export default function PageBanner({ title, subtitle, image }: Props) {
  return (
    <section
      className="relative pt-32 pb-20 px-6 overflow-hidden"
      style={image ? undefined : { background: "linear-gradient(135deg, #dc2f02 0%, #f48c06 100%)" }}
    >
      {image && (
        <>
          <Image src={image} alt="" fill priority className="object-cover" />
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: "rgba(0,0,0,0.5)" }} />
        </>
      )}

      <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full opacity-10 pointer-events-none" style={{ backgroundColor: "#ffba08" }} />
      <div className="absolute -bottom-16 -left-8 w-48 h-48 rounded-full opacity-10 pointer-events-none" style={{ backgroundColor: "#faa307" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">{title}</h1>
        <p className="text-lg max-w-xl" style={{ color: image ? "rgba(255,255,255,0.85)" : "#fff3e0" }}>{subtitle}</p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 48 C480 0 960 0 1440 48 L1440 48 L0 48 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
