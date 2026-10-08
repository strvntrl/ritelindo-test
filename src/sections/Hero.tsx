import { ArrowRight, Check, } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const whatsappNumber = "6280000000000";

const whatsappMessage = encodeURIComponent(
  "Halo Ritelindo, saya ingin konsultasi gratis untuk kebutuhan rak / setup toko."
);

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const benefits = [
  "Free Konsultasi & Layout 3D",
  "Free Ongkir Jawa-Bali",
  "Bisa Custom Ukuran",
  "Langsung dari Pabrik",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#f5f5f2] pt-28 sm:pt-32"
    >
      {/* Decorative background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-black/3 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.4,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-black/3 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="max-w-2xl">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3.5 py-2 backdrop-blur-sm"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 250,
                }}
                className="h-2 w-2 rounded-full bg-green-500"
              />

              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-600">
                Solusi Retail Langsung dari Pabrik
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[2.7rem] font-bold leading-[1.02] tracking-[-0.045em] text-neutral-950 sm:text-5xl lg:text-[4.25rem]"
            >
              Bangun Toko
              <br />

              <span className="text-neutral-500">
                yang Siap Jual.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.28,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8"
            >
              Paket rak minimarket dan rak toko dari pabrik, lengkap dengan
              konsultasi serta layout 3D gratis. Bisa custom mengikuti ukuran
              dan kebutuhan ruang toko Anda.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -4,
                  scale: 1.02,
                  boxShadow: "0 18px 35px rgba(0,0,0,0.16)",
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white"
              >
                <FaWhatsapp size={18} />

                Konsultasi WA Gratis

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>

              <motion.a
                href="#produk"
                whileHover={{
                  y: -4,
                  scale: 1.01,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-semibold text-neutral-800 transition-all duration-300 hover:border-black/20 hover:shadow-md"
              >
                Lihat Paket Rak
              </motion.a>
            </motion.div>

            {/* Quick Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-9 grid grid-cols-1 gap-3 border-t border-black/10 pt-6 sm:grid-cols-2"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.62 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-center gap-2.5"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.35,
                      delay: 0.7 + index * 0.08,
                      type: "spring",
                      stiffness: 250,
                    }}
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-white"
                  >
                    <Check size={13} strokeWidth={3} />
                  </motion.div>

                  <span className="text-sm font-medium text-neutral-700">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{
              opacity: 0,
              x: 35,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="relative">

              {/* Main image */}
              <motion.div
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className="relative overflow-hidden rounded-4xl bg-neutral-200 shadow-2xl shadow-black/10"
              >
                <motion.img
                  src="/images/hero/hero-rak.png"
                  alt="Rak minimarket dan interior toko Ritelindo"
                  className="aspect-4/3 w-full object-cover"
                  whileHover={{
                    scale: 1.035,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

                {/* Floating info */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-6 sm:left-6 sm:right-6"
                >
                  <div className="rounded-2xl border border-white/20 bg-black/65 px-4 py-3 text-white backdrop-blur-md">
                    <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/60">
                      Retail Solution
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      Dari layout hingga siap jual
                    </p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 1.05,
                    }}
                    className="hidden rounded-full bg-white px-4 py-2.5 text-xs font-bold text-neutral-900 shadow-lg sm:block"
                  >
                    Custom Available
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Small floating card */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                  x: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -5,
                }}
                className="absolute -bottom-14 -left-3 hidden rounded-2xl border border-black/5 bg-white p-4 shadow-xl sm:-left-6 sm:block"
              >
                <div className="flex items-center gap-3">

                  <motion.div
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100"
                  >
                    <span className="text-lg">3D</span>
                  </motion.div>

                  <div>
                    <p className="text-xs text-neutral-500">
                      Layout toko
                    </p>

                    <p className="text-sm font-bold text-neutral-900">
                      Gratis konsultasi
                    </p>
                  </div>

                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}