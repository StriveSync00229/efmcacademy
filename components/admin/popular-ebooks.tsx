import { Progress } from "@/components/ui/progress"

const ebooks = [
  { title: "Marketing Digital Avancé", sales: 234, progress: 85 },
  { title: "Développement Web Moderne", sales: 189, progress: 70 },
  { title: "Management d'Équipe", sales: 156, progress: 60 },
  { title: "Finance pour Entrepreneurs", sales: 134, progress: 50 },
  { title: "Communication Efficace", sales: 98, progress: 35 },
]

export function PopularEbooks() {
  return (
    <div className="space-y-6">
      {ebooks.map((ebook, index) => (
        <div key={index} className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="font-medium">{ebook.title}</p>
            <span className="text-sm text-muted-foreground">{ebook.sales} ventes</span>
          </div>
          <Progress value={ebook.progress} className="h-2" />
        </div>
      ))}
    </div>
  )
}
