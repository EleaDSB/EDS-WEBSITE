import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #dc2f02 0%, #f48c06 100%)" }}
    >
      {/* Blobs décoratifs */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ backgroundColor: "#ffba08" }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ backgroundColor: "#faa307" }}
      />

      <div className="relative z-10 text-center max-w-lg">
        {/* Numéro 404 */}
        <div
          className="text-[10rem] md:text-[14rem] font-black leading-none tracking-tighter mb-4"
          style={{ color: "rgba(255,255,255,0.15)" }}
        >
          404
        </div>

        {/* Message */}
        <div className="-mt-8 md:-mt-12 mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Page introuvable
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)" }} className="text-lg leading-relaxed">
            Cette page n&apos;existe pas ou a été déplacée.<br />
            Pas de panique, tout le reste du site est là !
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105"
            style={{ backgroundColor: "white", color: "#dc2f02" }}
          >
            ← Retour à l&apos;accueil
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:bg-white/10"
            style={{ border: "1.5px solid rgba(255,255,255,0.4)", color: "white" }}
          >
            Me contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
