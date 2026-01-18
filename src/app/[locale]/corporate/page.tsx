export default async function Corporate({ params }: { params: Promise<{ locale: "tr" | "en" }> }) {
  const { locale } = await params;

  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">{locale === "tr" ? "Kurumsal" : "Corporate"}</h1>
      <p className="mt-3 max-w-3xl text-gray-700">
        {locale === "tr"
          ? "MSCsoft, kurumsal firmaların iş süreçlerini daha verimli, ölçülebilir ve sürdürülebilir hale getirmek için SAP danışmanlığı sunar. SAP lojistik modüller başta olmak üzere, SAP finans süreçleri ve SAP Ariba çözümleri kapsamında uçtan uca danışmanlık ve destek hizmetleri sağlar."
          : "MSCsoft provides SAP consulting for enterprise organizations to improve efficiency and build sustainable process structures. With strong expertise in SAP Logistics modules, we also support Finance processes and SAP Ariba solutions."}
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="card p-6">
          <div className="text-lg font-semibold">{locale === "tr" ? "Vizyon" : "Vision"}</div>
          <p className="mt-2 text-sm text-gray-600">
            {locale === "tr"
              ? "SAP ekosisteminde kurumsal müşteriler için güvenilir, sürdürülebilir ve yüksek katma değer üreten bir çözüm ortağı olmak."
              : "To become a trusted SAP consulting partner delivering sustainable value for enterprise customers."}
          </p>
        </div>
        <div className="card p-6">
          <div className="text-lg font-semibold">{locale === "tr" ? "Misyon" : "Mission"}</div>
          <p className="mt-2 text-sm text-gray-600">
            {locale === "tr"
              ? "Süreç odaklı yaklaşım ve kaliteli teslimat standardı ile müşterilerimizin operasyonel hedeflerine ulaşmasına katkı sağlamak."
              : "To enable clients to achieve operational excellence through process-oriented consulting and high-quality delivery."}
          </p>
        </div>
      </div>

      <div className="mt-10 card p-6">
        <div className="text-lg font-semibold">{locale === "tr" ? "Kalite Yaklaşımımız" : "Quality Approach"}</div>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
          <li>{locale === "tr" ? "Süreç bazlı analiz ve ihtiyaç yönetimi" : "Process analysis and requirement management"}</li>
          <li>{locale === "tr" ? "Şeffaf planlama ve dokümantasyon" : "Transparent planning and documentation"}</li>
          <li>{locale === "tr" ? "Test senaryoları ve canlı geçiş planlaması" : "Testing and go-live planning"}</li>
          <li>{locale === "tr" ? "Canlı sonrası hızlı destek ve iyileştirme" : "Post go-live support and continuous improvement"}</li>
          <li>{locale === "tr" ? "Bilgi güvenliği ve gizlilik hassasiyeti" : "Strong confidentiality and information security"}</li>
        </ul>
      </div>
    </main>
  );
}
