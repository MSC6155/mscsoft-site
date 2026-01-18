import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: "tr" | "en" }>;
}) {
  const { locale } = await params;

  return (
    <>
      <div className="border-b bg-sky-100" 
           style={{
           backgroundImage: "url(/backgrounds/header-wave.png)",
           backgroundSize: "cover",
           backgroundPosition: "center",
           backgroundRepeat: "no-repeat",
  }}> 
        <div className="container flex items-center justify-between py-2 text-xs text-gray-600">
          <div className="flex items-center gap-4">
            <a className="text-blue-900 hover:opacity-80" href="tel:+905069511161">+90 506 951 11 61</a>
            <a className="text-blue-900 hover:opacity-80" href="mailto:info@mscsoft.com.tr">info@mscsoft.com.tr</a>
          </div>
          <div className="font-semibold text-blue-900">{locale === "tr" ? "Kurumsal SAP Danışmanlığı" : "Enterprise SAP Consulting"}</div>
        </div>
      </div>
<Header locale={locale} />

<div className="bg-sky-50">
  {children}
</div>

<Footer locale={locale} />

    </>
  );
}
