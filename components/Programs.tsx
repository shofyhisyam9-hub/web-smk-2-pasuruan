import { Lightbulb, Wrench, Cog, Cpu, Zap, Wind, Gauge } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      id: 1,
      title: "Teknik Permesinan",
      description:
        "Program keahlian dalam mesin produksi, CNC, dan maintenance mesin industri.",
      icon: Wrench,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      title: "Teknik Kendaraan Ringan",
      description:
        "Melatih siswa dalam perbaikan dan perawatan kendaraan roda empat.",
      icon: Gauge,
      color: "from-red-500 to-red-600",
    },
    {
      id: 3,
      title: "Teknik Elektronika Industri",
      description:
        "Fokus pada sistem kontrol elektronik industri dan otomasi.",
      icon: Zap,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      id: 4,
      title: "Teknik Komputer dan Jaringan",
      description:
        "Program jaringan komputer, server, dan infrastruktur IT modern.",
      icon: Cpu,
      color: "from-green-500 to-green-600",
    },
    {
      id: 5,
      title: "Teknik Sepeda Motor",
      description: "Spesialis dalam perbaikan dan modifikasi kendaraan roda dua.",
      icon: Cog,
      color: "from-orange-500 to-orange-600",
    },
    {
      id: 6,
      title: "Teknik Pemanasan Tata Udara",
      description:
        "Ahli dalam sistem AC, refrigerasi, dan climate control komersial.",
      icon: Wind,
      color: "from-cyan-500 to-blue-600",
    },
    {
      id: 7,
      title: "Teknik Ototronik",
      description:
        "Kombinasi otomotif dan elektronik untuk teknologi kendaraan masa depan.",
      icon: Lightbulb,
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">
            Program Unggulan
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Jurusan Tersedia
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tujuh program keahlian berkualitas tinggi siap membimbing Anda menuju kesuksesan karir di industri modern.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => {
            const IconComponent = program.icon;
            return (
              <div
                key={program.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:scale-105"
              >
                {/* Icon Background */}
                <div
                  className={`bg-gradient-to-br ${program.color} h-24 flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white group-hover:translate-x-full transition-transform duration-500"></div>
                  </div>
                  <IconComponent className="w-12 h-12 text-white relative z-10" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {program.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    <div className="text-xs text-gray-500">Keahlian utama:</div>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>✓ Teori dan praktik</li>
                      <li>✓ Sertifikasi industri</li>
                      <li>✓ Magang profesional</li>
                    </ul>
                  </div>

                  {/* Learn More Button */}
                  <button className="w-full py-2 px-4 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                    Pelajari Lebih
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Tertarik dengan salah satu program kami?
          </h3>
          <p className="text-lg text-blue-50 mb-8">
            Daftarkan diri Anda sekarang dan mulai perjalanan menuju kesuksesan!
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-block">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}
