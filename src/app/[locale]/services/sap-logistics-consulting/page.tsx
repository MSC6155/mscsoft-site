import Link from "next/link";

export default async function Page({ params }: { params: Promise<{ locale: "tr" | "en" }> }) {
  const { locale } = await params;

  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">
        {locale === "tr" ? "SAP Lojistik Modüller Danışmanlığı" : "SAP Logistics Consulting"}
      </h1>
      <p className="mt-3 max-w-3xl text-gray-700">
        {locale === "tr"
          ? "Kurumsal firmaların tedarik, stok, üretim ve satış süreçlerinde daha yüksek verim elde etmesi için SAP lojistik modüllerinde danışmanlık hizmetleri sunuyoruz."
          : "We provide SAP logistics module consulting to help enterprises manage procurement, inventory, production and sales processes efficiently."}
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <div className="text-lg font-semibold">{locale === "tr" ? "Kapsam" : "Scope"}</div>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
            <li>{locale === "tr" ? "Satın alma ve malzeme yönetimi süreçleri" : "Procurement & material management"}</li>
            <li>{locale === "tr" ? "Stok & depo yönetimi" : "Inventory & warehouse operations"}</li>
            <li>{locale === "tr" ? "Satış ve sevkiyat süreçleri" : "Sales and delivery processes"}</li>
            <li>{locale === "tr" ? "Üretim planlama ve operasyon takibi" : "Production planning and execution"}</li>
            <li>{locale === "tr" ? "Süreç iyileştirme ve raporlama" : "Process optimization and reporting"}</li>
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
            {locale === "tr" ? "Bu hizmet için görüşme planlayalım." : "Let’s discuss this service."}
          </div>
          <div className="mt-1 text-sm text-gray-600">
            {locale === "tr" ? "İhtiyacınızı dinleyip en doğru yaklaşımı belirleyelim." : "We’ll review your needs and propose the best approach."}
          </div>
        </div>
        <Link href={`/${locale}/contact`} className="btn btn-primary mt-6 md:mt-0">
          {locale === "tr" ? "İletişime Geç" : "Contact"}
        </Link>
      </div>
    </main>
  );
}
