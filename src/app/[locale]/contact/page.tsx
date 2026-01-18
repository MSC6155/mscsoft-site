import QuoteForm from "@/components/QuoteForm";
import CalendlyPopupButton from "@/components/CalendlyPopupButton";
import { SITE } from "@/config/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default async function ContactPage({ params }: { params: Promise<{ locale: "tr" | "en" }> }) {
  const { locale } = await params;

  const waQuick = buildWhatsAppLink({
    phone: SITE.whatsappPhone,
    message:
      locale === "tr"
        ? "Merhaba, MSCsoft ile SAP danışmanlığı hakkında görüşmek istiyorum."
        : "Hello, I would like to talk about SAP consulting with MSCsoft.",
  });

  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">{locale === "tr" ? "İletişim" : "Contact"}</h1>
      <p className="mt-3 max-w-3xl text-gray-700">
        {locale === "tr"
          ? "SAP projelerinizle ilgili ihtiyacınızı dinleyelim ve en uygun çözümü birlikte belirleyelim."
          : "Let’s discuss your SAP needs and define the best solution approach together."}
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <div className="text-sm text-gray-500">{locale === "tr" ? "Telefon" : "Phone"}</div>
          <a className="mt-1 block font-semibold hover:opacity-80" href={SITE.phoneHref}>
            {SITE.phone}
          </a>

          <div className="mt-4 text-sm text-gray-500">{locale === "tr" ? "E-posta" : "Email"}</div>
          <a className="mt-1 block font-semibold hover:opacity-80" href={SITE.emailHref}>
            {SITE.email}
          </a>

          <div className="mt-4 text-sm text-gray-500">{locale === "tr" ? "Adres" : "Location"}</div>
          <div className="mt-1 font-semibold">{SITE.location}</div>

          <div className="mt-6 flex flex-wrap gap-3">
            <CalendlyPopupButton
              label={locale === "tr" ? "Toplantı Planla" : "Schedule a Meeting"}
              className="btn btn-accent px-4 py-2"
            />
            <a className="btn btn-outline" href={SITE.phoneHref}>
              {locale === "tr" ? "Bizi Arayın" : "Call Us"}
            </a>
            <a className="btn btn-outline" href={waQuick} target="_blank" rel="noreferrer">
              {locale === "tr" ? "WhatsApp" : "WhatsApp"}
            </a>
          </div>
        </div>

        <div className="card p-6">
          <div className="text-lg font-semibold">{locale === "tr" ? "Teklif Talebi" : "Request a Quote"}</div>
          <p className="mt-1 text-sm text-gray-600">
            {locale === "tr"
              ? "Formu doldurun; WhatsApp hazır mesajla açılacaktır."
              : "Fill out the form; WhatsApp will open with a pre-filled message."}
          </p>
          <QuoteForm locale={locale} />
        </div>
      </div>
    </main>
  );
}
