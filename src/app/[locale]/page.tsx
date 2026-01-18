import Hero from "@/components/Hero";
import Link from "next/link";

export default async function Home({ params }: { params: Promise<{ locale: "tr" | "en" }> }) {
  const { locale } = await params;

  const t = {
    servicesTitle: locale === "tr" ? "Hizmetler" : "Services",
    whyTitle: locale === "tr" ? "Neden MSCsoft?" : "Why MSCsoft?",
    modelTitle: locale === "tr" ? "Çalışma Modelimiz" : "How We Work",
    confidentialityTitle: locale === "tr" ? "Gizlilik" : "Confidentiality",
    ctaTitle:
      locale === "tr"
        ? "SAP projeniz için 30 dakikalık ön görüşme planlayalım."
        : "Let’s schedule a 30-minute intro call for your SAP roadmap.",
    ctaBtn: locale === "tr" ? "İletişime Geç" : "Contact",
  };

  return (
    <main>
      <Hero locale={locale} />
      <section className="bg-sky-50 py-10">
      <section className="container py-10">
        <h2 className="text-2xl font-bold">{t.whyTitle}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[{
             title: locale === "tr" ? "Kurumsal proje deneyimi" : "Enterprise project experience",
             desc: locale === "tr" ? "Kurumsal ölçekli SAP projelerinde uçtan uca teslimat yaklaşımı." : "End-to-end delivery approach for enterprise SAP programs.",
          },{
            title: locale === "tr" ? "Süreç odaklı analiz" : "Process-driven analysis",
            desc: locale === "tr" ? "İhtiyacı netleştirip doğru çözüm tasarımını hedefleriz." : "We clarify requirements and design the right solution architecture.",
          },{
            title: locale === "tr" ? "Dokümantasyon & test" : "Documentation & testing",
            desc: locale === "tr" ? "Kalite standardı için dokümantasyon ve test yönetimi." : "Documentation and testing management to meet quality standards.",
          },{
            title: locale === "tr" ? "Sürdürülebilir destek" : "Sustainable support",
            desc: locale === "tr" ? "Canlı sistemlerde süreklilik ve iyileştirme." : "Continuity and improvements for live systems.",
          }].map((c) => (
            <div key={c.title} className="card p-6">
              <div className="font-semibold">{c.title}</div>
              <p className="mt-2 text-sm text-gray-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-10">
        <h2 className="text-2xl font-bold">{t.modelTitle}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[{
            step: "01",
            title: locale === "tr" ? "Analiz" : "Discover",
            desc: locale === "tr" ? "Mevcut durum ve hedeflerin netleştirilmesi." : "Clarify current state and target outcomes.",
          },{
            step: "02",
            title: locale === "tr" ? "Tasarım & Uygulama" : "Design & Implement",
            desc: locale === "tr" ? "Uyarlama, geliştirme ve test süreçleri." : "Configuration, development and testing cycles.",
          },{
            step: "03",
            title: locale === "tr" ? "Canlı & Destek" : "Go-live & Support",
            desc: locale === "tr" ? "Devreye alma ve sürekli iyileştirme." : "Go-live management and continuous improvements.",
          }].map((s) => (
            <div key={s.step} className="card p-6">
              <div className="text-xs font-semibold text-gray-500">{s.step}</div>
              <div className="mt-2 font-semibold">{s.title}</div>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-10">
        <h2 className="text-2xl font-bold">{t.confidentialityTitle}</h2>
        <div className="mt-4 card p-6">
          <p className="text-sm text-gray-700">
            {locale === "tr"
              ? "Kurumsal projelerde gizlilik sözleşmeleri kapsamında bazı müşteri ve proje bilgilerini açık şekilde paylaşamayabiliyoruz. Bununla birlikte, farklı sektörlerde birçok kurumsal SAP projesinde aktif rol almış bir ekip olarak hizmet veriyoruz."
              : "Due to confidentiality agreements, we may not publicly share certain client names and project details. However, our team has been actively involved in numerous enterprise SAP projects across multiple industries."}
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            {[locale === "tr" ? "Üretim" : "Manufacturing", locale === "tr" ? "Perakende" : "Retail", locale === "tr" ? "Lojistik" : "Logistics", locale === "tr" ? "Hizmet" : "Services"].map((b) => (
              <span key={b} className="rounded-full border px-3 py-1 text-gray-600">{b}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="container py-12">
        <div className="card p-8 md:flex md:items-center md:justify-between">
          <div>
            <div className="text-xl font-bold">{t.ctaTitle}</div>
            <div className="mt-1 text-sm text-gray-600">
              {locale === "tr" ? "İhtiyacınızı dinleyelim ve yol haritanızı birlikte netleştirelim." : "We’ll review your needs and define the best next steps together."}
            </div>
          </div>
          <Link href={`/${locale}/contact`} className="btn btn-primary mt-6 md:mt-0">
            {t.ctaBtn}
          </Link>
        </div>
      </section>
      </section>
    </main>
  );
}
