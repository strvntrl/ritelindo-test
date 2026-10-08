import {
  ArrowRight,
  Box,
  CheckCircle2,
  Ruler,
} from "lucide-react";
import {FaWhatsapp} from "react-icons/fa";
import { motion } from "framer-motion";

import Reveal from "../components/Reveal";
import { RevealGroup, RevealItem } from "../components/RevealGroup";

const steps = [
  {
    number: "01",
    icon: FaWhatsapp,
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

const whatsappNumber = "6280000000000";

const whatsappMessage = encodeURIComponent(
  "Halo Ritelindo, saya ingin konsultasi gratis untuk kebutuhan rak / setup toko."
);

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export default function Process() {
  return (
    <section
      id="cara-kerja"
      className="overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* HEADER */}
        <Reveal y={35}>
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
        </Reveal>

        {/* PROCESS */}
        <div className="relative mt-14 sm:mt-16">

          {/* Desktop connecting line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: "left" }}
            className="absolute left-[12.5%] right-[12.5%] top-8.5 hidden h-px bg-black/10 lg:block"
          />

          <RevealGroup
            delay={0.25}
            stagger={0.15}
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <RevealItem key={step.number}>
                  <article className="relative">

                    {/* Number / Icon */}
                    <div className="relative z-10 flex items-center justify-between lg:block">

                      <motion.div
                        whileHover={{
                          y: -5,
                          scale: 1.03,
                        }}
                        transition={{
                          duration: 0.25,
                          ease: "easeOut",
                        }}
                        className="flex h-17 w-17 items-center justify-center rounded-2xl border border-black/10 bg-white shadow-sm transition-colors duration-300 hover:border-black/20 hover:shadow-lg"
                      >
                        <Icon
                          size={24}
                          strokeWidth={1.7}
                        />
                      </motion.div>

                      <motion.span
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: 0.15 + index * 0.1,
                        }}
                        className="text-xs font-bold tracking-[0.15em] text-neutral-300 lg:absolute lg:left-20 lg:top-2"
                      >
                        {step.number}
                      </motion.span>

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
                      <motion.div
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: 0.35 + index * 0.15,
                        }}
                        className="mt-6 hidden justify-end pr-4 lg:flex"
                      >
                        <ArrowRight
                          size={16}
                          className="text-neutral-300"
                        />
                      </motion.div>
                    )}

                  </article>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>

        {/* CTA BANNER */}
        <Reveal y={45} delay={0.15}>
          <div className="relative mt-16 overflow-hidden rounded-4xl bg-neutral-950 px-7 py-9 text-white sm:mt-20 sm:px-10 sm:py-11 lg:px-12">

            {/* Decorative circles */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/10"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="pointer-events-none absolute -right-4 -top-8 h-40 w-40 rounded-full border border-white/10"
            />

            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-2xl">

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40"
                >
                  Tidak perlu bingung mulai dari mana
                </motion.p>

                <motion.h3
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl"
                >
                  Ceritakan toko yang ingin Anda bangun.
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-3 max-w-xl text-sm leading-6 text-white/55"
                >
                  Konsultasi awal gratis. Tim kami akan membantu memahami
                  kebutuhan ruang dan memberikan rekomendasi yang sesuai.
                </motion.p>

              </div>

              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -4,
                  scale: 1.02,
                  boxShadow: "0 18px 35px rgba(0,0,0,0.2)",
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-neutral-950"
              >
                <FaWhatsapp size={18} />

                Mulai Konsultasi

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}