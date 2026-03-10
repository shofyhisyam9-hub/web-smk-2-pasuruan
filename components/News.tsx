import { Calendar, ArrowRight } from "lucide-react";

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "Siswa SMK Negeri 2 Juara Kompetisi Teknik Nasional",
      description:
        "Tim siswa kami berhasil meraih juara pertama dalam kompetisi robotika tingkat nasional tahun 2024.",
      date: "15 Februari 2024",
      category: "Prestasi",
      image: "🏆",
    },
    {
      id: 2,
      title: "Pembukaan Lab Elektronika Industri Tercanggih",
      description:
        "Sekolah menghadirkan laboratorium elektronika terbaru dengan peralatan standar internasional.",
      date: "10 Februari 2024",
      category: "Fasilitas",
      image: "⚡",
    },
    {
      id: 3,
      title: "Partnership dengan Industri 4.0 Leaders",
      description:
        "SMK Negeri 2 menjalin kerjasama strategis dengan perusahaan manufaktur terkemuka di Asia Tenggara.",
      date: "5 Februari 2024",
      category: "Kerjasama",
      image: "🤝",
    },
    {
      id: 4,
      title: "Program Beasiswa Penuh untuk 50 Siswa Berprestasi",
      description:
        "Tahun ini sekolah menyediakan beasiswa penuh untuk 50 siswa terbaik yang lolos seleksi akademik.",
      date: "1 Februari 2024",
      category: "Beasiswa",
      image: "📚",
    },
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">
            Update Terkini
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Berita & Aktivitas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ikuti perkembangan terbaru dan aktivitas menarik di SMK Negeri 2 Pasuruan.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              {/* Image placeholder */}
              <div
                className="h-48 bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300"
              >
                {item.image}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar size={16} />
                    {item.date}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                  Baca Selengkapnya <ArrowRight size={18} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-bold hover:bg-blue-600 hover:text-white transition-all">
            Lihat Semua Berita <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
