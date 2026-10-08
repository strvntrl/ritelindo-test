import {
  ArrowUpRight,
  Check,
  Maximize2,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

import Reveal from "../components/Reveal";
import { RevealGroup, RevealItem } from "../components/RevealGroup";

const customFeatures = [
  "Menyesuaikan ukuran dan bentuk ruangan",
  "Konfigurasi rak sesuai alur toko",
  "Konsep toko lebih modern dan rapi",
  "Konsultasi kebutuhan sebelum produksi",
];

const bottomStatements = [
  {
    title: "Custom",
    description: "Menyesuaikan kebutuhan dan ukuran ruangan.",
  },
  {
    title: "Retail",
    description: "Cocok untuk berbagai konsep toko dan bisnis.",
  },
  {
    title: "Project",
    description: "Siap menangani kebutuhan retail dalam berbagai skala.",
  },
];

const whatsappNumber = "6280000000000";

const whatsappMessage = encodeURIComponent(
  "Halo Ritelindo, saya ingin konsultasi gratis untuk kebutuhan interior dan custom rak toko."
);

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export default function CustomStore() {
  return (
    <section
      id="custom"
      className="overflow-hidden bg-[#f5f5f2] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* TOP CONTENT */}
        <Reveal y={35}>
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
        </Reveal>

        {/* MAIN VISUAL */}
        <div className="relative mt-12 grid gap-5 lg:mt-16 lg:grid-cols-[1.25fr_0.75fr]">

          {/* BIG IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -45,
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
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative min-h-110 overflow-hidden rounded-4xl bg-neutral-200 sm:min-h-140"
          >
            <motion.img
              src="/images/projects/interior-toko.webp"
              alt="Interior toko retail dengan rak modern"
              className="absolute inset-0 h-full w-full object-cover"
              initial={{
                scale: 1.04,
              }}
              whileInView={{
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                scale: 1.025,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/5 to-transparent" />

            {/* Image label */}
            <motion.div
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
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-5 text-white sm:bottom-8 sm:left-8 sm:right-8"
            >
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  Retail Interior
                </p>

                <p className="mt-2 max-w-md text-xl font-bold leading-tight sm:text-2xl">
                  Ruang yang dirancang untuk membuat produk lebih menonjol.
                </p>
              </div>

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
                  duration: 0.5,
                  delay: 0.55,
                }}
                whileHover={{
                  scale: 1.08,
                  rotate: 4,
                }}
                className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md sm:flex"
              >
                <Maximize2 size={17} />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 45,
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
              duration: 0.85,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col rounded-4xl bg-neutral-950 p-7 text-white sm:p-9 lg:p-10"
          >
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
              <Sparkles size={21} />
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
                delay: 0.35,
              }}
              className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-white/40"
            >
              Lebih dari sekadar rak
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
                delay: 0.42,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-3 text-2xl font-bold leading-tight tracking-tight sm:text-3xl"
            >
              Buat toko terlihat lebih stylish & modern.
            </motion.h3>

            <motion.p
              initial={{
                opacity: 0,
                y: 16,
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
              className="mt-5 text-sm leading-6 text-white/55"
            >
              Kami juga menyediakan jasa interior toko untuk membantu
              menciptakan ruang retail yang rapi, fungsional, dan
              sesuai dengan karakter brand Anda.
            </motion.p>

            {/* Feature list */}
            <RevealGroup
              delay={0.55}
              stagger={0.12}
              className="mt-8 space-y-4"
            >
              {customFeatures.map((feature) => (
                <RevealItem key={feature}>
                  <motion.div
                    whileHover={{
                      x: 4,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="flex items-start gap-3"
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                      }}
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10"
                    >
                      <Check size={12} />
                    </motion.div>

                    <span className="text-sm leading-5 text-white/75">
                      {feature}
                    </span>
                  </motion.div>
                </RevealItem>
              ))}
            </RevealGroup>

            {/* CTA */}
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
                duration: 0.55,
                delay: 0.95,
              }}
              className="mt-auto pt-10"
            >
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  x: 4,
                }}
                className="group inline-flex items-center gap-2 text-sm font-bold text-white"
              >
                Diskusikan kebutuhan toko

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </motion.a>

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
                  delay: 1,
                }}
                style={{
                  transformOrigin: "left",
                }}
                className="mt-3 h-px w-full bg-white/10"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* BOTTOM STATEMENT */}
        <RevealGroup
          delay={0.15}
          stagger={0.12}
          className="mt-5 grid gap-5 sm:grid-cols-3"
        >
          {bottomStatements.map((item) => (
            <RevealItem key={item.title}>
              <motion.div
                whileHover={{
                  y: -5,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="h-full rounded-2xl bg-white p-6"
              >
                <p className="text-2xl font-bold tracking-tight text-neutral-950">
                  {item.title}
                </p>

                <p className="mt-2 text-sm leading-6 text-neutral-500">
                  {item.description}
                </p>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}