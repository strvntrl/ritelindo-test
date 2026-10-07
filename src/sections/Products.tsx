import { ArrowUpRight } from "lucide-react";
import { products } from "../data/products";

export default function Products() {
  return (
    <section
      id="produk"
      className="bg-[#f5f5f2] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
              Produk & Paket
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-[-0.035em] text-neutral-950 sm:text-4xl lg:text-5xl">
              Rak yang menyesuaikan
              <br />
              <span className="text-neutral-400">
                kebutuhan toko Anda.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-neutral-500 lg:text-right">
            Mulai dari pembelian satuan hingga paket setup toko.
            Konsultasikan kebutuhan Anda untuk mendapatkan rekomendasi
            konfigurasi yang sesuai.
          </p>

        </div>

        {/* FEATURED PRODUCT */}
        <div className="mt-12 overflow-hidden rounded-4xl bg-white shadow-sm sm:mt-16">

          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">

            {/* IMAGE */}
            <div className="relative min-h-90 overflow-hidden bg-neutral-200 sm:min-h-120">

              <img
                src={products[0].image}
                alt={products[0].name}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6">

                <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-neutral-800 backdrop-blur-sm">
                  {products[0].category}
                </span>

              </div>

            </div>

            {/* CONTENT */}
            <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
                  Featured Product
                </p>

                <h3 className="mt-4 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
                  {products[0].name}
                </h3>

                <p className="mt-5 max-w-lg text-base leading-7 text-neutral-500">
                  {products[0].description}
                </p>

                {/* Feature list */}
                <div className="mt-8 space-y-3">

                  {[
                    "Konfigurasi dapat disesuaikan",
                    "Cocok untuk berbagai jenis retail",
                    "Finishing dan ukuran dapat dikonsultasikan",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-black" />

                      <span className="text-sm font-medium text-neutral-700">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>

              </div>

              <a
                href="https://wa.me/6280000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 inline-flex w-fit items-center gap-2 border-b border-black pb-1.5 text-sm font-bold text-neutral-950"
              >
                Konsultasikan kebutuhan rak

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

            </div>

          </div>
        </div>

        {/* OTHER PRODUCTS */}
        <div className="mt-5 grid gap-5 md:grid-cols-2">

          {products.slice(1).map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-3xl bg-white"
            >

              {/* IMAGE */}
              <div className="relative aspect-16/10 overflow-hidden bg-neutral-200">

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.4)_0%,transparent_100%)]" />

                <span className="absolute bottom-5 left-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm">
                  {product.category}
                </span>

              </div>

              {/* CONTENT */}
              <div className="p-6 sm:p-7">

                <div className="flex items-start justify-between gap-5">

                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-neutral-950">
                      {product.name}
                    </h3>

                    <p className="mt-2 max-w-md text-sm leading-6 text-neutral-500">
                      {product.description}
                    </p>
                  </div>

                  <a
                    href="https://wa.me/6280000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Konsultasi ${product.name}`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:bg-black group-hover:text-white"
                  >
                    <ArrowUpRight size={17} />
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>

        {/* BOTTOM CTA */}
        <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-black/10 bg-white p-6 sm:flex-row sm:items-center sm:p-7">

          <div>
            <p className="text-sm font-bold text-neutral-950">
              Punya ukuran atau kebutuhan khusus?
            </p>

            <p className="mt-1 text-sm text-neutral-500">
              Tidak perlu menyesuaikan toko dengan rak. Raknya yang kami sesuaikan.
            </p>
          </div>

          <a
            href="https://wa.me/6280000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800"
          >
            Konsultasi Custom
            <ArrowUpRight size={16} />
          </a>

        </div>

      </div>
    </section>
  );
}
