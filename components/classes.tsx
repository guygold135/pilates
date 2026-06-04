import Image from "next/image"

const classes = [
  {
    title: "פילאטיס מכשירים קלאסי",
    description:
      "הבסיס למצוינות בפילאטיס. בניית כוח ליבה, שיפור יציבה ופיתוח שרירים ארוכים וחטובים באמצעות תנועות מבוקרות ומדויקות.",
    level: "כל הרמות",
    duration: "55 דקות",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "קור ופלואו דינמי",
    description:
      "שילוב מרענן של פילאטיס מסורתי עם רצפי תנועה דינמיים. אתגור הליבה תוך בניית סיבולת לב-ריאה.",
    level: "בינוני",
    duration: "50 דקות",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "יציבה, גמישות ומתיחות",
    description:
      "תנועות עדינות ותראפויטיות המיועדות לטיפול בחוסר איזון ביציבה ולתמיכה בהתאוששות. מושלם למי שמחפשת שיקום מודע.",
    level: "מתחילות",
    duration: "55 דקות",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop",
  },
]

export function Classes() {
  return (
    <section id="classes" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm tracking-widest text-primary">סגנונות שיעורים</p>
            <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              חוויות תנועה מותאמות אישית
            </h2>
          </div>
          <a
            href="#pricing"
            className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
          >
            ← לכל המסלולים
          </a>
        </div>

        {/* Classes Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {classes.map((classItem, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={classItem.image}
                  alt={classItem.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/10" />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-4 flex items-center gap-4">
                  <span className="border border-primary/30 px-3 py-1 text-xs tracking-wider text-primary">
                    {classItem.level}
                  </span>
                  <span className="text-xs tracking-wider text-muted-foreground">
                    {classItem.duration}
                  </span>
                </div>
                <h3 className="mb-3 font-serif text-2xl font-medium text-foreground">{classItem.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {classItem.description}
                </p>
                <div className="mt-6 flex items-center text-sm tracking-wide text-primary transition-colors group-hover:text-accent">
                  למידע נוסף
                  <svg
                    className="mr-2 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
