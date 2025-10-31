import { Card } from "@/components/ui/card"
import { BookOpen, Users, ShoppingCart, Award, TrendingUp, Eye } from "lucide-react"
import { StatsCard } from "@/components/admin/stats-card"
import { RecentSales } from "@/components/admin/recent-sales"
import { PopularEbooks } from "@/components/admin/popular-ebooks"
import { SalesChart } from "@/components/admin/sales-chart"

export default function AdminDashboard() {
  return (
    <div className="space-y-8 animate-fade-in-up">
      <div>
        <h1 className="text-3xl font-bold mb-2">Tableau de bord</h1>
        <p className="text-muted-foreground">Vue d'ensemble de votre plateforme EFMC Academy</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Ventes totales"
          value="45,231 €"
          change="+20.1%"
          trend="up"
          icon={ShoppingCart}
          color="from-blue-500 to-cyan-500"
        />
        <StatsCard
          title="Utilisateurs actifs"
          value="2,350"
          change="+15.3%"
          trend="up"
          icon={Users}
          color="from-purple-500 to-pink-500"
        />
        <StatsCard
          title="Ebooks vendus"
          value="1,234"
          change="+12.5%"
          trend="up"
          icon={BookOpen}
          color="from-orange-500 to-red-500"
        />
        <StatsCard
          title="Attestations délivrées"
          value="892"
          change="+8.2%"
          trend="up"
          icon={Award}
          color="from-green-500 to-emerald-500"
        />
      </div>

      {/* Charts and Tables */}
      <div className="grid gap-6 lg:grid-cols-7">
        <Card className="lg:col-span-4 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold">Évolution des ventes</h3>
              <p className="text-sm text-muted-foreground">Ventes mensuelles sur les 6 derniers mois</p>
            </div>
          </div>
          <SalesChart />
        </Card>

        <Card className="lg:col-span-3 p-6">
          <h3 className="text-lg font-semibold mb-6">Ventes récentes</h3>
          <RecentSales />
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-6">Ebooks les plus populaires</h3>
          <PopularEbooks />
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-6">Statistiques rapides</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <Eye className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <p className="font-medium">Vues totales</p>
                  <p className="text-sm text-muted-foreground">Ce mois</p>
                </div>
              </div>
              <span className="text-2xl font-bold">24.5K</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="font-medium">Taux de conversion</p>
                  <p className="text-sm text-muted-foreground">Moyenne</p>
                </div>
              </div>
              <span className="text-2xl font-bold">3.2%</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center">
                  <Award className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <p className="font-medium">Taux de réussite quiz</p>
                  <p className="text-sm text-muted-foreground">Moyenne</p>
                </div>
              </div>
              <span className="text-2xl font-bold">87%</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
