"use client"

import { useState } from "react"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow,
  TableFooter
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react"
import Link from "next/link"

interface FinancialItem {
  id: number
  item: string
  quantity: number
  price: number
  total: number
  source: "Shopee" | "Offline"
  link: string | null
}

const financialData: FinancialItem[] = [
  { id: 1, item: "Meja Rekal Al-Qur'an", quantity: 6, price: 29500, total: 166772, source: "Shopee", link: "https://shopee.co.id/rekal-Al-Qur'an" },
  { id: 2, item: "Papan Tulis Kecil (Whiteboard) + Spidol", quantity: 2, price: 62250, total: 118759, source: "Shopee", link: "https://shopee.co.id/1-Set-Papan" },
  { id: 3, item: "Buku Iqro' (Jilid 1-6)", quantity: 10, price: 6900, total: 65818, source: "Shopee", link: "https://shopee.co.id/iqro-besar-tu" },
  { id: 4, item: "Rak Stand Al-Quran", quantity: 2, price: 31713, total: 60502, source: "Shopee", link: "https://shopee.co.id/RAK-AL-QUR" },
  { id: 5, item: "Tunjuk Ngaji", quantity: 60, price: 149, total: 9135, source: "Shopee", link: "https://shopee.co.id/TUDING-NGA" },
  { id: 6, item: "Waktu Sholat Masjid Running text", quantity: 1, price: 699999, total: 631973, source: "Shopee", link: "https://shopee.co.id/Jam-Waktu-S" },
  { id: 7, item: "Set Sapu Pengki Angola", quantity: 3, price: 36900, total: 104303, source: "Shopee", link: "https://shopee.co.id/ANGOLA-Set" },
  { id: 8, item: "Pengharum Ruangan Semprot", quantity: 2, price: 17750, total: 36012, source: "Shopee", link: "https://shopee.co.id/STELLA-PEN" },
  { id: 9, item: "Keset Batas Suci", quantity: 2, price: 10999, total: 19795, source: "Shopee", link: "https://shopee.co.id/Keset-Kaki-C" },
  { id: 10, item: "Sign Board Mushola", quantity: 1, price: 19900, total: 17908, source: "Shopee", link: "https://shopee.co.id/Artkrilik-Sign" },
  { id: 11, item: "Filter Air Nazava Murni - Water Purifier", quantity: 1, price: 494010, total: 436835, source: "Shopee", link: "https://shopee.co.id/Nazava-Murn" },
  { id: 12, item: "Kipas Tempel Dinding", quantity: 2, price: 148000, total: 266601, source: "Shopee", link: "https://shopee.co.id/Advance-WF" },
  { id: 13, item: "Sendal Mushola", quantity: 5, price: 5500, total: 23500, source: "Shopee", link: "https://shopee.co.id/Sandal-Jepit" },
  { id: 14, item: "Rak Sepatu", quantity: 1, price: 24948, total: 34388, source: "Shopee", link: "https://shopee.co.id/Rak-Sepatu-S" },
  { id: 15, item: "Rak Buku 7 Susun", quantity: 1, price: 164000, total: 154523, source: "Shopee", link: "https://shopee.co.id/RAK-BUKU-7" },
  { id: 16, item: "Mukena", quantity: 2, price: 125000, total: 250000, source: "Offline", link: null },
  { id: 17, item: "Sarung", quantity: 2, price: 150000, total: 300000, source: "Offline", link: null },
  { id: 18, item: "Roti buat Anak-anak", quantity: 40, price: 2500, total: 100000, source: "Offline", link: null },
  { id: 19, item: "Kantong Sampah Plastik", quantity: 1, price: 1065, total: 1085, source: "Shopee", link: "https://shopee.co.id/AKACC-PLAS" },
  { id: 20, item: "Tempat Sampah", quantity: 1, price: 46455, total: 47332, source: "Shopee", link: "https://shopee.co.id/Dejavu-Temp" },
]

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

type SortConfig = {
  key: keyof FinancialItem
  direction: "asc" | "desc"
} | null

