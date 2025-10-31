import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const sales = [
  { name: "Marie Dubois", email: "marie.d@email.com", amount: "+49.00 €" },
  { name: "Jean Martin", email: "jean.m@email.com", amount: "+39.00 €" },
  { name: "Sophie Bernard", email: "sophie.b@email.com", amount: "+59.00 €" },
  { name: "Pierre Petit", email: "pierre.p@email.com", amount: "+29.00 €" },
  { name: "Claire Moreau", email: "claire.m@email.com", amount: "+49.00 €" },
]

export function RecentSales() {
  return (
    <div className="space-y-4">
      {sales.map((sale, index) => (
        <div key={index} className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
              {sale.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="font-medium truncate">{sale.name}</p>
            <p className="text-sm text-muted-foreground truncate">{sale.email}</p>
          </div>
          <div className="font-semibold text-green-600">{sale.amount}</div>
        </div>
      ))}
    </div>
  )
}
