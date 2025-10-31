"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sophie Martin",
    role: "Chef de Projet Digital",
    company: "TechCorp",
    image: "/smiling-professional-woman.png",
    rating: 5,
    text: "EFMC Academy m'a permis de monter en compétences rapidement. Les ebooks sont très bien structurés et les quiz permettent vraiment de valider ses acquis. J'ai obtenu 3 attestations en 2 mois !",
  },
  {
    name: "Thomas Dubois",
    role: "Développeur Full Stack",
    company: "StartupLab",
    image: "/professional-man-smiling-developer-portrait.jpg",
    rating: 5,
    text: "La qualité des contenus est exceptionnelle. J'apprécie particulièrement la possibilité de lire à mon rythme et de reprendre là où je me suis arrêté. Les attestations sont un vrai plus pour mon CV.",
  },
  {
    name: "Marie Lefebvre",
    role: "Responsable Marketing",
    company: "InnovateCo",
    image: "/professional-woman-confident-marketing-executive.jpg",
    rating: 5,
    text: "Une plateforme intuitive et des formations de qualité. J'ai pu me former sur l'IA et le marketing digital en quelques semaines. Le système de quiz est très bien pensé et les attestations sont reconnues.",
  },
]

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Ils ont réussi avec <span className="text-primary">EFMC Academy</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Découvrez les témoignages de nos apprenants</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 space-y-6">
                <Quote className="h-10 w-10 text-primary/20" />

                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">"{testimonial.text}"</p>

                <div className="flex items-center gap-4 pt-4 border-t">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-primary">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
