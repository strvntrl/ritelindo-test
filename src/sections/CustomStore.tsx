import {
  ArrowUpRight,
  Check,
  Maximize2,
  Sparkles,
} from "lucide-react";

const customFeatures = [
  "Menyesuaikan ukuran dan bentuk ruangan",
  "Konfigurasi rak sesuai alur toko",
  "Konsep toko lebih modern dan rapi",
  "Konsultasi kebutuhan sebelum produksi",
];

export default function CustomStore() {
  return (
    <section
      id="custom"
      className="overflow-hidden bg-[#f5f5f2] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* TOP CONTENT */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
              Custom & Interior
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-4xl lg:text-5xl">
              Toko Anda punya
              <br />
              <span className="text-neutral-400">
                karakter sendiri.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-neutral-600 lg:ml-auto lg:text-right">
            Tidak semua toko memiliki ukuran, bentuk ruangan, dan kebutuhan
            yang sama. Karena itu, kami menyediakan solusi yang dapat
            disesuaikan dengan kondisi toko Anda.
          </p>

        </div>

        {/* MAIN VISUAL */}
        <div className="relative mt-12 grid gap-5 lg:mt-16 lg:grid-cols-[1.25fr_0.75fr]">

          {/* BIG IMAGE */}
          <div className="group relative min-h-110 overflow-hidden rounded-4xl bg-neutral-200 sm:min-h-140">

            <img
              src="/images/projects/interior-toko.jpg"
              alt="Interior toko retail dengan rak modern"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.025]"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/5 to-transparent" />

            {/* Image label */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-5 text-white sm:bottom-8 sm:left-8 sm:right-8">

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  Retail Interior
                </p>

                <p className="mt-2 max-w-md text-xl font-bold leading-tight sm:text-2xl">
                  Ruang yang dirancang untuk membuat produk lebih menonjol.
                </p>
              </div>

              <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md sm:flex">
                <Maximize2 size={17} />
              </div>

            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col rounded-4xl bg-neutral-950 p-7 text-white sm:p-9 lg:p-10">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-neutral-950">
              <Sparkles size={21} />
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Lebih dari sekadar rak
            </p>

            <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              Buat toko terlihat lebih stylish & modern.
            </h3>

            <p className="mt-5 text-sm leading-6 text-white/55">
              Kami juga menyediakan jasa interior toko untuk membantu
              menciptakan ruang retail yang rapi, fungsional, dan
              sesuai dengan karakter brand Anda.
            </p>

            {/* Feature list */}
            <div className="mt-8 space-y-4">

              {customFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Check size={12} />
                  </div>

                  <span className="text-sm leading-5 text-white/75">
                    {feature}
                  </span>
                </div>
              ))}

            </div>

            <div className="mt-auto pt-10">

              <a
                href="https://wa.me/6280000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-bold text-white"
              >
                Diskusikan kebutuhan toko

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <div className="mt-3 h-px w-full bg-white/10" />

            </div>

          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-5 grid gap-5 sm:grid-cols-3">

          <div className="rounded-2xl bg-white p-6">
            <p className="text-2xl font-bold tracking-tight text-neutral-950">
              Custom
            </p>

            <p className="mt-2 text-sm leading-6 text-neutral-500">
              Menyesuaikan kebutuhan dan ukuran ruangan.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6">
            <p className="text-2xl font-bold tracking-tight text-neutral-950">
              Retail
            </p>

            <p className="mt-2 text-sm leading-6 text-neutral-500">
              Cocok untuk berbagai konsep toko dan bisnis.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6">
            <p className="text-2xl font-bold tracking-tight text-neutral-950">
              Project
            </p>

            <p className="mt-2 text-sm leading-6 text-neutral-500">
              Siap menangani kebutuhan retail dalam berbagai skala.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
