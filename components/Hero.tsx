import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-teal-600 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Wujudkan <br />
              <span className="text-amber-300">Potensi Terbaik</span>
              <br />
              Anda
            </h2>
            <p className="text-lg text-blue-50 leading-relaxed">
              SMK Negeri 2 Pasuruan siap membimbing Anda menjadi tenaga teknik profesional yang berdaya saing tinggi dan siap memasuki dunia industri modern.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button className="inline-flex items-center justify-center gap-2 bg-amber-400 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-amber-300 transition-all transform hover:scale-105">
                Daftar Sekarang
                <ArrowRight size={20} />
              </button>
              <button className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-all">
                Pelajari Lebih
                <ArrowRight size={20} />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-12 border-t border-blue-400">
              <div>
                <div className="text-3xl font-bold text-amber-300">7+</div>
                <p className="text-blue-50">Program Jurusan</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-300">1000+</div>
                <p className="text-blue-50">Siswa Aktif</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-300">95%</div>
                <p className="text-blue-50">Lulus Kerja</p>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-md">
              <div className="absolute inset-0 bg-white rounded-2xl opacity-10 transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-300 to-teal-300 rounded-2xl opacity-20 transform -rotate-3"></div>
              <div className="relative h-full bg-gradient-to-br from-blue-300 to-teal-300 rounded-2xl flex items-center justify-center">
                <div className="text-6xl">🏭</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
