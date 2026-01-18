import Link from "next/link";

export default async function Page({ params }: { params: Promise<{ locale: "tr" | "en" }> }) {
  const { locale } = await params;

  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">SAP Ariba {locale === "tr" ? "Danışmanlığı" : "Consulting"}</h1>
      <p className="mt-3 max-w-3xl text-gray-700">
        {locale === "tr"
          ? "SAP Ariba çözümleri ile satın alma süreçlerinin dijitalleşmesini, tedarikçi yönetiminin güçlenmesini ve operasyonların şeffaflaşmasını hedefliyoruz."
          : "We help enterprises digitalize procurement operations, enhance supplier management and increase transparency through SAP Ariba solutions."}
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <div className="text-lg font-semibold">{locale === "tr" ? "Kapsam" : "Scope"}</div>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
            <li>{locale === "tr" ? "Satın alma süreç danışmanlığı" : "Procurement process consulting"}</li>
            <li>{locale === "tr" ? "Tedarikçi & katalog yönetimi" : "Supplier & catalog management"}</li>
            <li>{locale === "tr" ? "Onay akışları ve kontrol mekanizmaları" : "Approval workflows and controls"}</li>
            <li>{locale === "tr" ? "Entegrasyon danışmanlığı" : "Integration consulting"}</li>
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
            {locale === "tr" ? "Ariba yol haritanızı birlikte netleştirelim." : "Let’s align on your Ariba roadmap."}
          </div>
          <div className="mt-1 text-sm text-gray-600">
            {locale === "tr" ? "Kısa bir görüşme ile kapsam ve yaklaşımı belirleyelim." : "A short meeting helps define scope and approach."}
          </div>
        </div>
        <Link href={`/${locale}/contact`} className="btn btn-primary mt-6 md:mt-0">
          {locale === "tr" ? "İletişime Geç" : "Contact"}
        </Link>
      </div>
    </main>
  );
}
