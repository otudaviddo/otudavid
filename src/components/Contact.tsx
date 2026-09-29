import { site } from "@/config/site";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="w-full bg-nightSoft">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10">
        <div className="border-t border-ivory/15 pt-16">
          <h2 id="contact-title" className="font-serif text-2xl tracking-[0.3em]">{site.name}</h2>
          <p className="mt-2 text-xs uppercase tracking-[0.22em] text-ivory/60">{site.title}</p>

          <div className="mt-12 grid gap-12 md:grid-cols-3">
            <div className="space-y-2 text-ivory/85">
              <a href={site.phoneHref} className="block py-1 transition-colors duration-300 hover:text-steel">{site.phone}</a>
              <a href={`mailto:${site.email}`} className="block break-all py-1 transition-colors duration-300 hover:text-steel">{site.email}</a>
            </div>
            {site.addresses.map((a) => (
              <address key={a.label} className="not-italic text-ivory/85">
                <p className="mb-2 font-serif text-lg tracking-[0.1em] text-ivory">{a.label}</p>
                <p>{a.street}</p>
                <p>{a.postalCode} {a.city}</p>
              </address>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
