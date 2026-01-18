import Link from "next/link";
import CalendlyPopupButton from "@/components/CalendlyPopupButton";
import { SITE } from "@/config/site";

export default function Hero({ locale }: { locale: "tr" | "en" }) {
  const t = {
    title:
      locale === "tr"
        ? "SAP projelerinizi güvenle yönetin"
        : "Manage your SAP projects with confidence",
    desc:
      locale === "tr"
        ? "Kurumsal ölçekte SAP Lojistik, Finans ve Ariba danışmanlığı ile süreçlerinizi hızlandırın."
        : "Enterprise-grade SAP Logistics, Finance and Ariba consulting to streamline your business processes.",
    quote: locale === "tr" ? "Teklif Al" : "Get a Quote",
    meeting: locale === "tr" ? "Toplantı Planla" : "Schedule a Meeting",
    call: locale === "tr" ? "Bizi Arayın" : "Call Us",
    tagline:
      locale === "tr"
        ? "Kurumsal müşteriler için süreç odaklı ve sürdürülebilir SAP çözümleri"
        : "Process-driven, sustainable SAP solutions for enterprise customers",
    focusTitle: locale === "tr" ? "Odak Alanlarımız" : "Focus Areas",
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url(/backgrounds/hero-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Okunabilirlik için overlay */}
      <div className="absolute inset-0 bg-white/80" />

      <div className="relative container py-16 md:py-24">
        {/* ORTALI metin */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-blue-900 md:text-6xl">
            {t.title}
          </h1>

          <p className="mt-5 text-base text-gray-100 md:text-lg">
            {t.desc}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href={`/${locale}/contact`} className="btn btn-primary">
              {t.quote}
            </Link>

            <CalendlyPopupButton label={t.meeting} className="btn btn-outline" />

            <a href={SITE.phoneHref} className="btn btn-outline">
              {t.call}
            </a>
          </div>

          <div className="mt-6 text-sm font-semibold text-orange-500">
            {t.tagline}
          </div>
        </div>

        {/* Odak Alanlarımız - altta ortalı kart */}
        <div className="mx-auto mt-10 max-w-4xl">
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 shadow-sm md:p-8">
            <div className="text-center text-xl font-extrabold uppercase  tracking-widest text-orange-500">
              {t.focusTitle}
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-gray-400/90 p-4">
                <div className="font-semibold text-blue-900">
                  {locale === "tr" ? "SAP Lojistik" : "SAP Logistics"}
                </div>
                <div className="mt-1 text-sm text-sky-200">
                  {locale === "tr"
                    ? "MM, SD, PP, WM/EWM gibi modüllerde süreç danışmanlığı."
                    : "Process consulting across logistics modules."}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-gray-400/90 p-4">
                <div className="font-semibold text-blue-900">
                  {locale === "tr" ? "SAP Finans" : "SAP Finance"}
                </div>
                <div className="mt-1 text-sm text-sky-200">
                  {locale === "tr"
                    ? "FI/CO süreçleri, raporlama ve uyumluluk."
                    : "FI/CO processes, reporting and compliance."}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-gray-400/90 p-4">
                <div className="font-semibold text-blue-900">SAP Ariba</div>
                <div className="mt-1 text-sm text-sky-200">
                  {locale === "tr"
                    ? "Satın alma dijital dönüşümü ve tedarikçi yönetimi."
                    : "Procurement digitalization and supplier management."}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}