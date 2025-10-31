"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-semibold">Offre de lancement</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
              Prêt à développer vos compétences ?
            </h2>

            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Rejoignez plus de 10 000 professionnels qui ont déjà transformé leur carrière avec EFMC Academy. Commencez
              votre formation dès aujourd'hui.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-lg group bg-white text-primary hover:bg-white/90">
                Commencer maintenant
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg border-white text-white hover:bg-white/10 bg-transparent"
              >
                Découvrir l'offre entreprise
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold">500+</p>
                <p className="text-sm text-primary-foreground/80">Formations disponibles</p>
              </div>
              <div className="h-12 w-px bg-white/20" />
              <div>
                <p className="text-3xl font-bold">95%</p>
                <p className="text-sm text-primary-foreground/80">Satisfaction client</p>
              </div>
              <div className="h-12 w-px bg-white/20" />
              <div>
                <p className="text-3xl font-bold">24/7</p>
                <p className="text-sm text-primary-foreground/80">Support disponible</p>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in hidden lg:block">
            <div className="relative aspect-square">
              <Image
                src="/diverse-team-celebrating-success-professional-offi.jpg"
                alt="Équipe EFMC Academy"
                fill
                className="object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
