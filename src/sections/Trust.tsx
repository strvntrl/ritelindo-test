import {
  Building2,
  Factory,
  Layers3,
  Store,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

import Reveal from "../components/Reveal";
import { RevealGroup, RevealItem } from "../components/RevealGroup";

const audiences = [
  {
    icon: Store,
    title: "Toko & Minimarket",
    description:
      "Kebutuhan rak untuk toko baru maupun pengembangan toko yang sudah berjalan.",
  },
  {
    icon: Layers3,
    title: "Paket Setup Toko",
    description:
      "Mulai dari kebutuhan rak hingga konfigurasi ruang yang lebih terencana dan strategis.",
  },
  {
    icon: Building2,
    title: "Proyek Retail",
    description:
      "Mendukung kebutuhan pengadaan rak untuk proyek retail dalam berbagai skala.",
  },
];

export default function Trust() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* TOP */}
        <Reveal y={35}>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
                Retail Partner
              </p>

              <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-4xl lg:text-5xl">
                Satu partner untuk
                <br />
                <span className="text-neutral-400">
                  berbagai kebutuhan retail.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 text-neutral-600 lg:ml-auto lg:text-right">
              Baik Anda sedang membuka toko baru, melakukan renovasi,
              maupun mengerjakan proyek retail, kebutuhan dapat
              dikonsultasikan sesuai skala dan kondisi lapangan.
            </p>
          </div>
        </Reveal>

        {/* FACTORY BLOCK */}
        <Reveal y={45} delay={0.1}>
          <div className="mt-14 overflow-hidden rounded-4xl bg-neutral-950 text-white sm:mt-16">

            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex min-h-90 flex-col justify-between overflow-hidden p-7 sm:p-10 lg:min-h-105 lg:p-12"
              >
                {/* Decorative circle */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.3,
                  }}
                  className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full border border-white/10"
                />

                <div className="relative">

                  {/* Icon */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      rotate: -8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: 0.25,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-neutral-950"
                  >
                    <Factory size={22} />
                  </motion.div>

                  <motion.p
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
                      delay: 0.35,
                    }}
                    className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-white/40"
                  >
                    Direct From Factory
                  </motion.p>

                  <motion.h3
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.65,
                      delay: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-3 max-w-md text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
                  >
                    Produk langsung dari pabrik.
                  </motion.h3>

                </div>

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5,
                  }}
                  className="relative max-w-md text-sm leading-6 text-white/55"
                >
                  Dengan proses produksi langsung, Ritelindo dapat memberikan
                  solusi rak dengan harga yang kompetitif sekaligus
                  menyesuaikan kebutuhan proyek.
                </motion.p>

              </motion.div>

              {/* RIGHT */}
              <RevealGroup className="grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {audiences.map((item) => {
                  const Icon = item.icon;

                  return (
                    <RevealItem key={item.title}>
                      <div className="group flex min-h-57.5 flex-col justify-between p-7 transition-colors duration-300 hover:bg-white/4 sm:p-8 lg:min-h-105 lg:p-9">

                        <div className="flex items-start justify-between">

                          {/* Icon */}
                          <motion.div
                            whileHover={{
                              scale: 1.08,
                              rotate: 2,
                            }}
                            transition={{
                              duration: 0.2,
                            }}
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10"
                          >
                            <Icon
                              size={19}
                              strokeWidth={1.7}
                            />
                          </motion.div>

                          {/* Arrow */}
                          <ArrowUpRight
                            size={17}
                            className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                          />

                        </div>

                        <div className="mt-10">

                          <h3 className="text-lg font-bold tracking-tight">
                            {item.title}
                          </h3>

                          <p className="mt-3 text-sm leading-6 text-white/45">
                            {item.description}
                          </p>

                        </div>

                      </div>
                    </RevealItem>
                  );
                })}
              </RevealGroup>

            </div>
          </div>
        </Reveal>

        {/* SERVICE AREA */}
        <Reveal y={35} delay={0.15}>
          <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_1.4fr]">

            {/* Intro */}
            <div className="rounded-3xl bg-[#f5f5f2] p-7 sm:p-8">

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}
                className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-950 text-white"
              >
                <Store size={18} />
              </motion.div>

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
                Area Layanan
              </p>

              <h3 className="mt-4 text-2xl font-bold tracking-tight text-neutral-950">
                Dukungan untuk kebutuhan toko Anda.
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-500">
                Fasilitas pengiriman dan perakitan tersedia sesuai
                wilayah serta ketentuan layanan.
              </p>

            </div>

            {/* Service list */}
            <RevealGroup
              className="grid grid-cols-1 divide-y divide-black/10 rounded-3xl border border-black/5 bg-white sm:grid-cols-3 sm:divide-x sm:divide-y-0"
              stagger={0.15}
            >
              <RevealItem>
                <motion.div
                  whileHover={{
                    y: -3,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="p-6 sm:p-7"
                >
                  <p className="text-2xl font-bold tracking-tight">
                    Jawa
                  </p>

                  <p className="mt-1 text-sm text-neutral-500">
                    Free ongkir
                  </p>
                </motion.div>
              </RevealItem>

              <RevealItem>
                <motion.div
                  whileHover={{
                    y: -3,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="p-6 sm:p-7"
                >
                  <p className="text-2xl font-bold tracking-tight">
                    Bali
                  </p>

                  <p className="mt-1 text-sm text-neutral-500">
                    Free ongkir
                  </p>
                </motion.div>
              </RevealItem>

              <RevealItem>
                <motion.div
                  whileHover={{
                    y: -3,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="p-6 sm:p-7"
                >
                  <p className="text-2xl font-bold tracking-tight">
                    Jatim · Jateng · DIY
                  </p>

                  <p className="mt-1 text-sm text-neutral-500">
                    Free perakitan
                  </p>
                </motion.div>
              </RevealItem>
            </RevealGroup>

          </div>
        </Reveal>

      </div>
    </section>
  );
}