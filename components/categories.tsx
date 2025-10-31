"use client"

import { Card } from "@/components/ui/card"
import { Code, TrendingUp, Users, Building, Calculator, Star, Briefcase, Megaphone } from "lucide-react"

const categories = [
  {
    icon: Megaphone,
    title: "Marketing, Communication et IA",
    color: "from-yellow-400 to-orange-500",
    count: "120+ formations",
  },
  {
    icon: Users,
    title: "Commercial et Relation Client",
    color: "from-teal-400 to-cyan-500",
    count: "85+ formations",
  },
  {
    icon: Code,
    title: "Développement Web / Informatique",
    color: "from-blue-400 to-indigo-500",
    count: "150+ formations",
  },
  {
    icon: TrendingUp,
    title: "Management et Gestion",
    color: "from-pink-400 to-rose-500",
    count: "95+ formations",
  },
  {
    icon: Briefcase,
    title: "Ressources Humaines et Paie",
    color: "from-red-400 to-pink-500",
    count: "70+ formations",
  },
  {
    icon: Building,
    title: "Immobilier",
    color: "from-orange-400 to-amber-500",
    count: "45+ formations",
  },
  {
    icon: Calculator,
    title: "Administration, Finance et Comptabilité",
    color: "from-slate-400 to-gray-500",
    count: "80+ formations",
  },
  {
    icon: Star,
    title: "Extra Skills",
    color: "from-purple-400 to-violet-500",
    count: "60+ formations",
  },
]

export function Categories() {
  return (
    <section id="formations" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Découvrez nos thématiques de formations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des formations adaptées à chaque besoin professionnel
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={index}
                className="group p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{category.count}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
