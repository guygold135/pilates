"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote:
      "אחרי חודשיים אני כבר מרגישה הבדל ביציבה ובכוח. המדריכות מקצועיות ותמיד יודעות איך לדחוף בדיוק את המידה הנכונה.",
    author: "דנה",
    title: "מתאמנת מ-2024",
  },
  {
    quote:
      "האווירה בסטודיו מרגיעה ומזמינה. זה המקום שאני באה אליו כדי לנתק מהעבודה ולהתחבר מחדש לגוף.",
    author: "נועה",
    title: "מתאמנת מ-2023",
  },
  {
    quote:
      "חזרתי לאימון אחרי פציעה, והצוות ליווה אותי בזהירות ובסבלנות. היום אני חזקה יותר ממה שהייתי לפני.",
    author: "טלי",
    title: "מתאמנת מ-2025",
  },
  {
    quote:
      "נובה פילאטיס הפך לחלק קבוע בשגרה שלי. הקבוצות הקטנות והיחס האישי הם מה שמבדילים אותו מכל מקום אחר שניסיתי.",
    author: "אורית",
    title: "מתאמנת מ-2024",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm tracking-widest text-primary">לקוחות מספרות</p>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            מילים מהקהילה שלנו
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative mx-auto max-w-4xl">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-card p-10 text-center md:p-16">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="mx-auto mb-8 h-10 w-10 text-primary"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                      />
                      <path
                        fill="currentColor"
                        d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                      />
                    </svg>
                    <blockquote className="font-serif text-xl leading-relaxed text-foreground md:text-2xl">
                      {testimonial.quote}
                    </blockquote>
                    <div className="mt-10">
                      <p className="font-serif text-lg font-medium text-foreground">{testimonial.author}</p>
                      <p className="mt-1 text-sm tracking-wider text-muted-foreground">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={nextTestimonial}
              className="flex h-12 w-12 items-center justify-center border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:text-primary"
              aria-label="המלצה הבאה"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`עבור להמלצה ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={prevTestimonial}
              className="flex h-12 w-12 items-center justify-center border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:text-primary"
              aria-label="המלצה קודמת"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
