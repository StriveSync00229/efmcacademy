"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, BookOpen, ShoppingCart } from "lucide-react"
import Image from "next/image"

const ebooks = [
  {
    title: "Marketing Digital Avancé",
    author: "Marie Dubois",
    category: "Marketing",
    price: "49.99€",
    rating: 4.8,
    reviews: 234,
    duration: "8h de lecture",
    image: "/marketing-digital-book-cover-professional-blue.jpg",
    bestseller: true,
  },
  {
    title: "Développement Web Moderne",
    author: "Jean Martin",
    category: "Développement",
    price: "59.99€",
    rating: 4.9,
    reviews: 456,
    duration: "12h de lecture",
    image: "/web-development-programming-book-cover-modern.jpg",
    bestseller: true,
  },
  {
    title: "Gestion de Projet Agile",
    author: "Sophie Laurent",
    category: "Management",
    price: "44.99€",
    rating: 4.7,
    reviews: 189,
    duration: "6h de lecture",
    image: "/agile-project-management-book-cover-professional.jpg",
    bestseller: false,
  },
  {
    title: "Intelligence Artificielle pour Tous",
    author: "Pierre Durand",
    category: "IA",
    price: "54.99€",
    rating: 4.9,
    reviews: 567,
    duration: "10h de lecture",
    image: "/artificial-intelligence-ai-book-cover-futuristic.jpg",
    bestseller: true,
  },
]

export function FeaturedEbooks() {
  return (
    <section id="catalogue" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Les formations du moment</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nos ebooks les plus populaires, plébiscités par nos apprenants
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ebooks.map((ebook, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0 relative">
                {ebook.bestseller && <Badge className="absolute top-4 right-4 z-10 bg-primary">Bestseller</Badge>}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={ebook.image || "/placeholder.svg"}
                    alt={ebook.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </CardHeader>

              <CardContent className="p-6 space-y-3">
                <Badge variant="secondary" className="text-xs">
                  {ebook.category}
                </Badge>

                <h3 className="font-bold text-lg line-clamp-2 group-hover:text-primary transition-colors">
                  {ebook.title}
                </h3>

                <p className="text-sm text-muted-foreground">Par {ebook.author}</p>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-sm">{ebook.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({ebook.reviews} avis)</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{ebook.duration}</span>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">{ebook.price}</span>
                <Button size="sm" className="group/btn">
                  <ShoppingCart className="h-4 w-4 mr-2 transition-transform group-hover/btn:scale-110" />
                  Acheter
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Voir tout le catalogue
            <BookOpen className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
