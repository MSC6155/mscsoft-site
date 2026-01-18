import Link from "next/link";

export default async function Page({ params }: { params: Promise<{ locale: "tr" | "en" }> }) {
  const { locale } = await params;

  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">
        {locale === "tr" ? "SAP Finans Modülleri Danışmanlığı" : "SAP Finance Consulting"}
      </h1>
      <p className="mt-3 max-w-3xl text-gray-700">
        {locale === "tr"
          ? "Finans süreçlerinin doğru yönetilmesi, raporlanması ve denetim uyumlu çalışması için SAP finans modüllerinde danışmanlık sunuyoruz."
          : "We support enterprise finance operations with sustainable SAP finance structures, accurate reporting and compliance-ready processes."}
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <div className="text-lg font-semibold">{locale === "tr" ? "Kapsam" : "Scope"}</div>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
            <li>{locale === "tr" ? "Finansal süreç yapılandırma" : "Finance process configuration"}</li>
            <li>{locale === "tr" ? "Raporlama ve kontrol mekanizmaları" : "Reporting and control mechanisms"}</li>
            <li>{locale === "tr" ? "Süreç standardizasyonu" : "Process standardization"}</li>
            <li>{locale === "tr" ? "Entegrasyon ve uyumluluk" : "Integration and compliance"}</li>
          </ul>
        </div>

        <div className="card p-6">
          <div className="text-lg font-semibold">{locale === "tr" ? "Yaklaşım" : "Approach"}</div>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-gray-700">
            <li>{locale === "tr" ? "Analiz & ihtiyaç belirleme" : "Discover & requirements"}</li>
            <li>{locale === "tr" ? "Tasarım & uygulama" : "Design & implement"}</li>
            <li>{locale === "tr" ? "Test & canlıya geçiş" : "Test & go-live"}</li>
            <li>{locale === "tr" ? "Canlı sonrası destek" : "Post go-live support"}</li>
          </ol>
        </div>
      </div>

      <div className="mt-10 card p-8 md:flex md:items-center md:justify-between">
        <div>
          <div className="text-xl font-bold">
            {locale === "tr" ? "Finans süreçlerinizi değerlendirelim." : "Let’s review your finance processes."}
          </div>
          <div className="mt-1 text-sm text-gray-600">
            {locale === "tr" ? "Kısa bir görüşme ile ihtiyaçlarınızı netleştirebiliriz." : "A short call helps clarify the best path forward."}
          </div>
        </div>
        <Link href={`/${locale}/contact`} className="btn btn-primary mt-6 md:mt-0">
          {locale === "tr" ? "İletişime Geç" : "Contact"}
        </Link>
      </div>
    </main>
  );
}
