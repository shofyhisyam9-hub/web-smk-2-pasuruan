import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-teal-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">SMK</span>
              </div>
              <div>
                <div className="font-bold text-white">SMK Negeri 2</div>
                <div className="text-xs">Pasuruan</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Lembaga pendidikan berkualitas mencetak generasi muda siap bersaing di dunia industri.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Menu Cepat</h4>
            <ul className="space-y-2">
              {[
                { label: "Beranda", href: "#home" },
                { label: "Tentang", href: "#about" },
                { label: "Jurusan", href: "#programs" },
                { label: "Berita", href: "#news" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-white mb-4">Program Andalan</h4>
            <ul className="space-y-2">
              {[
                "Teknik Permesinan",
                "Teknik Kendaraan Ringan",
                "Teknik Elektronika",
                "Teknik Komputer & Jaringan",
              ].map((program, index) => (
                <li key={index}>
                  <a href="#" className="text-sm hover:text-blue-400 transition-colors">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-white mb-4">Ikuti Kami</h4>
            <p className="text-sm text-gray-400 mb-4">
              Tetap update dengan informasi terbaru melalui media sosial.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Bottom Footer */}
        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © {currentYear} SMK Negeri 2 Pasuruan. Semua hak dilindungi undang-undang.
          </p>

          <div className="flex gap-6 justify-center md:justify-end text-sm">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              Syarat & Ketentuan
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
