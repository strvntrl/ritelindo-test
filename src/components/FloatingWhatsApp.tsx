import { MessageCircle } from "lucide-react";

const whatsappNumber = "6280000000000";

const whatsappMessage = encodeURIComponent(
  "Halo Ritelindo, saya ingin konsultasi gratis untuk kebutuhan rak / setup toko."
);

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Konsultasi melalui WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#111111] text-white shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <MessageCircle size={23} />

      <span className="pointer-events-none absolute right-[calc(100%+10px)] hidden whitespace-nowrap rounded-full bg-[#111111] px-4 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition duration-200 group-hover:opacity-100 sm:block">
        Konsultasi Gratis
      </span>
    </a>
  );
}