import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search } from "lucide-react"
import { EbooksTable } from "@/components/admin/ebooks-table"

export default function EbooksPage() {
  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Gestion des Ebooks</h1>
          <p className="text-muted-foreground">Gérez votre catalogue d'ebooks</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Ajouter un ebook
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Rechercher un ebook..." className="pl-10" />
        </div>
        <Button variant="outline">Filtres</Button>
      </div>

      <EbooksTable />
    </div>
  )
}