export function FinancialReportTable() {
  const [sortConfig, setSortConfig] = useState<SortConfig>(null)

  const sortedData = [...financialData].sort((a, b) => {
    if (!sortConfig) return 0
    
    const { key, direction } = sortConfig
    
    if (a[key] === null) return 1
    if (b[key] === null) return -1
    
    if (a[key]! < b[key]!) {
      return direction === "asc" ? -1 : 1
    }
    if (a[key]! > b[key]!) {
      return direction === "asc" ? 1 : -1
    }
    return 0
  })

  const requestSort = (key: keyof FinancialItem) => {
    let direction: "asc" | "desc" = "asc"
    
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc"
    }
    
    setSortConfig({ key, direction })
  }

  const getSortIcon = (key: keyof FinancialItem) => {
    if (!sortConfig || sortConfig.key !== key) {
      return <ArrowUpDown className="ml-2 h-4 w-4" />
    }
    return sortConfig.direction === "asc" ? (
      <ArrowUp className="ml-2 h-4 w-4" />
    ) : (
      <ArrowDown className="ml-2 h-4 w-4" />
    )
  }

  const totalAmount = financialData.reduce((sum, item) => sum + item.total, 0)

  return (
    <div className="rounded-md border bg-card">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Button 
                  variant="ghost" 
                  onClick={() => requestSort("id")}
                  className="hover:bg-transparent px-0 font-bold"
                >
                  No {getSortIcon("id")}
                </Button>
              </TableHead>
              <TableHead>
                <Button 
                  variant="ghost" 
                  onClick={() => requestSort("item")}
                  className="hover:bg-transparent px-0 font-bold"
                >
                  Kebutuhan {getSortIcon("item")}
                </Button>
              </TableHead>
              <TableHead className="text-right">
                <Button 
                  variant="ghost" 
                  onClick={() => requestSort("price")}
                  className="hover:bg-transparent px-0 font-bold ml-auto"
                >
                  Harga Satuan {getSortIcon("price")}
                </Button>
              </TableHead>
              <TableHead className="text-center">
                <Button 
                  variant="ghost" 
                  onClick={() => requestSort("quantity")}
                  className="hover:bg-transparent px-0 font-bold mx-auto"
                >
                  Qty {getSortIcon("quantity")}
                </Button>
              </TableHead>
              <TableHead className="text-right">
                <Button 
                  variant="ghost" 
                  onClick={() => requestSort("total")}
                  className="hover:bg-transparent px-0 font-bold ml-auto"
                >
                  Total (Realisasi) {getSortIcon("total")}
                </Button>
              </TableHead>
              <TableHead className="text-center">
                <Button 
                  variant="ghost" 
                  onClick={() => requestSort("source")}
                  className="hover:bg-transparent px-0 font-bold mx-auto"
                >
                  Sumber {getSortIcon("source")}
                </Button>
              </TableHead>
              <TableHead className="text-center">Bukti</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium text-center">{item.id}</TableCell>
                <TableCell>{item.item}</TableCell>
                <TableCell className="text-right">{formatCurrency(item.price)}</TableCell>
                <TableCell className="text-center">{item.quantity}</TableCell>
                <TableCell className="text-right font-semibold">{formatCurrency(item.total)}</TableCell>
                <TableCell className="text-center">
                  <Badge variant={item.source === "Shopee" ? "default" : "secondary"}>
                    {item.source}
                  </Badge>
                </TableCell>
                <TableCell className="text-center">
                  <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                    <Link 
                      href="https://drive.google.com/drive/folders/1vm1zZR0e1Y8KEzBY9G0MrPvMuW48EKVI" 
                      target="_blank"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">Lihat Bukti</span>
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4} className="text-right font-bold text-lg">
                Grand Total
              </TableCell>
              <TableCell className="text-right font-bold text-lg text-primary">
                {formatCurrency(totalAmount)}
              </TableCell>
              <TableCell colSpan={2} />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  )
}
