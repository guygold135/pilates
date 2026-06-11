import { Heart, Users, Sparkles, Home } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "יחס אישי ומקצועי",
    description:
      "כל מתאמנת עוברת הערכה ראשונית ומקבלת תוכנית אימונים שמותאמת ליכולות, למטרות ולקצב האישי שלה.",
  },
  {
    icon: Users,
    title: "מדריכות קשובות",
    description:
      "צוות המדריכות שלנו מתמקד בביצוע נכון ובתיקונים עדינים, כדי שתרגישי בטוחה ובשליטה בכל תנועה.",
  },
  {
    icon: Sparkles,
    title: "קבוצות קטנות ואינטימיות",
    description:
      "עד שש מתאמנות בכל שיעור — כך שיש מקום לתשומת לב, לשאלות ולליווי צמוד לאורך כל האימון.",
  },
  {
    icon: Home,
    title: "סטודיו נקי ומעוצב",
    description:
      "חלל מואר ומזמין שמזמין אותך לעצור לרגע, לנשום ולהתמקד בעצמך — הרחק מהרעש של היום-יום.",
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
            תנועה מודעת, תוצאות אמיתיות
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            בנובה פילאטיס אנחנו רואות בכל שיעור הזדמנות לחזק את הגוף, לשפר את היציבה
            ולהרגיש טוב יותר — בגוף, בראש וביום-יום.
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
