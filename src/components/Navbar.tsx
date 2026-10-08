import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const whatsappNumber = "6280000000000";

const whatsappMessage = encodeURIComponent(
  "Halo Ritelindo, saya ingin konsultasi gratis untuk kebutuhan rak / setup toko."
);

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const navItems = [
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
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">

        {/* NAVBAR */}
        <motion.nav
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative flex h-16 items-center justify-between rounded-2xl border border-black/5 bg-white/90 px-4 shadow-sm backdrop-blur-md sm:px-6"
        >
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={closeMenu}
            whileHover={{
              scale: 1.02,
            }}
            className="flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center">
              <img
                src="/logo.png"
                alt="Ritelindo"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="leading-none">
              <span className="block text-sm font-bold tracking-tight">
                RITELINDO
              </span>

              <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                Retail Solution
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{
                  y: -1,
                }}
                className="text-sm font-medium text-neutral-600 transition-colors duration-200 hover:text-black"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA */}
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
            className="hidden items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-neutral-800 md:flex"
          >
            Konsultasi Gratis
            <ArrowUpRight size={16} />
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            whileTap={{
              scale: 0.92,
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -45,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 45,
                    scale: 0.7,
                  }}
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 45,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -45,
                    scale: 0.7,
                  }}
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* MOBILE DROPDOWN */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -8,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute left-0 right-0 top-[calc(100%+8px)] overflow-hidden rounded-2xl border border-black/5 bg-white p-3 shadow-xl shadow-black/10 md:hidden"
              >
                <div className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.3,
                      }}
                      className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-black"
                    >
                      {item.label}

                      <ArrowUpRight
                        size={16}
                        className="text-neutral-400"
                      />
                    </motion.a>
                  ))}
                </div>

                {/* Mobile CTA */}
                <motion.a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.15,
                    duration: 0.3,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-black px-4 py-3.5 text-sm font-semibold text-white"
                >
                  Konsultasi Gratis
                  <ArrowUpRight size={16} />
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </header>
  );
}