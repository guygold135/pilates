import { Heart, Users, Sparkles, Home } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "יחס אישי ומקצועי",
    description:
      "כל מתאמנת מקבלת התייחסות אישית מלאה, עם תוכנית אימונים המותאמת לצרכים ולמטרות שלה.",
  },
  {
    icon: Users,
    title: "מדריכות קשובות",
    description:
      "המדריכות שלנו שמות לב לכל תנועה קטנה ומדייקות אותך בכל שיעור מחדש, לתוצאות מקסימליות.",
  },
  {
    icon: Sparkles,
    title: "קבוצות קטנות ואינטימיות",
    description:
      "שיעורים בקבוצות קטנות יוצרים סביבה תומכת שבה תקבלי את ההכוונה הממוקדת שמגיעה לך.",
  },
  {
    icon: Home,
    title: "סטודיו נקי ומעוצב",
    description:
      "סטודיו אסתטי באווירת ספא מציע ניתוק מהשגרה - מקום שבו אלגנטיות פוגשת בריאות.",
  },
]

export function Philosophy() {
  return (
    <section id="philosophy" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm tracking-widest text-primary">הפילוסופיה שלנו</p>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            מקדש לגוף ולנפש
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            ב-BE PILATES אנחנו מאמינות ביצירת יותר מאימון - אנחנו יוצרות חוויות
            שמזינות את כל העצמי שלך, ומשאירות אותך חזקה יותר, ממוקדת יותר ורעננה לחלוטין.
          </p>
        </div>

        {/* Values Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div
              key={index}
              className="group cursor-default bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <value.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 font-serif text-xl font-medium text-foreground">{value.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
