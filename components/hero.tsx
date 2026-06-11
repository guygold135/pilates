"use client"

import Image from "next/image"

export function Hero() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop"
          alt="סטודיו פילאטיס מואר עם מכשירי ריפורמר"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-l from-background/95 via-background/70 to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 pt-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-6 text-sm tracking-widest text-muted-foreground">
            סטודיו בוטיק לפילאטיס מכשירים
          </p>
          <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            <span className="block text-balance">להתחבר לגוף.</span>
            <span className="block text-balance">לבנות כוח מבפנים.</span>
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
            אימוני פילאטיס מכשירים בקבוצות קטנות, עם תשומת לב אישית ואווירה רגועה שמאפשרת לך להתקדם בקצב שלך.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#pricing"
              onClick={(e) => handleClick(e, "#pricing")}
              className="group inline-flex items-center justify-center border border-primary bg-primary px-8 py-4 text-sm tracking-wide text-primary-foreground transition-all hover:bg-primary/90"
            >
              להרשמה לשיעור היכרות
              <svg
                className="mr-3 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#philosophy"
              onClick={(e) => handleClick(e, "#philosophy")}
              className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-wide text-foreground transition-colors hover:text-muted-foreground"
            >
              גלו עוד
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs tracking-widest text-muted-foreground">גללו למטה</span>
          <div className="h-12 w-px bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </div>
    </section>
  )
}
