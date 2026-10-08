import {
  ArrowUpRight,
} from "lucide-react";

import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { RevealGroup, RevealItem } from "../components/RevealGroup";

const whatsappNumber = "6280000000000";

const whatsappMessage = encodeURIComponent(
  "Halo Ritelindo, saya ingin konsultasi gratis untuk kebutuhan rak / setup toko."
);

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const navigation = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Layanan",
    href: "#layanan",
  },
  {
    label: "Produk",
    href: "#produk",
  },
  {
    label: "Cara Kerja",
    href: "#cara-kerja",
  },
  {
    label: "Konsultasi",
    href: "#konsultasi",
  },
];

const contacts = [
  {
    label: "WhatsApp",
    description: "Konsultasi gratis",
    href: whatsappUrl,
    icon: FaWhatsapp,
    external: true,
  },
  {
    label: "Instagram",
    description: "Lihat project kami",
    href: "#",
    icon: FaInstagram,
    external: false,
  },
  {
    label: "LinkedIn",
    description: "Ritelindo Group",
    href: "#",
    icon: FaLinkedinIn,
    external: false,
  },
];

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#f5f5f2] px-6 pb-28 pt-16 sm:px-8 lg:px-12 lg:pb-16">
      <div className="mx-auto max-w-7xl">

        {/* MAIN FOOTER */}
        <div className="grid gap-12 border-b border-black/10 pb-12 md:grid-cols-[1.5fr_1fr_1fr] lg:gap-20">

          {/* BRAND */}
          <Reveal y={30}>
            <div>
              <motion.a
                href="#home"
                whileHover={{
                  scale: 1.015,
                }}
                className="inline-flex items-center gap-3"
              >
                <motion.div
                  whileHover={{
                    rotate: -2,
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="flex h-10 w-10 items-center justify-center"
                >
                  <img
                    src="/logo.webp"
                    alt="Ritelindo"
                    className="h-full w-full object-contain"
                  />
                </motion.div>

                <div>
                  <div className="text-sm font-bold tracking-[0.12em]">
                    RITELINDO
                  </div>

                  <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/40">
                    Retail Solution
                  </div>
                </div>
              </motion.a>

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
                  duration: 0.55,
                  delay: 0.15,
                }}
                className="mt-6 max-w-sm text-sm leading-7 text-black/55"
              >
                Solusi rak, setup, custom, dan interior toko untuk membantu
                bisnis retail memiliki ruang yang lebih rapi, fungsional, dan
                siap digunakan.
              </motion.p>

              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
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
                  duration: 0.5,
                  delay: 0.25,
                }}
                whileHover={{
                  x: 4,
                }}
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black"
              >
                Konsultasi via WhatsApp

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </motion.a>
            </div>
          </Reveal>

          {/* NAVIGATION */}
          <Reveal y={30} delay={0.1}>
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-black/40">
                Navigasi
              </p>

              <RevealGroup
                delay={0.2}
                stagger={0.07}
                className="flex flex-col gap-3"
              >
                {navigation.map((item) => (
                  <RevealItem key={item.href}>
                    <motion.a
                      href={item.href}
                      whileHover={{
                        x: 4,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="group flex w-fit items-center gap-1 text-sm text-black/65 transition-colors hover:text-black"
                    >
                      {item.label}

                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </motion.a>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </Reveal>

          {/* CONTACT */}
          <Reveal y={30} delay={0.2}>
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-black/40">
                Hubungi Kami
              </p>

              <RevealGroup
                delay={0.25}
                stagger={0.12}
                className="space-y-4"
              >
                {contacts.map((contact) => {
                  const Icon = contact.icon;

                  return (
                    <RevealItem key={contact.label}>
                      <motion.a
                        href={contact.href}
                        target={contact.external ? "_blank" : undefined}
                        rel={
                          contact.external
                            ? "noopener noreferrer"
                            : undefined
                        }
                        whileHover={{
                          x: 4,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        className="group flex items-center gap-3"
                      >
                        <motion.div
                          whileHover={{
                            scale: 1.08,
                            rotate: 3,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/5 transition-colors duration-300 group-hover:bg-black/10"
                        >
                          <Icon size={17} />
                        </motion.div>

                        <div>
                          <p className="text-sm font-semibold">
                            {contact.label}
                          </p>

                          <p className="text-xs text-black/45">
                            {contact.description}
                          </p>
                        </div>
                      </motion.a>
                    </RevealItem>
                  );
                })}
              </RevealGroup>
            </div>
          </Reveal>
        </div>

        {/* BOTTOM */}
        <Reveal y={20} delay={0.15}>
          <div className="flex flex-col gap-3 pt-6 text-xs text-black/40 sm:flex-row sm:items-center sm:justify-between">
            <motion.p
              whileHover={{
                color: "#171717",
              }}
              transition={{
                duration: 0.2,
              }}
            >
              © {new Date().getFullYear()} Ritelindo Group. All rights reserved.
            </motion.p>

            <motion.p
              whileHover={{
                color: "#171717",
              }}
              transition={{
                duration: 0.2,
              }}
            >
              Retail Solution · Rak · Setup Toko · Interior
            </motion.p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}