"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Award, Download, Eye, MoreVertical, Search, Send, Trash2 } from "lucide-react"

interface Certificate {
  id: string
  userId: string
  userName: string
  userEmail: string
  ebookTitle: string
  quizScore: number
  issueDate: string
  certificateNumber: string
  status: "issued" | "revoked"
}

export default function CertificatesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)
  const [previewOpen, setPreviewOpen] = useState(false)

  // Données de démonstration
  const certificates: Certificate[] = [
    {
      id: "1",
      userId: "u1",
      userName: "Marie Dubois",
      userEmail: "marie.dubois@email.com",
      ebookTitle: "Marketing Digital Avancé",
      quizScore: 95,
      issueDate: "2024-01-15",
      certificateNumber: "EFMC-2024-001",
      status: "issued",
    },
    {
      id: "2",
      userId: "u2",
      userName: "Jean Martin",
      userEmail: "jean.martin@email.com",
      ebookTitle: "Stratégie de Communication",
      quizScore: 88,
      issueDate: "2024-01-14",
      certificateNumber: "EFMC-2024-002",
      status: "issued",
    },
    {
      id: "3",
      userId: "u3",
      userName: "Sophie Laurent",
      userEmail: "sophie.laurent@email.com",
      ebookTitle: "SEO et Référencement",
      quizScore: 92,
      issueDate: "2024-01-13",
      certificateNumber: "EFMC-2024-003",
      status: "issued",
    },
    {
      id: "4",
      userId: "u4",
      userName: "Pierre Durand",
      userEmail: "pierre.durand@email.com",
      ebookTitle: "Réseaux Sociaux Pro",
      quizScore: 78,
      issueDate: "2024-01-10",
      certificateNumber: "EFMC-2024-004",
      status: "revoked",
    },
  ]

  const filteredCertificates = certificates.filter(
    (cert) =>
      cert.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.ebookTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.certificateNumber.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handlePreview = (certificate: Certificate) => {
    setSelectedCertificate(certificate)
    setPreviewOpen(true)
  }

  const handleDownload = (certificate: Certificate) => {
    console.log("[v0] Downloading certificate:", certificate.certificateNumber)
    // Logique de téléchargement
  }

  const handleSendEmail = (certificate: Certificate) => {
    console.log("[v0] Sending certificate via email:", certificate.userEmail)
    // Logique d'envoi par email
  }

  const handleRevoke = (certificate: Certificate) => {
    console.log("[v0] Revoking certificate:", certificate.certificateNumber)
    // Logique de révocation
  }

  const stats = {
    total: certificates.length,
    issued: certificates.filter((c) => c.status === "issued").length,
    revoked: certificates.filter((c) => c.status === "revoked").length,
    thisMonth: certificates.filter((c) => new Date(c.issueDate).getMonth() === new Date().getMonth()).length,
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-balance">Attestations</h1>
        <p className="text-muted-foreground mt-2">Gérez les certificats de réussite des apprenants</p>
      </div>

      {/* Statistiques */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-xs text-muted-foreground mt-1">Certificats générés</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Actifs</CardTitle>
            <Award className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.issued}</div>
            <p className="text-xs text-muted-foreground mt-1">Certificats valides</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Révoqués</CardTitle>
            <Award className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.revoked}</div>
            <p className="text-xs text-muted-foreground mt-1">Certificats annulés</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Ce mois</CardTitle>
            <Award className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.thisMonth}</div>
            <p className="text-xs text-muted-foreground mt-1">Nouveaux certificats</p>
          </CardContent>
        </Card>
      </div>

      {/* Liste des certificats */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <CardTitle>Liste des certificats</CardTitle>
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
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>N° Certificat</TableHead>
                  <TableHead>Apprenant</TableHead>
                  <TableHead>Formation</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCertificates.map((certificate) => (
                  <TableRow key={certificate.id} className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-mono text-sm">{certificate.certificateNumber}</TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{certificate.userName}</div>
                        <div className="text-sm text-muted-foreground">{certificate.userEmail}</div>
                      </div>
                    </TableCell>
                    <TableCell>{certificate.ebookTitle}</TableCell>
                    <TableCell>
                      <Badge variant={certificate.quizScore >= 80 ? "default" : "secondary"}>
                        {certificate.quizScore}%
                      </Badge>
                    </TableCell>
                    <TableCell>{new Date(certificate.issueDate).toLocaleDateString("fr-FR")}</TableCell>
                    <TableCell>
                      <Badge variant={certificate.status === "issued" ? "default" : "destructive"}>
                        {certificate.status === "issued" ? "Actif" : "Révoqué"}
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
                          <DropdownMenuItem onClick={() => handlePreview(certificate)}>
                            <Eye className="mr-2 h-4 w-4" />
                            Prévisualiser
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleDownload(certificate)}>
                            <Download className="mr-2 h-4 w-4" />
                            Télécharger PDF
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleSendEmail(certificate)}>
                            <Send className="mr-2 h-4 w-4" />
                            Envoyer par email
                          </DropdownMenuItem>
                          {certificate.status === "issued" && (
                            <DropdownMenuItem onClick={() => handleRevoke(certificate)} className="text-destructive">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Révoquer
                            </DropdownMenuItem>
                          )}
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

      {/* Dialog de prévisualisation */}
      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Prévisualisation du certificat</DialogTitle>
            <DialogDescription>{selectedCertificate?.certificateNumber}</DialogDescription>
          </DialogHeader>
          {selectedCertificate && (
            <div className="border-2 border-primary/20 rounded-lg p-8 bg-gradient-to-br from-background to-muted/20">
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <Award className="h-16 w-16 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-balance">Certificat de Réussite</h2>
                  <p className="text-muted-foreground mt-2">EFMC Academy</p>
                </div>
                <div className="space-y-2">
                  <p className="text-lg">Décerné à</p>
                  <p className="text-2xl font-bold">{selectedCertificate.userName}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Pour avoir complété avec succès la formation</p>
                  <p className="text-xl font-semibold">{selectedCertificate.ebookTitle}</p>
                </div>
                <div className="flex justify-center gap-8 pt-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Score obtenu</p>
                    <p className="text-2xl font-bold text-primary">{selectedCertificate.quizScore}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Date</p>
                    <p className="text-lg font-semibold">
                      {new Date(selectedCertificate.issueDate).toLocaleDateString("fr-FR")}
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-xs text-muted-foreground font-mono">{selectedCertificate.certificateNumber}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
