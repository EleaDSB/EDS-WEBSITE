"use client";

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = { type: "success" | "error" | ""; message: string };

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: "success", message: "Message envoyé ! Je vous réponds sous 24h." });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.error || "Une erreur est survenue. Veuillez réessayer." });
      }
    } catch {
      setStatus({ type: "error", message: "Une erreur est survenue. Veuillez réessayer." });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors"
    + " border-[#90e0ef] focus:border-[#00b4d8] focus:ring-[#00b4d8]";

  return (
    <section id="contact" className="py-24 px-6" style={{ backgroundColor: "#caf0f8" }}>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl p-8 border shadow-sm" style={{ borderColor: "#90e0ef" }}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "#03045e" }}>Nom</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Jean Dupont" className={inputClass} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "#03045e" }}>Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="jean@exemple.com" className={inputClass} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "#03045e" }}>Sujet</label>
                <input type="text" name="subject" value={form.subject} onChange={handleChange} required placeholder="Création d'un site vitrine" className={inputClass} />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "#03045e" }}>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Décrivez votre projet, vos besoins et vos objectifs..." className={inputClass + " resize-none"} />
              </div>

              {status.message && (
                <div
                  className={`text-sm px-4 py-3 rounded-xl border ${
                    status.type === "success"
                      ? "bg-[#caf0f8] border-[#90e0ef] text-[#0077b6]"
                      : "bg-red-50 border-red-100 text-red-600"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl text-white font-medium text-sm transition-opacity hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{ backgroundColor: "#0077b6" }}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Envoi en cours…
                  </>
                ) : (
                  "Envoyer le message"
                )}
              </button>
            </form>
        </div>
      </div>
    </section>
  );
}
