export default async function Insights({ params }: { params: Promise<{ locale: "tr" | "en" }> }) {
  const { locale } = await params;

  const posts = locale === "tr"
    ? [
        "SAP Lojistik Süreçlerinde Verimlilik Nasıl Artırılır?",
        "SAP Ariba ile Satın Alma Süreçlerinde Dijital Dönüşüm",
        "SAP Canlı Sistemlerde Destek Modeli (AMS) Nasıl Kurulur?",
      ]
    : [
        "How to Improve Efficiency in SAP Logistics Processes",
        "Digital Procurement Transformation with SAP Ariba",
        "How to Set Up an SAP AMS Support Model",
      ];

  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">{locale === "tr" ? "Blog" : "Insights"}</h1>
      <p className="mt-3 max-w-3xl text-gray-700">
        {locale === "tr"
          ? "Kurumsal SAP projeleriyle ilgili içgörü ve deneyimlerimizi paylaşıyoruz."
          : "Insights and best practices for enterprise SAP programs."}
      </p>

      <div className="mt-8 grid gap-4">
        {posts.map((p) => (
          <div key={p} className="card p-6">
            <div className="font-semibold">{p}</div>
            <div className="mt-1 text-sm text-gray-600">
              {locale === "tr" ? "Yakında" : "Coming soon"}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
