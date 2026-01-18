import Link from "next/link";
import { SITE } from "@/config/site";

export default function Footer({ locale }: { locale: "tr" | "en" }) {
  const t = {
    tagline:
      locale === "tr"
        ? "SAP Lojistik, Finans ve Ariba çözümlerinde kurumsal danışmanlık ve destek."
        : "Enterprise SAP consulting and support for Logistics, Finance and Ariba.",
    links: locale === "tr" ? "Bağlantılar" : "Links",
    contact: locale === "tr" ? "İletişim" : "Contact",
    privacy: locale === "tr" ? "Gizlilik" : "Privacy",
    kvkk: "KVKK",
  };

  return (
    // <footer className="mt-16 border-t">
    <footer className="bg-orange-500 text-sky-100">
      <div className="container grid gap-8 py-10 md:grid-cols-3">
        <div>
          <div className="text-sky-300 text-lg font-semibold">{SITE.name}</div>
          <p className="text-sky-300 mt-2 text-sm text-gray-600">{t.tagline}</p>
        </div>

        <div>
          <div className="text-sky-300 text-sm font-semibold">{t.links}</div>
          <div className="mt-3 grid gap-2 text-sm">
            <Link className="text-sky-300 hover:opacity-80" href={`/${locale}/corporate`}>{locale === "tr" ? "Kurumsal" : "Corporate"}</Link>
            <Link className="text-sky-300 hover:opacity-80" href={`/${locale}/services`}>{locale === "tr" ? "Hizmetler" : "Services"}</Link>
            <Link className="text-sky-300 hover:opacity-80" href={`/${locale}/insights`}>{locale === "tr" ? "Blog" : "Insights"}</Link>
            <Link className="text-sky-300 hover:opacity-80" href={`/${locale}/contact`}>{locale === "tr" ? "İletişim" : "Contact"}</Link>
          </div>
        </div>

        <div>
          <div className="text-sky-300 text-sm font-semibold">{t.contact}</div>
          <div className="text-sky-300 mt-3 grid gap-2 text-sm">
            <a className="text-sky-300 hover:opacity-80" href={SITE.phoneHref}>{SITE.phone}</a>
            <a className="text-sky-300 hover:opacity-80" href={SITE.emailHref}>{SITE.email}</a>
            <div className="text-sky-300 text-gray-600">{SITE.location}</div>
            <div className="text-sky-300 mt-2 flex gap-3 text-xs text-gray-500">
              <span>{t.kvkk}</span>
              <span>•</span>
              <span>{t.privacy}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-900">
        <div className="text-sky-300 container py-4 text-xs text-gray-500">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
