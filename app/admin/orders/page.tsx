import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { OrdersTable } from "@/components/admin/orders-table"

export default function OrdersPage() {
  return (
    <div className="space-y-6 animate-fade-in-up">
      <div>
        <h1 className="text-3xl font-bold mb-2">Commandes</h1>
        <p className="text-muted-foreground">Suivez toutes les transactions</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Rechercher une commande..." className="pl-10" />
        </div>
        <Button variant="outline">Filtres</Button>
      </div>

      <OrdersTable />
    </div>
  )
}
