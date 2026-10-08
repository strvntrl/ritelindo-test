import {
  Box,
  Cuboid,
  Factory,
  Ruler,
  Truck,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

import Reveal from "../components/Reveal";
import { RevealGroup, RevealItem } from "../components/RevealGroup";

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
        <Reveal y={35}>
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
        </Reveal>

        {/* FEATURED BENEFIT */}
        <Reveal y={45} delay={0.1}>
          <div className="mt-14 overflow-hidden rounded-4xl bg-neutral-950 text-white sm:mt-16">

            <div className="grid lg:grid-cols-[1fr_1.15fr]">

              {/* LEFT */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: -25,
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
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex min-h-85 flex-col justify-between overflow-hidden p-7 sm:p-10 lg:p-12"
              >
                {/* Decorative circles */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.7,
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
                    delay: 0.25,
                  }}
                  className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10"
                />

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.4,
                  }}
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/10"
                />

                <div className="relative">
                  {/* Icon */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.7,
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
                      duration: 0.6,
                      delay: 0.3,
                      type: "spring",
                      stiffness: 180,
                    }}
                    whileHover={{
                      scale: 1.08,
                      rotate: 4,
                    }}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-neutral-950"
                  >
                    <Cuboid size={22} />
                  </motion.div>

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 12,
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
                      delay: 0.4,
                    }}
                    className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-white/40"
                  >
                    Layanan Utama
                  </motion.p>

                  <motion.h3
                    initial={{
                      opacity: 0,
                      y: 18,
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
                      delay: 0.48,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-3 max-w-md text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
                  >
                    Konsultasi toko
                    <br />
                    sebelum membeli.
                  </motion.h3>
                </div>

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 18,
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
                    delay: 0.6,
                  }}
                  className="relative mt-10 max-w-md text-sm leading-6 text-white/60"
                >
                  Tidak yakin harus menggunakan rak seperti apa?
                  Konsultasikan kebutuhan toko Anda dan dapatkan
                  gambaran layout 3D secara gratis.
                </motion.p>
              </motion.div>

              {/* RIGHT */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 25,
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
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative min-h-85 overflow-hidden bg-neutral-800"
              >
                {/* Grid background */}
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.4,
                  }}
                  className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[48px_48px]"
                />

                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative w-full max-w-md"
                  >

                    {/* Fake 3D layout representation */}
                    <motion.div
                      whileHover={{
                        y: -4,
                        scale: 1.01,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="relative aspect-4/3 rounded-2xl border border-white/10 bg-white/4 p-5 backdrop-blur-sm"
                    >
                      {/* Rack 1 */}
                      <motion.div
                        initial={{
                          opacity: 0,
                          scaleY: 0,
                        }}
                        whileInView={{
                          opacity: 1,
                          scaleY: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: 0.55,
                        }}
                        style={{
                          transformOrigin: "bottom",
                        }}
                        className="absolute left-[12%] top-[15%] h-[65%] w-[16%] rounded-md border border-white/20 bg-white/8"
                      />

                      {/* Rack 2 */}
                      <motion.div
                        initial={{
                          opacity: 0,
                          scaleY: 0,
                        }}
                        whileInView={{
                          opacity: 1,
                          scaleY: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: 0.65,
                        }}
                        style={{
                          transformOrigin: "bottom",
                        }}
                        className="absolute left-[36%] top-[15%] h-[65%] w-[16%] rounded-md border border-white/20 bg-white/8"
                      />

                      {/* Rack 3 */}
                      <motion.div
                        initial={{
                          opacity: 0,
                          scaleY: 0,
                        }}
                        whileInView={{
                          opacity: 1,
                          scaleY: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: 0.75,
                        }}
                        style={{
                          transformOrigin: "bottom",
                        }}
                        className="absolute left-[60%] top-[15%] h-[65%] w-[16%] rounded-md border border-white/20 bg-white/8"
                      />

                      {/* Bottom counter */}
                      <motion.div
                        initial={{
                          scaleX: 0,
                        }}
                        whileInView={{
                          scaleX: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.7,
                          delay: 0.85,
                        }}
                        style={{
                          transformOrigin: "left",
                        }}
                        className="absolute bottom-[10%] left-[12%] right-[24%] h-1.25 rounded-full bg-white/20"
                      />

                      {/* Side element */}
                      <motion.div
                        initial={{
                          opacity: 0,
                        }}
                        whileInView={{
                          opacity: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: 0.9,
                        }}
                        className="absolute right-[8%] top-[25%] h-[45%] w-[8%] rounded-md border border-dashed border-white/20"
                      />

                      {/* Measurement line */}
                      <motion.div
                        initial={{
                          opacity: 0,
                          scaleX: 0,
                        }}
                        whileInView={{
                          opacity: 1,
                          scaleX: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.7,
                          delay: 0.95,
                        }}
                        style={{
                          transformOrigin: "left",
                        }}
                        className="absolute left-[12%] right-[24%] top-[8%] flex items-center gap-2"
                      >
                        <div className="h-px flex-1 bg-white/20" />

                        <span className="text-[9px] font-medium uppercase tracking-wider text-white/40">
                          Layout
                        </span>

                        <div className="h-px flex-1 bg-white/20" />
                      </motion.div>
                    </motion.div>

                    {/* Consultation badge */}
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 15,
                        x: 10,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: 1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{
                        y: -4,
                      }}
                      className="absolute -bottom-5 -right-2 rounded-xl border border-white/10 bg-white px-4 py-3 text-neutral-950 shadow-2xl sm:-right-5"
                    >
                      <p className="text-[10px] uppercase tracking-wider text-neutral-400">
                        Consultation
                      </p>

                      <p className="mt-1 text-sm font-bold">
                        100% Gratis
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </Reveal>

        {/* BENEFIT GRID */}
        <RevealGroup
          delay={0.1}
          stagger={0.12}
          className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.slice(1).map((benefit) => {
            const Icon = benefit.icon;

            return (
              <RevealItem key={benefit.number}>
                <motion.article
                  whileHover={{
                    y: -6,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  className="group h-full rounded-3xl border border-black/8 bg-[#f7f7f5] p-6 transition-colors duration-500 hover:bg-neutral-100 hover:shadow-xl hover:shadow-black/5 sm:p-7"
                >
                  <div className="flex items-start justify-between">

                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: 3,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-neutral-900 shadow-sm"
                    >
                      <Icon size={20} strokeWidth={1.8} />
                    </motion.div>

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

                  {/* Hover line */}
                  <motion.div
                    initial={{
                      scaleX: 0,
                    }}
                    whileInView={{
                      scaleX: 0,
                    }}
                    style={{
                      transformOrigin: "left",
                    }}
                    className="mt-6 h-px w-full bg-black transition-transform duration-500 group-hover:scale-x-100"
                  />
                </motion.article>
              </RevealItem>
            );
          })}
        </RevealGroup>

      </div>
    </section>
  );
}