import { CheckCircle, Eye, Target } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-7xl">🎓</div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-amber-400 rounded-xl px-6 py-4 shadow-lg">
              <p className="text-sm font-bold text-gray-900">Sejak 1985</p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">
                Tentang Kami
              </h3>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Pusat Pendidikan Teknik Terpercaya
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                SMK Negeri 2 Pasuruan adalah lembaga pendidikan yang berkomitmen untuk mencetak generasi muda yang unggul dan siap bersaing di dunia industri. Dengan pengalaman lebih dari 30 tahun, kami telah menghasilkan ribuan lulusan profesional yang sukses.
              </p>
            </div>

            {/* Vision and Mission */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Visi Kami</h4>
                  <p className="text-gray-600">
                    Terwujudnya insan yang beriman dan berakhlak mulia, berbudaya kreatif, inovatif, dan berjiwa wirausaha mandiri, serta peduli lingkungan.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Target className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Misi Kami</h4>
                  <p className="text-gray-600">
                    Memberikan pendidikan berkualitas tinggi yang relevan dengan kebutuhan industri dan masyarakat, mempersiapkan siswa menjadi individu berdaya saing.
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3">
              {[
                "Fasilitas laboratorium modern dan lengkap",
                "Guru bersertifikat dan berpengalaman industri",
                "Kerjasama dengan industri terkemuka",
                "Program magang dan beasiswa",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
