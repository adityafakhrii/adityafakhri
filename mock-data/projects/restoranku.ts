const restoranku = {
  title: "Restoranku",
  subtitle: "Smart Restaurant Management System",
  description: "Pemesanan via QR code, pembayaran QRIS (Midtrans), dan analytics komprehensif.",
  fullDescription: "Restoranku mengintegrasikan QR untuk pemesanan, Midtrans untuk pembayaran digital, dan dashboard analytics real-time.",
  imageSrc: "/placeholder.svg?height=400&width=800",
  tags: ["Laravel", "JavaScript", "MySQL", "Bootstrap", "Midtrans", "QR Code", "Payment Gateway"],
  category: "Web Application",
  status: "Production",
  year: "2025",
  duration: "3 bulan",
  role: "Full-Stack Developer",
  client: "KelasFullstack",
  liveUrl: "#",
  repoUrl: "https://github.com/adityafakhrii/restoranku.git",

  goals: [
    "Digitalisasi pemesanan dan pembayaran",
    "Analytics real-time untuk keputusan bisnis",
    "Efisiensi operasional restoran",
  ],

  features: [
    "QR Code menu & contactless order",
    "Integrasi Midtrans: QRIS, VA, e-wallet",
    "Dashboard analytics penjualan",
    "Notifikasi pesanan kitchen & customer",
  ],

  challenges: [
    { challenge: "Integrasi payment multi-metode", solution: "Midtrans SDK + webhook untuk status real-time" },
    { challenge: "Sinkronisasi pesanan real-time", solution: "WebSocket & notification system" },
  ],

  outcomes: [
    "Waktu tunggu turun dari 15m ke 5m",
    "Transaksi digital naik 80%",
    "Error pesanan turun 95%",
  ],

  technologies: {
    Backend: ["Laravel 12", "PHP 8.4", "MySQL", "Redis"],
    Frontend: ["JavaScript", "Bootstrap 5", "jQuery", "Chart.js"],
    Payment: ["Midtrans API"],
    Tools: ["Git", "Postman", "Laravel Telescope", "Queue Workers"],
  },

  gallery: [
    "/placeholder.svg?height=300&width=500&text=QR+Menu",
    "/placeholder.svg?height=300&width=500&text=Order+Interface",
    "/placeholder.svg?height=300&width=500&text=Payment+Gateway",
    "/placeholder.svg?height=300&width=500&text=Analytics+Dashboard",
  ],

  testimonial: {
    quote: "Pelanggan lebih puas, operasional lebih efisien dengan dashboard analytics.",
    author: "Ahmad Wijaya",
    position: "Owner, Restoran Nusantara",
  },

  nextProject: "ramadhanjs",
  prevProject: "medfluffy",
}

export default restoranku