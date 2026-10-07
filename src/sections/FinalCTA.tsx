import {
  ArrowUpRight,
  Check,
  MessageCircle,
  Ruler,
  Sparkles,
} from "lucide-react";

const whatsappNumber = "6280000000000";

const whatsappMessage = encodeURIComponent(
  "Halo Ritelindo, saya ingin konsultasi gratis untuk kebutuhan rak / setup toko. Saya ingin mendapatkan informasi mengenai paket, ukuran, dan layout toko."
);

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export default function FinalCTA() {
  return (
    <section
      id="konsultasi"
      className="relative overflow-hidden bg-[#111111] px-6 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          {/* Left */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-white/70">
              <Sparkles size={14} />
              KONSULTASI GRATIS
            </div>

            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
              Toko Anda punya ukuran.
              <br />
              <span className="text-white/45">Kami bantu cari solusinya.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
              Ceritakan kebutuhan toko, ukuran ruangan, atau target setup yang
              Anda inginkan. Tim Ritelindo siap membantu dari konsultasi,
              layout 3D, sampai kebutuhan rak dan interior toko.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#111111] transition duration-300 hover:-translate-y-1 hover:bg-white/90 sm:px-7 sm:py-4"
            >
              <MessageCircle size={19} />

              Konsultasi WA Gratis

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Right */}
          <div className="lg:pl-10">
            <div className="border-t border-white/15 pt-6">
              <p className="mb-6 text-sm font-medium text-white/40">
                Apa yang bisa Anda konsultasikan?
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 border-b border-white/10 pb-4">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Check size={17} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold">
                      Paket rak & setup toko
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-white/50">
                      Diskusikan kebutuhan rak berdasarkan jenis dan ukuran
                      toko.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 border-b border-white/10 pb-4">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Ruler size={17} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold">
                      Custom ukuran & layout
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-white/50">
                      Sesuaikan konfigurasi rak dengan kondisi ruangan toko
                      Anda.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Sparkles size={17} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold">
                      Interior toko modern
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-white/50">
                      Bahas konsep interior agar toko lebih rapi, stylish,
                      dan fungsional.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Small reassurance */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm leading-6 text-white/50">
                Tidak harus langsung membeli.{" "}
                <span className="font-medium text-white">
                  Konsultasi dan layout awal gratis
                </span>{" "}
                untuk membantu Anda menentukan kebutuhan toko.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}