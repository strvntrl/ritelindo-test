import {
  ArrowUpRight,
  Check,
  Ruler,
  Sparkles,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

import Reveal from "../components/Reveal";
import { RevealGroup, RevealItem } from "../components/RevealGroup";

const whatsappNumber = "6280000000000";

const whatsappMessage = encodeURIComponent(
  "Halo Ritelindo, saya ingin konsultasi gratis untuk kebutuhan rak / setup toko. Saya ingin mendapatkan informasi mengenai paket, ukuran, dan layout toko."
);

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const consultationItems = [
  {
    icon: Check,
    title: "Paket rak & setup toko",
    description:
      "Diskusikan kebutuhan rak berdasarkan jenis dan ukuran toko.",
  },
  {
    icon: Ruler,
    title: "Custom ukuran & layout",
    description:
      "Sesuaikan konfigurasi rak dengan kondisi ruangan toko Anda.",
  },
  {
    icon: Sparkles,
    title: "Interior toko modern",
    description:
      "Bahas konsep interior agar toko lebih rapi, stylish, dan fungsional.",
  },
];

export default function FinalCTA() {
  return (
    <section
      id="konsultasi"
      className="relative overflow-hidden bg-[#111111] px-6 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-white/5 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.4,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-white/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">

          {/* LEFT */}
          <div>
            <Reveal y={40}>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.05,
                }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-white/70"
              >
                <motion.span
                  animate={{
                    rotate: [0, 8, -8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles size={14} />
                </motion.span>

                KONSULTASI GRATIS
              </motion.div>

              {/* Heading */}
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
                Toko Anda punya ukuran.
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block text-white/45"
                >
                  Kami bantu cari solusinya.
                </motion.span>
              </h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-7 max-w-2xl text-base leading-7 text-white/60 sm:text-lg"
              >
                Ceritakan kebutuhan toko, ukuran ruangan, atau target setup
                yang Anda inginkan. Tim Ritelindo siap membantu dari
                konsultasi, layout 3D, sampai kebutuhan rak dan interior toko.
              </motion.p>

              {/* CTA */}
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -4,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#111111] sm:px-7"
              >
                <FaWhatsapp size={19} />

                Konsultasi WA Gratis

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </motion.a>
            </Reveal>
          </div>

          {/* RIGHT */}
          <div className="lg:pl-10">

            {/* Consultation list */}
            <Reveal y={35} delay={0.15}>
              <div className="border-t border-white/15 pt-6">
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="mb-6 text-sm font-medium text-white/40"
                >
                  Apa yang bisa Anda konsultasikan?
                </motion.p>

                <RevealGroup
                  delay={0.15}
                  stagger={0.14}
                  className="space-y-4"
                >
                  {consultationItems.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <RevealItem key={item.title}>
                        <motion.div
                          whileHover={{
                            x: 4,
                          }}
                          transition={{
                            duration: 0.25,
                            ease: "easeOut",
                          }}
                          className={`flex items-start gap-4 ${
                            index < consultationItems.length - 1
                              ? "border-b border-white/10 pb-4"
                              : ""
                          }`}
                        >
                          <motion.div
                            whileHover={{
                              scale: 1.08,
                              rotate: 3,
                            }}
                            className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10"
                          >
                            <Icon size={17} />
                          </motion.div>

                          <div>
                            <h3 className="text-sm font-semibold">
                              {item.title}
                            </h3>

                            <p className="mt-1 text-sm leading-6 text-white/50">
                              {item.description}
                            </p>
                          </div>
                        </motion.div>
                      </RevealItem>
                    );
                  })}
                </RevealGroup>
              </div>
            </Reveal>

            {/* Reassurance */}
            <Reveal y={25} delay={0.35}>
              <motion.div
                whileHover={{
                  y: -3,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="mt-8 rounded-2xl border border-white/10 bg-white/4 p-5"
              >
                <p className="text-sm leading-6 text-white/50">
                  Tidak harus langsung membeli.{" "}
                  <span className="font-medium text-white">
                    Konsultasi dan layout awal gratis
                  </span>{" "}
                  untuk membantu Anda menentukan kebutuhan toko.
                </p>
              </motion.div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}