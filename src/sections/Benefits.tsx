import {
  Box,
  Cuboid,
  Factory,
  Ruler,
  Truck,
  Wrench,
} from "lucide-react";

const benefits = [
  {
    icon: Cuboid,
    number: "01",
    title: "Layout 3D Gratis",
    description:
      "Sebelum membeli, Anda bisa berkonsultasi dan mendapatkan gambaran layout toko agar rak sesuai dengan alur ruang.",
  },
  {
    icon: Ruler,
    number: "02",
    title: "Bisa Custom",
    description:
      "Ukuran, konfigurasi, dan kebutuhan rak dapat disesuaikan dengan kondisi serta ukuran ruangan toko Anda.",
  },
  {
    icon: Factory,
    number: "03",
    title: "Langsung dari Pabrik",
    description:
      "Produk langsung dari pabrik sehingga harga lebih kompetitif untuk kebutuhan retail maupun pembelian dalam jumlah besar.",
  },
  {
    icon: Truck,
    number: "04",
    title: "Free Ongkir Jawa-Bali",
    description:
      "Nikmati fasilitas free ongkir untuk pengiriman ke wilayah Jawa dan Bali sesuai ketentuan yang berlaku.",
  },
  {
    icon: Wrench,
    number: "05",
    title: "Free Perakitan",
    description:
      "Untuk wilayah Jawa Timur, Jawa Tengah, dan DIY, tersedia fasilitas perakitan gratis.",
  },
  {
    icon: Box,
    number: "06",
    title: "Dari Satuan hingga Proyek",
    description:
      "Melayani kebutuhan satuan, paket setup toko, hingga kebutuhan proyek retail dalam skala besar.",
  },
];

export default function Benefits() {
  return (
    <section
      id="layanan"
      className="bg-white py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
              Kenapa Ritelindo?
            </p>

            <h2 className="mt-4 max-w-lg text-3xl font-bold leading-tight tracking-[-0.035em] text-neutral-950 sm:text-4xl lg:text-5xl">
              Bukan sekadar
              <br />
              <span className="text-neutral-400">
                jual rak.
              </span>
            </h2>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
              Kami membantu Anda menyiapkan kebutuhan toko dari awal,
              mulai dari konsultasi ruang, pemilihan rak, hingga toko
              siap digunakan.
            </p>
          </div>

        </div>

        {/* FEATURED BENEFIT */}
        <div className="mt-14 overflow-hidden rounded-4xl bg-neutral-950 text-white sm:mt-16">

          <div className="grid lg:grid-cols-[1fr_1.15fr]">

            {/* LEFT */}
            <div className="relative flex min-h-85 flex-col justify-between overflow-hidden p-7 sm:p-10 lg:p-12">

              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/10" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-neutral-950">
                  <Cuboid size={22} />
                </div>

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                  Layanan Utama
                </p>

                <h3 className="mt-3 max-w-md text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                  Konsultasi toko
                  <br />
                  sebelum membeli.
                </h3>
              </div>

              <p className="relative mt-10 max-w-md text-sm leading-6 text-white/60">
                Tidak yakin harus menggunakan rak seperti apa?
                Konsultasikan kebutuhan toko Anda dan dapatkan
                gambaran layout 3D secara gratis.
              </p>
            </div>

            {/* RIGHT */}
            <div className="relative min-h-85 overflow-hidden bg-neutral-800">

              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[48px_48px]" />

              <div className="absolute inset-0 flex items-center justify-center p-8">

                <div className="relative w-full max-w-md">

                  {/* Fake 3D layout representation */}
                  <div className="relative aspect-4/3 rounded-2xl border border-white/10 bg-white/4 p-5 backdrop-blur-sm">

                    <div className="absolute left-[12%] top-[15%] h-[65%] w-[16%] rounded-md border border-white/20 bg-white/8" />

                    <div className="absolute left-[36%] top-[15%] h-[65%] w-[16%] rounded-md border border-white/20 bg-white/8" />

                    <div className="absolute left-[60%] top-[15%] h-[65%] w-[16%] rounded-md border border-white/20 bg-white/8" />

                    <div className="absolute bottom-[10%] left-[12%] right-[24%] h-1.25 rounded-full bg-white/20" />

                    <div className="absolute right-[8%] top-[25%] h-[45%] w-[8%] rounded-md border border-dashed border-white/20" />

                    {/* Measurement line */}
                    <div className="absolute left-[12%] right-[24%] top-[8%] flex items-center gap-2">
                      <div className="h-px flex-1 bg-white/20" />

                      <span className="text-[9px] font-medium uppercase tracking-wider text-white/40">
                        Layout
                      </span>

                      <div className="h-px flex-1 bg-white/20" />
                    </div>

                  </div>

                  <div className="absolute -bottom-5 -right-2 rounded-xl border border-white/10 bg-white px-4 py-3 text-neutral-950 shadow-2xl sm:-right-5">
                    <p className="text-[10px] uppercase tracking-wider text-neutral-400">
                      Consultation
                    </p>

                    <p className="mt-1 text-sm font-bold">
                      100% Gratis
                    </p>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

        {/* BENEFIT GRID */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {benefits.slice(1).map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.number}
                className="group rounded-3xl border border-black/8 bg-[#f7f7f5] p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-neutral-100 hover:shadow-xl hover:shadow-black/5 sm:p-7"
              >
                <div className="flex items-start justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-neutral-900 shadow-sm">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <span className="text-xs font-semibold tracking-widest text-neutral-300">
                    {benefit.number}
                  </span>

                </div>

                <h3 className="mt-7 text-xl font-bold tracking-tight text-neutral-950">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-500">
                  {benefit.description}
                </p>

                <div className="mt-6 h-px w-0 bg-black transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}
