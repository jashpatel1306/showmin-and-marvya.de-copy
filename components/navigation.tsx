"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Shop migration", href: "/shop-migration" },
    { name: "Customer testimonials", href: "/testimonials" },
    { name: "career", href: "/career" },
  ]

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-4 left-4 right-4 z-50"
    >
      <nav
        className={`
          relative w-full max-w-3xl mx-auto
          bg-[#1c1c1c80] backdrop-blur-xl
          rounded-2xl shadow-2xl border border-white/10
          transition-all duration-300 ease-in-out
          ${isScrolled ? "bg-[#1c1c1c90] shadow-3xl" : ""}
        `}
      >
        <div className="px-5 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} className="flex-shrink-0">
              <Link href="/" className="block">
                <span className="text-white text-2xl font-bold tracking-[0.2em] font-mono">SHOWMINE</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-10">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="
                      relative text-white/90 hover:text-white
                      text-base font-medium tracking-wide
                      transition-all duration-300 ease-out
                      hover:scale-105
                      after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px]
                      after:bg-blue-500 after:transition-all after:duration-300
                      hover:after:w-full
                    "
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Contact Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex-shrink-0"
            >
              <Button
                className="
                  bg-[#2c4f97] hover:bg-[#1e3a6f] 
                  text-white font-medium
                  px-6 py-2.5 rounded-full
                  shadow-lg hover:shadow-xl
                  transition-all duration-300 ease-out
                  hover:scale-105 hover:-translate-y-0.5
                  border border-blue-400/20
                "
              >
                Contact
                <span className="ml-2">👉🏻</span>
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-6 pt-6 border-t border-white/10"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="
                        block text-white/90 hover:text-white
                        text-base font-medium tracking-wide
                        py-2 px-4 rounded-lg
                        hover:bg-white/10
                        transition-all duration-200
                      "
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="pt-4"
                >
                  <Button
                    className="
                      w-full bg-[#2c4f97] hover:bg-[#1e3a6f] 
                      text-white font-medium
                      px-6 py-3 rounded-full
                      shadow-lg hover:shadow-xl
                      transition-all duration-300
                      border border-blue-400/20
                    "
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                    <span className="ml-2">👉🏻</span>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </motion.div>
  )
}
