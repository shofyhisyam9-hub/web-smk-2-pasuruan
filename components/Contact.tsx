import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">
            Hubungi Kami
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Informasi Kontak
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi kami. Tim kami siap membantu menjawab semua pertanyaan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          {[
            {
              icon: MapPin,
              title: "Alamat",
              details: "Jl. Raya Pasuruan, Kec. Bugulkidul, Kota Pasuruan, Jawa Timur 67129",
              color: "from-blue-500 to-blue-600",
            },
            {
              icon: Phone,
              title: "Telepon",
              details: "(0343) 123-4567 / (0343) 765-4321",
              color: "from-green-500 to-green-600",
            },
            {
              icon: Mail,
              title: "Email",
              details: "info@smknegeri2pasuruan.ac.id",
              color: "from-orange-500 to-orange-600",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.details}</p>
              </div>
            );
          })}
        </div>

        {/* Contact Form & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Kirim Pesan
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Masukkan nama Anda"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Masukkan email Anda"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subjek
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Masukkan subjek pesan"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Pesan
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Kirim Pesan
              </button>
            </form>
          </div>

          {/* Map & Info */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center text-6xl">
              🗺️
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Jam Operasional</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Senin - Jumat</span>
                  <span className="font-semibold">07:00 - 16:00</span>
                </div>
                <div className="flex justify-between pb-4 border-b border-blue-400">
                  <span>Sabtu</span>
                  <span className="font-semibold">07:00 - 12:00</span>
                </div>
              </div>
              <p className="text-blue-50 text-sm italic mt-4">
                Kami tutup pada hari Minggu dan hari libur nasional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
