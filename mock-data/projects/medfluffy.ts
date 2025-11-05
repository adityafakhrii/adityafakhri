const medfluffy = {
  title: "MedFluffy",
  subtitle: "AI-Powered Pet Eye Disease Detection",
  description: "Aplikasi Android untuk prediksi dini penyakit mata pada anjing menggunakan CNN dan rekomendasi pertolongan pertama.",
  fullDescription: "MedFluffy adalah aplikasi mobile berbasis AI yang dikembangkan sebagai Capstone Project Bangkit Academy 2023. Menggunakan CNN dan TensorFlow Lite untuk inference di perangkat mobile.",
  imageSrc: "/placeholder.svg?height=400&width=800",
  tags: ["Kotlin", "TensorFlow", "CNN", "Firebase", "Material Design", "Computer Vision"],
  category: "Mobile Application",
  status: "Completed",
  year: "2023",
  duration: "4 bulan (200 jam)",
  role: "Mobile Developer & ML Engineer",
  client: "Bangkit Academy Capstone Project",
  liveUrl: "https://github.com/MedFluffy",
  repoUrl: "https://github.com/MedFluffy",

  goals: [
    "Deteksi dini penyakit mata anjing yang mudah diakses",
    "Mengurangi biaya konsultasi untuk screening awal",
    "Meningkatkan awareness kesehatan mata hewan peliharaan",
  ],

  features: [
    "Deteksi penyakit mata via kamera",
    "AI model akurasi 85%+ untuk 5 penyakit",
    "Rekomendasi pertolongan pertama",
    "Riwayat pemeriksaan dan tracking kondisi",
  ],

  challenges: [
    { challenge: "Dataset terbatas dan tidak seimbang", solution: "Data augmentation dan transfer learning" },
    { challenge: "Optimasi model untuk mobile", solution: "TensorFlow Lite dan quantization" },
    { challenge: "Variasi pencahayaan foto", solution: "Image preprocessing dan panduan pengambilan foto" },
  ],

  outcomes: [
    "Akurasi model 87% pada test dataset",
    "Ukuran aplikasi <50MB, response <3 detik",
    "Top 10% Capstone Project Bangkit 2023",
  ],

  technologies: {
    Mobile: ["Kotlin", "Android SDK", "Jetpack Compose", "Material Design"],
    "Machine Learning": ["TensorFlow", "TensorFlow Lite", "CNN", "Transfer Learning"],
    Backend: ["Firebase", "Cloud Storage", "Authentication"],
    Tools: ["Android Studio", "Google Colab", "Git", "Figma"],
  },

  gallery: [
    "/placeholder.svg?height=300&width=500&text=Camera+Interface",
    "/placeholder.svg?height=300&width=500&text=AI+Detection",
    "/placeholder.svg?height=300&width=500&text=Results+Screen",
    "/placeholder.svg?height=300&width=500&text=History+Tracking",
  ],

  testimonial: {
    quote: "MedFluffy sangat membantu untuk screening awal kondisi mata hewan peliharaan. Mudah digunakan dan hasilnya akurat.",
    author: "Dr. Sarah Veteriner",
    position: "Veterinarian",
  },

  nextProject: "story-app",
  prevProject: "siacta",
}

export default medfluffy