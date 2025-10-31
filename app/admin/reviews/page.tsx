"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle, CheckCircle, Eye, MessageSquare, MoreVertical, Search, Star, Trash2, XCircle } from "lucide-react"

interface Review {
  id: string
  userId: string
  userName: string
  userEmail: string
  ebookId: string
  ebookTitle: string
  rating: number
  comment: string
  date: string
  status: "pending" | "approved" | "rejected"
  isReported: boolean
}

export default function ReviewsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [selectedReview, setSelectedReview] = useState<Review | null>(null)
  const [moderationOpen, setModerationOpen] = useState(false)
  const [moderationAction, setModerationAction] = useState<"approve" | "reject" | null>(null)
  const [moderationNote, setModerationNote] = useState("")

  // Données de démonstration
  const reviews: Review[] = [
    {
      id: "1",
      userId: "u1",
      userName: "Marie Dubois",
      userEmail: "marie.dubois@email.com",
      ebookId: "e1",
      ebookTitle: "Marketing Digital Avancé",
      rating: 5,
      comment:
        "Excellente formation ! Les concepts sont très bien expliqués et les exemples pratiques sont pertinents. Je recommande vivement.",
      date: "2024-01-15",
      status: "approved",
      isReported: false,
    },
    {
      id: "2",
      userId: "u2",
      userName: "Jean Martin",
      userEmail: "jean.martin@email.com",
      ebookId: "e2",
      ebookTitle: "Stratégie de Communication",
      rating: 4,
      comment:
        "Très bon contenu, mais j'aurais aimé plus d'études de cas réels. Dans l'ensemble, une formation de qualité.",
      date: "2024-01-14",
      status: "approved",
      isReported: false,
    },
    {
      id: "3",
      userId: "u3",
      userName: "Sophie Laurent",
      userEmail: "sophie.laurent@email.com",
      ebookId: "e3",
      ebookTitle: "SEO et Référencement",
      rating: 5,
      comment: "Formation complète et à jour. Les techniques SEO sont bien détaillées et faciles à mettre en pratique.",
      date: "2024-01-13",
      status: "pending",
      isReported: false,
    },
    {
      id: "4",
      userId: "u4",
      userName: "Pierre Durand",
      userEmail: "pierre.durand@email.com",
      ebookId: "e4",
      ebookTitle: "Réseaux Sociaux Pro",
      rating: 2,
      comment: "Contenu trop basique et pas assez approfondi. Déçu de mon achat.",
      date: "2024-01-12",
      status: "pending",
      isReported: true,
    },
    {
      id: "5",
      userId: "u5",
      userName: "Claire Petit",
      userEmail: "claire.petit@email.com",
      ebookId: "e1",
      ebookTitle: "Marketing Digital Avancé",
      rating: 3,
      comment: "Formation correcte mais certains chapitres manquent de profondeur. Prix un peu élevé.",
      date: "2024-01-11",
      status: "rejected",
      isReported: false,
    },
  ]

  const filteredReviews = reviews.filter((review) => {
    const matchesSearch =
      review.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.ebookTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.comment.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || review.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const handleModerate = (review: Review, action: "approve" | "reject") => {
    setSelectedReview(review)
    setModerationAction(action)
    setModerationOpen(true)
  }

  const handleConfirmModeration = () => {
    console.log("[v0] Moderating review:", selectedReview?.id, moderationAction)
    console.log("[v0] Note:", moderationNote)
    setModerationOpen(false)
    setModerationNote("")
    setSelectedReview(null)
    setModerationAction(null)
  }

  const handleDelete = (review: Review) => {
    console.log("[v0] Deleting review:", review.id)
  }

  const handleView = (review: Review) => {
    console.log("[v0] Viewing review details:", review.id)
  }

  const stats = {
    total: reviews.length,
    pending: reviews.filter((r) => r.status === "pending").length,
    approved: reviews.filter((r) => r.status === "approved").length,
    reported: reviews.filter((r) => r.isReported).length,
    averageRating: (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1),
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"}`}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-balance">Commentaires</h1>
        <p className="text-muted-foreground mt-2">Modérez les avis et commentaires des utilisateurs</p>
      </div>

      {/* Statistiques */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-xs text-muted-foreground mt-1">Commentaires</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">En attente</CardTitle>
            <AlertCircle className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pending}</div>
            <p className="text-xs text-muted-foreground mt-1">À modérer</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Approuvés</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.approved}</div>
            <p className="text-xs text-muted-foreground mt-1">Publiés</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Signalés</CardTitle>
            <XCircle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.reported}</div>
            <p className="text-xs text-muted-foreground mt-1">À vérifier</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Note moyenne</CardTitle>
            <Star className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.averageRating}</div>
            <p className="text-xs text-muted-foreground mt-1">Sur 5 étoiles</p>
          </CardContent>
        </Card>
      </div>

      {/* Liste des commentaires */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <CardTitle>Liste des commentaires</CardTitle>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Statut" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous</SelectItem>
                  <SelectItem value="pending">En attente</SelectItem>
                  <SelectItem value="approved">Approuvés</SelectItem>
                  <SelectItem value="rejected">Rejetés</SelectItem>
                </SelectContent>
              </Select>
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Rechercher..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Utilisateur</TableHead>
                  <TableHead>Formation</TableHead>
                  <TableHead>Note</TableHead>
                  <TableHead>Commentaire</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredReviews.map((review) => (
                  <TableRow
                    key={review.id}
                    className={`hover:bg-muted/50 transition-colors ${
                      review.isReported ? "bg-red-50 dark:bg-red-950/10" : ""
                    }`}
                  >
                    <TableCell>
                      <div>
                        <div className="font-medium flex items-center gap-2">
                          {review.userName}
                          {review.isReported && (
                            <Badge variant="destructive" className="text-xs">
                              Signalé
                            </Badge>
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground">{review.userEmail}</div>
                      </div>
                    </TableCell>
                    <TableCell className="max-w-xs">
                      <div className="truncate">{review.ebookTitle}</div>
                    </TableCell>
                    <TableCell>{renderStars(review.rating)}</TableCell>
                    <TableCell className="max-w-md">
                      <div className="line-clamp-2 text-sm">{review.comment}</div>
                    </TableCell>
                    <TableCell>{new Date(review.date).toLocaleDateString("fr-FR")}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          review.status === "approved"
                            ? "default"
                            : review.status === "pending"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {review.status === "approved"
                          ? "Approuvé"
                          : review.status === "pending"
                            ? "En attente"
                            : "Rejeté"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleView(review)}>
                            <Eye className="mr-2 h-4 w-4" />
                            Voir détails
                          </DropdownMenuItem>
                          {review.status === "pending" && (
                            <>
                              <DropdownMenuItem onClick={() => handleModerate(review, "approve")}>
                                <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                                Approuver
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleModerate(review, "reject")}>
                                <XCircle className="mr-2 h-4 w-4 text-red-600" />
                                Rejeter
                              </DropdownMenuItem>
                            </>
                          )}
                          <DropdownMenuItem onClick={() => handleDelete(review)} className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Supprimer
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Dialog de modération */}
      <Dialog open={moderationOpen} onOpenChange={setModerationOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {moderationAction === "approve" ? "Approuver le commentaire" : "Rejeter le commentaire"}
            </DialogTitle>
            <DialogDescription>
              {selectedReview && (
                <div className="space-y-2 mt-4">
                  <div>
                    <span className="font-medium">Utilisateur:</span> {selectedReview.userName}
                  </div>
                  <div>
                    <span className="font-medium">Formation:</span> {selectedReview.ebookTitle}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Note:</span>
                    {renderStars(selectedReview.rating)}
                  </div>
                  <div className="mt-4 p-3 bg-muted rounded-lg">
                    <p className="text-sm">{selectedReview.comment}</p>
                  </div>
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Note de modération (optionnelle)</label>
              <Textarea
                placeholder="Ajoutez une note interne sur cette décision..."
                value={moderationNote}
                onChange={(e) => setModerationNote(e.target.value)}
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setModerationOpen(false)}>
              Annuler
            </Button>
            <Button
              onClick={handleConfirmModeration}
              variant={moderationAction === "approve" ? "default" : "destructive"}
            >
              {moderationAction === "approve" ? "Approuver" : "Rejeter"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
