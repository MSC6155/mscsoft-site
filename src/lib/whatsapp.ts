export function buildWhatsAppLink(params: { phone: string; message: string }) {
  const text = encodeURIComponent(params.message);
  return `https://wa.me/${params.phone}?text=${text}`;
}
