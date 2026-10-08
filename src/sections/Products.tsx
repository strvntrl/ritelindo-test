import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { products } from "../data/products";
import Reveal from "../components/Reveal";
import { RevealGroup, RevealItem } from "../components/RevealGroup";

const whatsappNumber = "6280000000000";

const whatsappMessage = encodeURIComponent(
  "Halo Ritelindo, saya ingin konsultasi gratis untuk kebutuhan rak / setup toko."
);

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export default function Products() {
  return (
    <section
      id="produk"
      className="bg-[#f5f5f2] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* HEADER */}
        <Reveal y={35}>
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
        </Reveal>

        {/* FEATURED PRODUCT */}
        <Reveal y={45} delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-4xl bg-white shadow-sm sm:mt-16">

            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">

              {/* IMAGE */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative min-h-90 overflow-hidden bg-neutral-200 sm:min-h-120"
              >

                <img
                  src={products[0].image}
                  alt={products[0].name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.45,
                  }}
                  className="absolute bottom-6 left-6"
                >
                  <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-neutral-800 backdrop-blur-sm">
                    {products[0].category}
                  </span>
                </motion.div>

              </motion.div>

              {/* CONTENT */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.75,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col justify-between p-7 sm:p-10 lg:p-12"
              >

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

                  {/* FEATURE LIST */}
                  <RevealGroup
                    className="mt-8 space-y-3"
                    delay={0.35}
                    stagger={0.1}
                  >
                    {[
                      "Konfigurasi dapat disesuaikan",
                      "Cocok untuk berbagai jenis retail",
                      "Finishing dan ukuran dapat dikonsultasikan",
                    ].map((item) => (
                      <RevealItem key={item}>
                        <div className="flex items-center gap-3">

                          <motion.span
                            initial={{
                              scale: 0,
                            }}
                            whileInView={{
                              scale: 1,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 0.3,
                            }}
                            className="h-1.5 w-1.5 rounded-full bg-black"
                          />

                          <span className="text-sm font-medium text-neutral-700">
                            {item}
                          </span>

                        </div>
                      </RevealItem>
                    ))}
                  </RevealGroup>

                </div>

                <motion.a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.55,
                  }}
                  whileHover={{
                    x: 3,
                  }}
                  className="group mt-10 inline-flex w-fit items-center gap-2 border-b border-black pb-1.5 text-sm font-bold text-neutral-950"
                >
                  Konsultasikan kebutuhan rak

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </motion.a>

              </motion.div>

            </div>
          </div>
        </Reveal>

        {/* OTHER PRODUCTS */}
        <RevealGroup
          className="mt-5 grid gap-5 md:grid-cols-2"
          delay={0.1}
          stagger={0.15}
        >

          {products.slice(1).map((product) => (
            <RevealItem key={product.id}>
              <article className="group overflow-hidden rounded-3xl bg-white">

                {/* IMAGE */}
                <div className="relative aspect-16/10 overflow-hidden bg-neutral-200">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />

                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.4)_0%,transparent_100%)]" />

                  <motion.span
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.25,
                    }}
                    className="absolute bottom-5 left-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm"
                  >
                    {product.category}
                  </motion.span>

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

                    <motion.a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Konsultasi ${product.name}`}
                      whileHover={{
                        scale: 1.08,
                        rotate: 3,
                      }}
                      whileTap={{
                        scale: 0.94,
                      }}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 transition-colors duration-300 group-hover:bg-black group-hover:text-white"
                    >
                      <ArrowUpRight size={17} />
                    </motion.a>

                  </div>

                </div>

              </article>
            </RevealItem>
          ))}

        </RevealGroup>

        {/* BOTTOM CTA */}
        <Reveal y={30} delay={0.15}>
          <motion.div
            whileHover={{
              y: -2,
            }}
            transition={{
              duration: 0.25,
            }}
            className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-black/10 bg-white p-6 sm:flex-row sm:items-center sm:p-7"
          >

            <div>
              <p className="text-sm font-bold text-neutral-950">
                Punya ukuran atau kebutuhan khusus?
              </p>

              <p className="mt-1 text-sm text-neutral-500">
                Tidak perlu menyesuaikan toko dengan rak. Raknya yang kami
                sesuaikan.
              </p>
            </div>

            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-neutral-800"
            >
              Konsultasi Custom
              <ArrowUpRight size={16} />
            </motion.a>

          </motion.div>
        </Reveal>

      </div>
    </section>
  );
}