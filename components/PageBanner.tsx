type Props = {
  title: string;
  subtitle: string;
};

export default function PageBanner({ title, subtitle }: Props) {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: "#03045e" }}>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{title}</h1>
        <p className="text-lg" style={{ color: "#90e0ef" }}>{subtitle}</p>
      </div>
    </section>
  );
}
