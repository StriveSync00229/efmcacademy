import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Edit, Trash2, Eye, Copy } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Card } from "@/components/ui/card"

const quizzes = [
  {
    id: 1,
    title: "Quiz Marketing Digital",
    ebook: "Marketing Digital Avancé",
    questions: 20,
    passRate: "80%",
    attempts: 234,
    status: "Actif",
  },
  {
    id: 2,
    title: "Quiz Développement Web",
    ebook: "Développement Web Moderne",
    questions: 25,
    passRate: "75%",
    attempts: 189,
    status: "Actif",
  },
  {
    id: 3,
    title: "Quiz Management",
    ebook: "Management d'Équipe",
    questions: 15,
    passRate: "85%",
    attempts: 156,
    status: "Actif",
  },
  {
    id: 4,
    title: "Quiz Finance",
    ebook: "Finance pour Entrepreneurs",
    questions: 18,
    passRate: "70%",
    attempts: 134,
    status: "Brouillon",
  },
  {
    id: 5,
    title: "Quiz Communication",
    ebook: "Communication Efficace",
    questions: 12,
    passRate: "90%",
    attempts: 98,
    status: "Actif",
  },
]

export function QuizTable() {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Titre du Quiz</TableHead>
            <TableHead>Ebook associé</TableHead>
            <TableHead>Questions</TableHead>
            <TableHead>Taux de réussite</TableHead>
            <TableHead>Tentatives</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {quizzes.map((quiz) => (
            <TableRow key={quiz.id}>
              <TableCell className="font-medium">{quiz.title}</TableCell>
              <TableCell>{quiz.ebook}</TableCell>
              <TableCell>{quiz.questions}</TableCell>
              <TableCell>{quiz.passRate}</TableCell>
              <TableCell>{quiz.attempts}</TableCell>
              <TableCell>
                <Badge variant={quiz.status === "Actif" ? "default" : "secondary"}>{quiz.status}</Badge>
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
                    <DropdownMenuItem>
                      <Copy className="h-4 w-4 mr-2" />
                      Dupliquer
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
