import { Check } from "lucide-react"

const packages = [
  {
    name: "מבצע היכרות",
    subtitle: "מושלם למתחילות",
    price: "₪149",
    period: "2 שיעורים",
    description: "התנסות בחוויית BE PILATES עם מבצע ההיכרות האקסקלוסיבי שלנו.",
    features: [
      "2 שיעורי פילאטיס מכשירים לבחירתך",
      "סיור בסטודיו ללא עלות",
      "הערכת תנועה אישית",
      "הדרכה על ציוד כלולה",
    ],
    highlighted: true,
    cta: "להתחיל את המסע",
  },
  {
    name: "כרטיסיית 10 שיעורים",
    subtitle: "גמישות מלאה",
    price: "₪890",
    period: "10 שיעורים",
    description: "האיזון המושלם בין מחויבות לגמישות לאורח החיים שלך.",
    features: [
      "10 שיעורים לניצול בכל זמן",
      "תוקף ל-4 חודשים",
      "ניתן לשיתוף עם בני משפחה",
      "העברת שיעורים שלא נוצלו",
    ],
    highlighted: false,
    cta: "לרכישת כרטיסייה",
  },
  {
    name: "מנוי חודשי חופשי",
    subtitle: "למתאמנות המסורות",
    price: "₪749",
    period: "לחודש",
    description: "גישה ללא הגבלה לשדרוג האימון והעלאת רמת הבריאות שלך.",
    features: [
      "גישה ללא הגבלה לשיעורים",
      "עדיפות בהזמנת מקום",
      "כרטיסי אורח בכל חודש",
      "הנחה של 10% על מוצרים",
    ],
    highlighted: false,
    cta: "להצטרפות למנוי",
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-sm tracking-widest text-primary">מסלולים וכרטיסיות</p>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            התחילי את השינוי
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            בחרי את המסלול שמתאים למטרות הבריאות שלך.
            כל חבילה כוללת גישה לציוד הריפורמר המתקדם שלנו והדרכה מקצועית.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative flex flex-col border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                pkg.highlighted
                  ? "border-primary bg-card shadow-lg"
                  : "border-border bg-card"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary px-4 py-1.5 text-xs tracking-wide text-primary-foreground">
                    הכי פופולרי
                  </span>
                </div>
              )}

              <div className="flex flex-1 flex-col p-8 lg:p-10">
                {/* Package Header */}
                <div className="mb-6">
                  <h3 className="font-serif text-2xl font-medium text-foreground">{pkg.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{pkg.subtitle}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="font-serif text-5xl text-foreground">{pkg.price}</span>
                  <span className="mr-2 text-muted-foreground">/ {pkg.period}</span>
                </div>

                {/* Description */}
                <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                  {pkg.description}
                </p>

                {/* Features */}
                <ul className="mb-8 flex-1 space-y-4">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" strokeWidth={1.5} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`flex items-center justify-center py-4 text-sm tracking-wide transition-all ${
                    pkg.highlighted
                      ? "border border-primary bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background"
                  }`}
                >
                  {pkg.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <p className="mt-12 text-center text-sm text-muted-foreground">
          כל המנויים כוללים שירות מגבות, מים מסוננים וגישה לחדרי ההלבשה המפנקים שלנו.
          <br />
          שאלות? <a href="#contact" className="text-primary hover:underline">צרי קשר</a> לייעוץ אישי.
        </p>
      </div>
    </section>
  )
}
