import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Eye, Download } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Card } from "@/components/ui/card"

const orders = [
  {
    id: "#12345",
    customer: "Marie Dubois",
    ebook: "Marketing Digital Avancé",
    amount: "49.00 €",
    date: "15/01/2025",
    status: "Complété",
  },
  {
    id: "#12344",
    customer: "Jean Martin",
    ebook: "Développement Web Moderne",
    amount: "59.00 €",
    date: "14/01/2025",
    status: "Complété",
  },
  {
    id: "#12343",
    customer: "Sophie Bernard",
    ebook: "Management d'Équipe",
    amount: "39.00 €",
    date: "14/01/2025",
    status: "En attente",
  },
  {
    id: "#12342",
    customer: "Pierre Petit",
    ebook: "Finance pour Entrepreneurs",
    amount: "45.00 €",
    date: "13/01/2025",
    status: "Complété",
  },
  {
    id: "#12341",
    customer: "Claire Moreau",
    ebook: "Communication Efficace",
    amount: "35.00 €",
    date: "13/01/2025",
    status: "Remboursé",
  },
]

export function OrdersTable() {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Commande</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Ebook</TableHead>
            <TableHead>Montant</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.ebook}</TableCell>
              <TableCell>{order.amount}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    order.status === "Complété"
                      ? "default"
                      : order.status === "En attente"
                        ? "secondary"
                        : "destructive"
                  }
                >
                  {order.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Eye className="h-4 w-4 mr-2" />
                      Voir détails
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Download className="h-4 w-4 mr-2" />
                      Télécharger facture
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
