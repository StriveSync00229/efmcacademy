"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer id="contact" className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image src="/logo.png" alt="EFMC Academy" fill className="object-contain" />
              </div>
              <span className="text-xl font-bold">
                EFMC <span className="text-primary">Academy</span>
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Votre partenaire pour la formation professionnelle en ligne. Développez vos compétences avec nos ebooks
              interactifs et obtenez des attestations reconnues.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="outline" className="rounded-full bg-transparent">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full bg-transparent">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full bg-transparent">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full bg-transparent">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#formations" className="text-muted-foreground hover:text-primary transition-colors">
                  Nos formations
                </Link>
              </li>
              <li>
                <Link href="#catalogue" className="text-muted-foreground hover:text-primary transition-colors">
                  Catalogue
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Devenir formateur
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Offre entreprise
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Centre d'aide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Conditions générales
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Nous contacter
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  123 Avenue de la Formation
                  <br />
                  75001 Paris, France
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">contact@efmc-academy.fr</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h3 className="text-2xl font-bold">Restez informé de nos nouveautés</h3>
            <p className="text-muted-foreground">
              Inscrivez-vous à notre newsletter pour recevoir nos dernières formations et offres exclusives
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input type="email" placeholder="Votre adresse email" className="flex-1" />
              <Button className="sm:w-auto">S'inscrire</Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 EFMC Academy. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">
              Mentions légales
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Cookies
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Plan du site
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
