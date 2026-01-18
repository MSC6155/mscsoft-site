import Link from "next/link";

export default async function Services({ params }: { params: Promise<{ locale: "tr" | "en" }> }) {
  const { locale } = await params;

  const items = [
    {
      href: `/${locale}/services/sap-logistics-consulting`,
      title: locale === "tr" ? "SAP Lojistik Modüller Danışmanlığı" : "SAP Logistics Consulting",
      desc: locale === "tr" ? "Lojistik süreçlerinizde hız, kontrol ve izlenebilirlik." : "Improve speed, control and traceability across logistics processes.",
    },
    {
      href: `/${locale}/services/sap-finance-consulting`,
      title: locale === "tr" ? "SAP Finans Modülleri Danışmanlığı" : "SAP Finance Consulting",
      desc: locale === "tr" ? "Doğru raporlama ve sürdürülebilir finans yapısı." : "Accurate reporting and sustainable finance structures.",
    },
    {
      href: `/${locale}/services/sap-ariba-consulting`,
      title: locale === "tr" ? "SAP Ariba Danışmanlığı" : "SAP Ariba Consulting",
      desc: locale === "tr" ? "Satın alma dijitalleşmesi ve tedarikçi yönetimi." : "Procurement digitalization and supplier management.",
    },
    {
      href: `/${locale}/services/sap-support-ams`,
      title: locale === "tr" ? "SAP Destek & AMS" : "SAP Support & AMS",
      desc: locale === "tr" ? "Canlı sistemler için sürdürülebilir destek ve iyileştirme." : "Sustainable support and continuous improvements for live systems.",
    },
  ];

  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">{locale === "tr" ? "Hizmetler" : "Services"}</h1>
      <p className="mt-3 max-w-3xl text-gray-700">
        {locale === "tr"
          ? "Kurumsal müşteriler için SAP lojistik modüller başta olmak üzere finans ve Ariba çözümlerinde danışmanlık ve destek sunuyoruz."
          : "We provide enterprise SAP consulting and support across Logistics, Finance and Ariba solutions."}
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {items.map((s) => (
          <Link key={s.href} href={s.href} className="card p-6 hover:shadow-md transition">
            <div className="text-lg font-semibold">{s.title}</div>
            <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            <div className="mt-4 text-sm font-semibold text-brand-blue">{locale === "tr" ? "Detay" : "Details"} →</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
