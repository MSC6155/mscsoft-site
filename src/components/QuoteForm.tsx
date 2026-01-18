"use client";

import { useState } from "react";
import { SITE } from "@/config/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function QuoteForm({ locale }: { locale: "tr" | "en" }) {
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(locale === "tr" ? "SAP Lojistik" : "SAP Logistics");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const waMessage =
      locale === "tr"
        ? `Merhaba MSCsoft,\nTeklif talep ediyorum.\n\nAd Soyad: ${fullName}\nŞirket: ${company}\nE-posta: ${email}\nTelefon: ${phone}\nİlgilendiğim hizmet: ${service}\n\nMesaj: ${message}`
        : `Hello MSCsoft,\nI would like to request a quote.\n\nFull Name: ${fullName}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\nMessage: ${message}`;

    const url = buildWhatsAppLink({ phone: SITE.whatsappPhone, message: waMessage });
    window.open(url, "_blank");
  };

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-3">
      <div className="grid gap-3 md:grid-cols-2">
        <input
          className="rounded-2xl border p-3"
          placeholder={locale === "tr" ? "Ad Soyad" : "Full Name"}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          className="rounded-2xl border p-3"
          placeholder={locale === "tr" ? "Şirket" : "Company"}
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <input
          className="rounded-2xl border p-3"
          placeholder={locale === "tr" ? "E-posta" : "Email"}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="rounded-2xl border p-3"
          placeholder={locale === "tr" ? "Telefon" : "Phone"}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <select className="rounded-2xl border p-3" value={service} onChange={(e) => setService(e.target.value)}>
        {locale === "tr" ? (
          <>
            <option>SAP Lojistik</option>
            <option>SAP Finans</option>
            <option>SAP Ariba</option>
            <option>SAP Destek & AMS</option>
          </>
        ) : (
          <>
            <option>SAP Logistics</option>
            <option>SAP Finance</option>
            <option>SAP Ariba</option>
            <option>SAP Support & AMS</option>
          </>
        )}
      </select>

      <textarea
        className="rounded-2xl border p-3"
        rows={4}
        placeholder={locale === "tr" ? "Mesajınız" : "Your message"}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button className="btn btn-primary" type="submit">
        {locale === "tr" ? "Teklif İste (WhatsApp)" : "Request a Quote (WhatsApp)"}
      </button>

      <p className="text-xs text-gray-500">
        {locale === "tr"
          ? "Gönder butonuna tıklayınca WhatsApp hazır mesajla açılır; mesajı siz gönderirsiniz."
          : "Clicking submit opens WhatsApp with a pre-filled message; you send it manually."}
      </p>
    </form>
  );
}
