import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Edit, Trash2, Eye } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Card } from "@/components/ui/card"

const ebooks = [
  {
    id: 1,
    title: "Marketing Digital Avancé",
    category: "Marketing",
    price: "49.00 €",
    sales: 234,
    status: "Publié",
  },
  {
    id: 2,
    title: "Développement Web Moderne",
    category: "Développement",
    price: "59.00 €",
    sales: 189,
    status: "Publié",
  },
  {
    id: 3,
    title: "Management d'Équipe",
    category: "Management",
    price: "39.00 €",
    sales: 156,
    status: "Publié",
  },
  {
    id: 4,
    title: "Finance pour Entrepreneurs",
    category: "Finance",
    price: "45.00 €",
    sales: 134,
    status: "Brouillon",
  },
  {
    id: 5,
    title: "Communication Efficace",
    category: "Communication",
    price: "35.00 €",
    sales: 98,
    status: "Publié",
  },
]

export function EbooksTable() {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Titre</TableHead>
            <TableHead>Catégorie</TableHead>
            <TableHead>Prix</TableHead>
            <TableHead>Ventes</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ebooks.map((ebook) => (
            <TableRow key={ebook.id}>
              <TableCell className="font-medium">{ebook.title}</TableCell>
              <TableCell>{ebook.category}</TableCell>
              <TableCell>{ebook.price}</TableCell>
              <TableCell>{ebook.sales}</TableCell>
              <TableCell>
                <Badge variant={ebook.status === "Publié" ? "default" : "secondary"}>{ebook.status}</Badge>
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
                      Voir
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="h-4 w-4 mr-2" />
                      Modifier
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Supprimer
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
