import { ArrowUpRight, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between rounded-2xl border border-black/5 bg-white/90 px-4 shadow-sm backdrop-blur-md sm:px-6">

          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black text-sm font-bold text-white">
              R
            </div>

            <div className="leading-none">
              <span className="block text-sm font-bold tracking-tight">
                RITELINDO
              </span>

              <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                Retail Solution
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#produk"
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-black"
            >
              Produk
            </a>

            <a
              href="#layanan"
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-black"
            >
              Layanan
            </a>

            <a
              href="#cara-kerja"
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-black"
            >
              Cara Kerja
            </a>
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/6280000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800 md:flex"
          >
            Konsultasi Gratis
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Menu */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 md:hidden"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </nav>
      </div>
    </header>
  );
}