"use client"

import { Card } from "@/components/ui/card"
import { ShoppingCart, BookOpen, ClipboardCheck, Award } from "lucide-react"
import Image from "next/image"

const steps = [
  {
    icon: ShoppingCart,
    title: "Choisissez votre formation",
    description: "Parcourez notre catalogue et sélectionnez l'ebook qui correspond à vos objectifs professionnels.",
    image: "/person-browsing-online-courses-on-tablet-professio.jpg",
  },
  {
    icon: BookOpen,
    title: "Lisez à votre rythme",
    description:
      "Accédez immédiatement à votre ebook et progressez à votre propre vitesse. Votre progression est automatiquement sauvegardée.",
    image: "/person-reading-ebook-on-laptop-comfortable-workspa.jpg",
  },
  {
    icon: ClipboardCheck,
    title: "Validez vos acquis",
    description: "Complétez le quiz QCM pour évaluer vos connaissances et démontrer votre maîtrise du sujet.",
    image: "/person-taking-online-quiz-test-on-computer-focused.jpg",
  },
  {
    icon: Award,
    title: "Obtenez votre attestation",
    description:
      "Recevez instantanément votre attestation de réussite certifiée, valorisable sur votre CV et LinkedIn.",
    image: "/professional-certificate-diploma-achievement-succe.jpg",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Des formations <span className="text-primary">innovantes</span>, adaptées à chaque besoin
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Que vous soyez en poste, en reconversion professionnelle, ou que vous renforciez les compétences de vos
            collaborateurs, EFMC Academy vous accompagne grâce à son offre de formation continue à distance.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 0

            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-in-up ${
                  isEven ? "" : "lg:grid-flow-dense"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`space-y-6 ${isEven ? "" : "lg:col-start-2"}`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl font-bold text-primary/20">{String(index + 1).padStart(2, "0")}</span>
                      <h3 className="text-2xl md:text-3xl font-bold">{step.title}</h3>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>

                <div className={`relative ${isEven ? "" : "lg:col-start-1 lg:row-start-1"}`}>
                  <Card className="overflow-hidden border-2 shadow-xl">
                    <div className="relative aspect-[4/3]">
                      <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                    </div>
                  </Card>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
