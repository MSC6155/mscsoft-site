import Link from "next/link";

export default async function Page({ params }: { params: Promise<{ locale: "tr" | "en" }> }) {
  const { locale } = await params;

  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">SAP {locale === "tr" ? "Destek & AMS" : "Support & AMS"}</h1>
      <p className="mt-3 max-w-3xl text-gray-700">
        {locale === "tr"
          ? "Canlı sistemlerin sürekliliğini sağlamak ve iyileştirme taleplerini yönetmek için SAP destek & AMS hizmetleri sunuyoruz."
          : "We provide SAP support and AMS services to ensure continuity and manage continuous enhancements."}
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <div className="text-lg font-semibold">{locale === "tr" ? "Kapsam" : "Scope"}</div>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
            <li>{locale === "tr" ? "Incident / problem yönetimi" : "Incident and problem management"}</li>
            <li>{locale === "tr" ? "Değişiklik & iyileştirme talepleri" : "Change and improvement requests"}</li>
            <li>{locale === "tr" ? "Performans ve stabilite çalışmaları" : "Performance and stability improvements"}</li>
            <li>{locale === "tr" ? "Periyodik kontrol ve raporlama" : "Periodic monitoring and reporting"}</li>
          </ul>
        </div>

        <div className="card p-6">
          <div className="text-lg font-semibold">{locale === "tr" ? "Yaklaşım" : "Approach"}</div>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-gray-700">
            <li>{locale === "tr" ? "SLA & iletişim kanalları" : "SLA and communication channels"}</li>
            <li>{locale === "tr" ? "Hızlı müdahale ve kök neden analizi" : "Fast response and root-cause analysis"}</li>
            <li>{locale === "tr" ? "Süreç iyileştirme ve planlı değişiklik" : "Process improvements and planned changes"}</li>
            <li>{locale === "tr" ? "Raporlama ve sürekli gelişim" : "Reporting and continuous improvement"}</li>
          </ol>
        </div>
      </div>

      <div className="mt-10 card p-8 md:flex md:items-center md:justify-between">
        <div>
          <div className="text-xl font-bold">
            {locale === "tr" ? "Destek modeli için görüşelim." : "Let’s discuss your support model."}
          </div>
          <div className="mt-1 text-sm text-gray-600">
            {locale === "tr" ? "Mevcut yapınızı değerlendirip öneri çıkarabiliriz." : "We can review your current setup and propose improvements."}
          </div>
        </div>
        <Link href={`/${locale}/contact`} className="btn btn-primary mt-6 md:mt-0">
          {locale === "tr" ? "İletişime Geç" : "Contact"}
        </Link>
      </div>
    </main>
  );
}
