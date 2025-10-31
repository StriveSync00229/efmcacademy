import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { CategoriesGrid } from "@/components/admin/categories-grid"

export default function CategoriesPage() {
  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Gestion des Catégories</h1>
          <p className="text-muted-foreground">Organisez vos formations par catégories</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Ajouter une catégorie
        </Button>
      </div>

      <CategoriesGrid />
    </div>
  )
}
