"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type NavItem = {
  name: string
  href: string
  hasDropdown?: boolean
  dropdownItems?: {
    Services: Array<{ name: string; href: string }>
    Product: Array<{ name: string; href: string }>
  }
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSolutionsOpen(false)
      }
    }

    if (isSolutionsOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isSolutionsOpen])

  const navItems: NavItem[] = [
    {
      name: "Solutions",
      href: "#",
      hasDropdown: true,
      dropdownItems: {
        Services: [
          { name: "Shop Migration", href: "/shop-migration" },
          { name: "AI consulting", href: "/ai-consulting" },
        ],
        Product: [
          { name: "Lead generation", href: "/lead-generation" },
          { name: "Bulk email automation", href: "/bulk-email-automation" },
        ],
      },
    },
    { name: "About us", href: "/about-us" },
    { name: "Career", href: "/career" },
  ]

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-2 left-1 right-1 z-50 md:top-4 md:left-4 md:right-4"
    >
      <nav
        className={`
          relative w-full max-w-full md:max-w-5xl mx-auto
          bg-[#1c1c1c80] backdrop-blur-xl
          rounded-2xl shadow-2xl border border-white/10
          transition-all duration-300 ease-in-out
          ${isScrolled ? "bg-[#1c1c1c90] shadow-3xl" : ""}
        `}
      >
        <div className="px-2 py-2 md:px-5 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} className="flex-shrink-0">
              <Link href="/" className="block">
                {/* <span className="text-white text-2xl font-bold tracking-[0.2em] font-mono">SHOWMINE</span> */}

                <img
                  src="/images/SHOWMINE-LIGHT.png"
                  alt="logo"
                  // fill
                  className="w-auto h-8 md:h-6 object-contain"
                // priority
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {item.hasDropdown ? (
                    <div
                      ref={dropdownRef}
                      className="relative"
                      onMouseEnter={() => setIsSolutionsOpen(true)}
                      onMouseLeave={() => setIsSolutionsOpen(false)}
                    >
                      <button
                        className="
                          relative text-white/90 hover:text-white text-[14px]
                          tracking-wide flex items-center gap-1
                          transition-all duration-300 ease-out
                          hover:scale-105
                          after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px]
                          after:bg-blue-500 after:transition-all after:duration-300
                          hover:after:w-full
                        "
                      >
                        {item.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isSolutionsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {isSolutionsOpen && item.dropdownItems && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-80 bg-[#1c1c1c] backdrop-blur-xl rounded-xl shadow-2xl border border-white/10 overflow-hidden z-50"
                          >
                            <div className="p-4">
                              {/* Services Section */}
                              <div className="mb-4">
                                <h3 className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2 px-3">
                                  Services
                                </h3>
                                <div className="space-y-1">
                                  {item.dropdownItems.Services.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.href}
                                      className="
                                        block px-3 py-2 rounded-lg
                                        text-white/90 hover:text-white
                                        hover:bg-white/10
                                        transition-all duration-200
                                        text-sm
                                      "
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* Divider */}
                              <div className="h-px bg-white/10 my-3" />

                              {/* Product Section */}
                              <div>
                                <h3 className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2 px-3">
                                  Product
                                </h3>
                                <div className="space-y-1">
                                  {item.dropdownItems.Product.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.href}
                                      className="
                                        block px-3 py-2 rounded-lg
                                        text-white/90 hover:text-white
                                        hover:bg-white/10
                                        transition-all duration-200
                                        text-sm
                                      "
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="
                        relative text-white/90 hover:text-white text-[14px]
                          tracking-wide
                        transition-all duration-300 ease-out
                        hover:scale-105
                        after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px]
                        after:bg-blue-500 after:transition-all after:duration-300
                        hover:after:w-full
                      "
                    >
                      {item.name}
                    </Link>
                  )}
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
                  bg-[#4B6F93] hover:bg-[rgb(75, 111, 147)] 
                  text-white text-sm md:text-[14px]
                  px-3 py-2 md:px-4 md:py-2.5 rounded-xl
                  shadow-lg hover:shadow-xl
                  transition-all duration-300 ease-out
                  hover:scale-105 hover:-translate-y-0.5
                  border border-blue-400/20
                "
              >
                Contact 👉🏻
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
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
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                          className="
                            w-full flex items-center justify-between
                            text-white/90 hover:text-white
                            text-base font-medium tracking-wide
                            py-2 px-4 rounded-lg
                            hover:bg-white/10
                            transition-all duration-200
                          "
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${
                              isMobileSolutionsOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {isMobileSolutionsOpen && item.dropdownItems && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 pr-4 pt-2 space-y-3">
                                {/* Services Section */}
                                <div>
                                  <h3 className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                                    Services
                                  </h3>
                                  <div className="space-y-1">
                                    {item.dropdownItems.Services.map((subItem) => (
                                      <Link
                                        key={subItem.name}
                                        href={subItem.href}
                                        className="
                                          block text-white/80 hover:text-white
                                          text-sm py-2 px-4 rounded-lg
                                          hover:bg-white/10
                                          transition-all duration-200
                                        "
                                        onClick={() => {
                                          setIsMobileMenuOpen(false)
                                          setIsMobileSolutionsOpen(false)
                                        }}
                                      >
                                        {subItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-white/10" />

                                {/* Product Section */}
                                <div>
                                  <h3 className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                                    Product
                                  </h3>
                                  <div className="space-y-1">
                                    {item.dropdownItems.Product.map((subItem) => (
                                      <Link
                                        key={subItem.name}
                                        href={subItem.href}
                                        className="
                                          block text-white/80 hover:text-white
                                          text-sm py-2 px-4 rounded-lg
                                          hover:bg-white/10
                                          transition-all duration-200
                                        "
                                        onClick={() => {
                                          setIsMobileMenuOpen(false)
                                          setIsMobileSolutionsOpen(false)
                                        }}
                                      >
                                        {subItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
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
                    )}
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
                      w-full bg-[#4B6F93] hover:bg-[rgb(75, 111, 147)] 
                      text-white font-medium
                      px-6 py-3 rounded-full
                      shadow-lg hover:shadow-xl
                      transition-all duration-300
                      border border-blue-400/20
                    "
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact 👉🏻
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
