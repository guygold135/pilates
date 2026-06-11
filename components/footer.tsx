"use client"

import Link from "next/link"
import { useState } from "react"
import { Mail, MapPin, Clock, Phone } from "lucide-react"

const STUDIO_ADDRESS = "HaOrenim St 14, Ramat Gan"
const STUDIO_PHONE = "050-555-1234"
const STUDIO_PHONE_TEL = `tel:${STUDIO_PHONE.replace(/-/g, "")}`
const STUDIO_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(STUDIO_ADDRESS)}`
const INSTAGRAM_URL = "#"
const FACEBOOK_URL = "#"
const STUDIO_EMAIL = "hello@novapilates.co.il"
const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID
  ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID}`
  : null

export function Footer() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    if (!FORMSPREE_ENDPOINT) {
      setError("טופס ההרשמה לא מוגדר. אנא צרי קשר בטלפון.")
      return
    }

    setIsSubmitting(true)

    try {
      const body = new FormData()
      body.append("name", name)
      body.append("email", email)
      body.append("phone", phone)
      body.append("_subject", "בקשה חדשה לשיעור היכרות - NOVA PILATES")

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
      })

      const data = await response.json()

      if (!response.ok) {
        const message =
          typeof data.error === "string"
            ? data.error
            : "שליחת הטופס נכשלה. נסי שוב או צרי קשר בטלפון."
        throw new Error(message)
      }

      setSubmitted(true)
      setEmail("")
      setName("")
      setPhone("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "אירעה שגיאה. נסי שוב מאוחר יותר.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer id="contact" className="bg-foreground text-background">
      {/* Lead Capture Section */}
      <div className="border-b border-background/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Form */}
            <div>
              <p className="mb-4 text-sm tracking-widest text-primary">בואי נתחיל</p>
              <h2 className="font-serif text-3xl font-medium text-background md:text-4xl">
                מתחילה את המסע שלך איתנו?
              </h2>
              <p className="mt-4 leading-relaxed text-background/70">
                רוצה לנסות? השאירי פרטים ונחזור אלייך לתיאום שיעור היכרות חינם וסיור קצר בסטודיו.
              </p>

              {submitted ? (
                <div className="mt-8 border border-primary/30 bg-primary/10 p-6">
                  <p className="font-serif text-xl text-background">תודה רבה!</p>
                  <p className="mt-2 text-sm text-background/70">
                    ניצור איתך קשר תוך 24 שעות לתיאום הביקור שלך.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  <div>
                    <label htmlFor="name" className="sr-only">שם מלא</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="שם מלא"
                      required
                      disabled={isSubmitting}
                      className="w-full border border-background/20 bg-transparent px-4 py-4 text-right text-sm text-background placeholder:text-right placeholder:text-background/50 focus:border-primary focus:outline-none disabled:opacity-60"
                      dir="rtl"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">טלפון</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="טלפון"
                      required
                      disabled={isSubmitting}
                      dir="rtl"
                      className="w-full border border-background/20 bg-transparent px-4 py-4 text-right text-sm text-background placeholder:text-right placeholder:text-background/50 focus:border-primary focus:outline-none disabled:opacity-60"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">אימייל</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="אימייל"
                      required
                      disabled={isSubmitting}
                      dir="rtl"
                      className="w-full border border-background/20 bg-transparent px-4 py-4 text-right text-sm text-background placeholder:text-right placeholder:text-background/50 focus:border-primary focus:outline-none disabled:opacity-60"
                    />
                  </div>
                  {error && (
                    <p className="text-sm text-red-300" role="alert">
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full border border-primary bg-primary px-8 py-4 text-sm tracking-wide text-primary-foreground transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "שולח..." : "תיאום שיעור היכרות בסטודיו"}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:pr-12">
              <div className="space-y-8">
                <div>
                  <h3 className="mb-4 font-serif text-xl font-medium text-background">בקרי בסטודיו</h3>
                  <a
                    href={STUDIO_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 text-background/70 transition-colors hover:text-background"
                    aria-label={`פתיחת מיקום הסטודיו במפות: ${STUDIO_ADDRESS}`}
                  >
                    <MapPin
                      className="mt-1 h-5 w-5 flex-shrink-0 text-primary transition-colors group-hover:text-primary/80"
                      strokeWidth={1.5}
                    />
                    <p>
                      רחוב האורנים 14
                      <br />
                      רמת גן, ישראל
                    </p>
                  </a>
                </div>

                <div>
                  <h3 className="mb-4 font-serif text-xl font-medium text-background">שעות פעילות</h3>
                  <div className="flex items-start gap-3 text-background/70">
                    <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-primary" strokeWidth={1.5} />
                    <div className="space-y-1 text-sm">
                      <p>ראשון – חמישי: 07:00 – 20:00</p>
                      <p>שישי: 08:00 – 13:00</p>
                      <p>שבת: סגור</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 font-serif text-xl font-medium text-background">צרי קשר</h3>
                  <div className="space-y-3">
                    <a
                      href={STUDIO_PHONE_TEL}
                      className="flex items-center gap-3 text-background/70 transition-colors hover:text-background"
                      aria-label={`התקשרו אלינו: ${STUDIO_PHONE}`}
                    >
                      <Phone className="h-5 w-5 flex-shrink-0 text-primary" strokeWidth={1.5} />
                      <span className="hover:text-primary">{STUDIO_PHONE}</span>
                    </a>
                    <div className="flex items-center gap-3 text-background/70">
                      <Mail className="h-5 w-5 flex-shrink-0 text-primary" strokeWidth={1.5} />
                      <a href={`mailto:${STUDIO_EMAIL}`} className="hover:text-primary">
                        {STUDIO_EMAIL}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center border border-background/20 text-background/70 transition-all hover:border-primary hover:text-primary"
                    aria-label="אינסטגרם"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center border border-background/20 text-background/70 transition-all hover:border-primary hover:text-primary"
                    aria-label="פייסבוק"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs tracking-wider text-background/50">
            <Link href="#" className="transition-colors hover:text-background">
              מדיניות פרטיות
            </Link>
            <Link href="#" className="transition-colors hover:text-background">
              תנאי שימוש
            </Link>
            <span>© 2026 Nova Pilates Studio. כל הזכויות שמורות.</span>
        </div>
      </div>
    </footer>
  )
}
