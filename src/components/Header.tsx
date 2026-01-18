import Image from "next/image";
import Link from "next/link";
import CalendlyPopupButton from "@/components/CalendlyPopupButton";
import { SITE } from "@/config/site";

export default function Header({ locale }: { locale: "tr" | "en" }) {
  const t = {
    home: locale === "tr" ? "Ana Sayfa" : "Home",
    corporate: locale === "tr" ? "Kurumsal" : "Corporate",
    services: locale === "tr" ? "Hizmetler" : "Services",
    blog: locale === "tr" ? "Blog" : "Insights",
    contact: locale === "tr" ? "İletişim" : "Contact",
    meeting: locale === "tr" ? "Toplantı Planla" : "Schedule a Meeting",
  };

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100"
    style={{
    backgroundImage: "url(/backgrounds/header-wave.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
  >
      <div className="container flex items-center justify-between py-3">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt={`${SITE.name} logo`}
            width={140}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-blue-900 md:flex">
          <Link className="hover:opacity-80" href={`/${locale}`}>{t.home}</Link>
          <Link className="hover:opacity-80" href={`/${locale}/corporate`}>{t.corporate}</Link>
          <Link className="hover:opacity-80" href={`/${locale}/services`}>{t.services}</Link>
          <Link className="hover:opacity-80" href={`/${locale}/insights`}>{t.blog}</Link>
          <Link className="hover:opacity-80" href={`/${locale}/contact`}>{t.contact}</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={locale === "tr" ? "/en" : "/tr"}
            className="rounded-xl border px-3 py-2 text-xs font-semibold"
          >
            {locale === "tr" ? "EN" : "TR"}
          </Link>

          <CalendlyPopupButton
            label={t.meeting}
            className="btn btn-accent px-4 py-2"
          />
        </div>
      </div>
    </header>
  );
}
