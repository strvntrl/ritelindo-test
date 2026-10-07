import {
  ArrowRight,
  Box,
  CheckCircle2,
  MessageCircle,
  Ruler,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Konsultasikan kebutuhan",
    description:
      "Ceritakan jenis toko, ukuran ruangan, kebutuhan rak, dan konsep yang Anda inginkan melalui WhatsApp.",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Rancang layout toko",
    description:
      "Tim kami membantu menentukan konfigurasi rak dan memberikan gambaran layout 3D yang sesuai dengan ruang toko.",
  },
  {
    number: "03",
    icon: Box,
    title: "Tentukan paket",
    description:
      "Setelah layout sesuai, tentukan produk dan jumlah rak yang paling sesuai dengan kebutuhan serta budget Anda.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Produksi & pengiriman",
    description:
      "Pesanan diproses langsung dari pabrik kemudian dikirim dan dirakit sesuai area layanan yang tersedia.",
  },
];

export default function Process() {
  return (
    <section
      id="cara-kerja"
      className="overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
              Cara Kerja
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-4xl lg:text-5xl">
              Dari ruang kosong
              <br />
              <span className="text-neutral-400">
                sampai siap jual.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-neutral-500 lg:ml-auto lg:text-right">
            Tidak perlu menentukan semuanya sendiri. Kami membantu dari
            tahap konsultasi hingga kebutuhan rak siap digunakan.
          </p>

        </div>

        {/* PROCESS */}
        <div className="relative mt-14 sm:mt-16">

          {/* Desktop connecting line */}
          <div className="absolute left-[12.5%] right-[12.5%] top-8.5 hidden h-px bg-black/10 lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="relative"
                >

                  {/* Number / Icon */}
                  <div className="relative z-10 flex items-center justify-between lg:block">

                    <div className="flex h-17 w-17 items-center justify-center rounded-2xl border border-black/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-lg">
                      <Icon
                        size={24}
                        strokeWidth={1.7}
                      />
                    </div>

                    <span className="text-xs font-bold tracking-[0.15em] text-neutral-300 lg:absolute lg:left-20 lg:top-2">
                      {step.number}
                    </span>

                  </div>

                  {/* Text */}
                  <div className="mt-5 lg:mt-7">

                    <h3 className="text-lg font-bold tracking-tight text-neutral-950 sm:text-xl">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-500">
                      {step.description}
                    </p>

                  </div>

                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <div className="mt-6 hidden justify-end pr-4 lg:flex">
                      <ArrowRight
                        size={16}
                        className="text-neutral-300"
                      />
                    </div>
                  )}

                </article>
              );
            })}

          </div>
        </div>

        {/* CTA BANNER */}
        <div className="relative mt-16 overflow-hidden rounded-4xl bg-neutral-950 px-7 py-9 text-white sm:mt-20 sm:px-10 sm:py-11 lg:px-12">

          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -right-4 -top-8 h-40 w-40 rounded-full border border-white/10" />

          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                Tidak perlu bingung mulai dari mana
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Ceritakan toko yang ingin Anda bangun.
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/55">
                Konsultasi awal gratis. Tim kami akan membantu memahami
                kebutuhan ruang dan memberikan rekomendasi yang sesuai.
              </p>

            </div>

            <a
              href="https://wa.me/6280000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-neutral-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <MessageCircle size={18} />

              Mulai Konsultasi

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}

