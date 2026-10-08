import { ArrowRight, Check, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#f5f5f2] pt-28 sm:pt-32"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-black/3 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-black/3 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="max-w-2xl">

            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3.5 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-green-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-600">
                Solusi Retail Langsung dari Pabrik
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[2.7rem] font-bold leading-[1.02] tracking-[-0.045em] text-neutral-950 sm:text-5xl lg:text-[4.25rem]">
              Bangun Toko
              <br />

              <span className="text-neutral-500">
                yang Siap Jual.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
              Paket rak minimarket dan rak toko dari pabrik, lengkap dengan
              konsultasi serta layout 3D gratis. Bisa custom mengikuti ukuran
              dan kebutuhan ruang toko Anda.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <a
                href="https://wa.me/6280000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-800 hover:shadow-xl"
              >
                <MessageCircle size={18} />

                Konsultasi WA Gratis

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#produk"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-semibold text-neutral-800 transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-md"
              >
                Lihat Paket Rak
              </a>

            </div>

            {/* Quick Benefits */}
            <div className="mt-9 grid grid-cols-1 gap-3 border-t border-black/10 pt-6 sm:grid-cols-2">

              <div className="flex items-center gap-2.5">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-white">
                  <Check size={13} strokeWidth={3} />
                </div>

                <span className="text-sm font-medium text-neutral-700">
                  Free Konsultasi & Layout 3D
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-white">
                  <Check size={13} strokeWidth={3} />
                </div>

                <span className="text-sm font-medium text-neutral-700">
                  Free Ongkir Jawa-Bali
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-white">
                  <Check size={13} strokeWidth={3} />
                </div>

                <span className="text-sm font-medium text-neutral-700">
                  Bisa Custom Ukuran
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-white">
                  <Check size={13} strokeWidth={3} />
                </div>

                <span className="text-sm font-medium text-neutral-700">
                  Langsung dari Pabrik
                </span>
              </div>

            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">

            {/* Main image */}
            <div className="relative overflow-hidden rounded-4xl bg-neutral-200 shadow-2xl shadow-black/10">

              <img
                src="/images/hero/hero-rak.png"
                alt="Rak minimarket dan interior toko Ritelindo"
                className="aspect-4/3 w-full object-cover"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

              {/* Floating info */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-6 sm:left-6 sm:right-6">

                <div className="rounded-2xl border border-white/20 bg-black/65 px-4 py-3 text-white backdrop-blur-md">
                  <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/60">
                    Retail Solution
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    Dari layout hingga siap jual
                  </p>
                </div>

                <div className="hidden rounded-full bg-white px-4 py-2.5 text-xs font-bold text-neutral-900 shadow-lg sm:block">
                  Custom Available
                </div>

              </div>
            </div>

            {/* Small floating card */}
            <div className="absolute -bottom-14 -left-3 hidden rounded-2xl border border-black/5 bg-white p-4 shadow-xl sm:-left-6 sm:block">
              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
                  <span className="text-lg">3D</span>
                </div>

                <div>
                  <p className="text-xs text-neutral-500">
                    Layout toko
                  </p>

                  <p className="text-sm font-bold text-neutral-900">
                    Gratis konsultasi
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
