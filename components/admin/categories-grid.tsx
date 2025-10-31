import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Edit, Trash2, Code, TrendingUp, Users, Building, Calculator, Star, Briefcase, Megaphone } from "lucide-react"

const categories = [
  {
    icon: Megaphone,
    title: "Marketing, Communication et IA",
    color: "from-yellow-400 to-orange-500",
    count: 120,
  },
  {
    icon: Users,
    title: "Commercial et Relation Client",
    color: "from-teal-400 to-cyan-500",
    count: 85,
  },
  {
    icon: Code,
    title: "Développement Web / Informatique",
    color: "from-blue-400 to-indigo-500",
    count: 150,
  },
  {
    icon: TrendingUp,
    title: "Management et Gestion",
    color: "from-pink-400 to-rose-500",
    count: 95,
  },
  {
    icon: Briefcase,
    title: "Ressources Humaines et Paie",
    color: "from-red-400 to-pink-500",
    count: 70,
  },
  {
    icon: Building,
    title: "Immobilier",
    color: "from-orange-400 to-amber-500",
    count: 45,
  },
  {
    icon: Calculator,
    title: "Administration, Finance et Comptabilité",
    color: "from-slate-400 to-gray-500",
    count: 80,
  },
  {
    icon: Star,
    title: "Extra Skills",
    color: "from-purple-400 to-violet-500",
    count: 60,
  },
]

export function CategoriesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {categories.map((category, index) => {
        const Icon = category.icon
        return (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
              >
                <Icon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{category.title}</h3>
                <p className="text-sm text-muted-foreground">{category.count} formations</p>
              </div>
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  <Edit className="h-4 w-4 mr-1" />
                  Modifier
                </Button>
                <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 bg-transparent">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
