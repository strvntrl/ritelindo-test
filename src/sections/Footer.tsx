import {
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const whatsappNumber = "6280000000000";

const whatsappMessage = encodeURIComponent(
  "Halo Ritelindo, saya ingin konsultasi gratis untuk kebutuhan rak / setup toko."
);

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f2] px-6 pb-28 pt-16 sm:px-8 lg:px-12 lg:pb-16">
      <div className="mx-auto max-w-7xl">
        {/* Main footer */}
        <div className="grid gap-12 border-b border-black/10 pb-12 md:grid-cols-[1.5fr_1fr_1fr] lg:gap-20">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#111111] text-sm font-bold text-white">
                R
              </div>

              <div>
                <div className="text-sm font-bold tracking-[0.12em]">
                  RITELINDO
                </div>
                <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/40">
                  Retail Solution
                </div>
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-black/55">
              Solusi rak, setup, custom, dan interior toko untuk membantu
              bisnis retail memiliki ruang yang lebih rapi, fungsional, dan
              siap digunakan.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black transition-opacity hover:opacity-60"
            >
              Konsultasi via WhatsApp
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-black/40">
              Navigasi
            </p>

            <nav className="flex flex-col gap-3">
              <a
                href="#home"
                className="w-fit text-sm text-black/65 transition-colors hover:text-black"
              >
                Home
              </a>

              <a
                href="#layanan"
                className="w-fit text-sm text-black/65 transition-colors hover:text-black"
              >
                Layanan
              </a>

              <a
                href="#produk"
                className="w-fit text-sm text-black/65 transition-colors hover:text-black"
              >
                Produk
              </a>

              <a
                href="#cara-kerja"
                className="w-fit text-sm text-black/65 transition-colors hover:text-black"
              >
                Cara Kerja
              </a>

              <a
                href="#konsultasi"
                className="w-fit text-sm text-black/65 transition-colors hover:text-black"
              >
                Konsultasi
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-black/40">
              Hubungi Kami
            </p>

            <div className="space-y-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5">
                  <MessageCircle size={17} />
                </div>

                <div>
                  <p className="text-sm font-semibold">WhatsApp</p>
                  <p className="text-xs text-black/45">
                    Konsultasi gratis
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="group flex items-center gap-3"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5">
                  <FaInstagram size={17} />
                </div>

                <div>
                  <p className="text-sm font-semibold">Instagram</p>
                  <p className="text-xs text-black/45">
                    Lihat project kami
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="group flex items-center gap-3"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5">
                  <FaLinkedinIn size={17} />
                </div>

                <div>
                  <p className="text-sm font-semibold">LinkedIn</p>
                  <p className="text-xs text-black/45">
                    Ritelindo Group
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 pt-6 text-xs text-black/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Ritelindo Group. All rights reserved.
          </p>

          <p>
            Retail Solution · Rak · Setup Toko · Interior
          </p>
        </div>
      </div>
    </footer>
  );
}