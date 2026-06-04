"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <nav className="flex h-20 items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-medium tracking-wide text-foreground">
            BE PILATES
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-10 md:flex">
            <a
              href="#philosophy"
              onClick={(e) => handleNavClick(e, "#philosophy")}
              className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              הפילוסופיה שלנו
            </a>
            <a
              href="#classes"
              onClick={(e) => handleNavClick(e, "#classes")}
              className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              שיעורים
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleNavClick(e, "#pricing")}
              className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              מסלולים
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="border border-primary bg-primary px-6 py-2.5 text-sm tracking-wide text-primary-foreground transition-all hover:bg-primary/90"
            >
              להרשמה
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground md:hidden"
            aria-label={isMenuOpen ? "סגור תפריט" : "פתח תפריט"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out md:hidden",
            isMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="min-h-0">
            <div
              className={cn(
                "flex flex-col gap-4 border-t border-border pb-6 pt-6 transition-opacity duration-300 ease-in-out",
                isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
              )}
            >
              <a
                href="#philosophy"
                onClick={(e) => handleNavClick(e, "#philosophy")}
                className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              >
                הפילוסופיה שלנו
              </a>
              <a
                href="#classes"
                onClick={(e) => handleNavClick(e, "#classes")}
                className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              >
                שיעורים
              </a>
              <a
                href="#pricing"
                onClick={(e) => handleNavClick(e, "#pricing")}
                className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              >
                מסלולים
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="mt-2 border border-primary bg-primary px-6 py-2.5 text-center text-sm tracking-wide text-primary-foreground transition-all hover:bg-primary/90"
              >
                להרשמה
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
