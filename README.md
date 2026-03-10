# 🏫 Website SMK Negeri 2 Pasuruan

Website modern dan responsif untuk SMK Negeri 2 Pasuruan, membangun platform digital untuk memperkenalkan sekolah, program-program unggulan, dan memberikan informasi lengkap kepada calon siswa dan masyarakat umum.

## 🌟 Fitur Utama

✅ **Hero Section** - Tampilan pembuka yang menarik dengan call-to-action  
✅ **Tentang Sekolah** - Profil lengkap, visi, misi, dan keunggulan sekolah  
✅ **Program Jurusan** - Showcase 7 program keahlian dengan informasi detail  
✅ **Berita & Aktivitas** - Update terkini kegiatan sekolah dan prestasi  
✅ **Kontak** - Form hubungi kami dan informasi lengkap sekolah  
✅ **Responsive Design** - Sempurna di desktop, tablet, dan mobile  
✅ **Modern UI** - Design gradient, animasi smooth, dan interaktif  

## 🛠️ Stack Teknologi

- **Framework**: Next.js 14+ (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Build**: SWC Compiler
- **Font**: Google Fonts (Inter)

## 📋 Persyaratan

- Node.js 18+ 
- npm atau yarn
- Git

## � Panduan Penggunaan pada Debian 13

Panduan ini berlaku untuk instalasi pada sistem Debian 13, baik pada mesin fisik maupun dalam container LXC (Linux Containers). Proses instalasi pada LXC sama dengan instalasi standar karena LXC menggunakan kernel host dan environment yang serupa.

### 1. Persiapan Sistem

Update package manager dan install dependensi dasar:

```bash
sudo apt update
sudo apt upgrade -y
sudo apt install -y curl wget gnupg2 software-properties-common
```

### 2. Instalasi Node.js 18+

Versi Node.js dari repositori default Debian mungkin lama. Gunakan NodeSource untuk versi terbaru:

```bash
# Tambahkan repository NodeSource untuk Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

# Install Node.js dan npm
sudo apt install -y nodejs

# Verifikasi instalasi
node --version
npm --version
```

### 3. Instalasi Git

```bash
sudo apt install -y git

# Konfigurasi Git (opsional)
git config --global user.name "Nama Anda"
git config --global user.email "email@anda.com"
```

### 4. Clone Repository

```bash
# Clone repository (ganti <repository-url> dengan URL repo GitHub)
git clone https://github.com/shofyhisyam9-hub/web-smk-2-pasuruan.git
cd web-smk-2-pasuruan
```

### 5. Instalasi Dependensi Proyek

```bash
# Install dependencies menggunakan npm
npm install

# Atau jika menggunakan yarn
# npm install -g yarn
# yarn install
```

### 6. Jalankan Aplikasi

#### Mode Development:
```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:3000`

#### Mode Production:
```bash
# Build aplikasi
npm run build

# Jalankan server production
npm start
```

### 7. Troubleshooting

#### Jika port 3000 sudah digunakan:
```bash
# Gunakan port lain
npm run dev -- -p 3001
```

#### Jika ada error permission:
```bash
# Untuk development, gunakan user biasa
# Untuk production, pastikan user memiliki akses ke direktori
```

#### Pada LXC Container:
- Pastikan container memiliki akses jaringan untuk download packages
- Jika menggunakan bind mounts, pastikan permissions sesuai
- Untuk akses dari luar container, konfigurasikan port forwarding di LXC host

### 8. Update dan Maintenance

```bash
# Update dependencies
npm update

# Jalankan linter
npm run lint

# Build ulang setelah perubahan
npm run build
```

## �🚀 Instalasi & Setup

### 1. Clone Repository
```bash
git clone <repository-url>
cd web-smk-2-pasuruan
```

### 2. Install Dependencies
```bash
npm install
# atau
yarn install
```

### 3. Jalankan Development Server
```bash
npm run dev
# atau
yarn dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

### 4. Build untuk Production
```bash
npm run build
npm start
# atau
yarn build
yarn start
```

## 📁 Struktur Project

```
web-smk-2-pasuruan/
├── app/
│   ├── globals.css           # Styling global
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Halaman utama
│   └── favicon.ico
├── components/
│   ├── Header.tsx            # Navbar & navigasi
│   ├── Hero.tsx              # Bagian pembuka
│   ├── About.tsx             # Tentang sekolah
│   ├── Programs.tsx          # Daftar jurusan
│   ├── News.tsx              # Berita & aktivitas
│   ├── Contact.tsx           # Form kontak
│   └── Footer.tsx            # Bagian bawah
├── public/                   # Static files
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## 🎨 Warna & Styling

Tim desain menggunakan palet warna modern:
- **Primary Blue**: #1e40af
- **Secondary Teal**: #0f766e  
- **Accent Amber**: #f59e0b
- **Background**: #f9fafb / #ffffff

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Kustomisasi

### Mengubah Warna Brand
Edit `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      primary: "your-color",
      secondary: "your-color",
      accent: "your-color",
    }
  }
}
```

### Menambah Halaman Baru
1. Buat folder baru di `app/`
2. Tambahkan file `page.tsx` 
3. Tambahkan link di `Header.tsx`

## 📧 Kontak & Support

- **Email**: info@smknegeri2pasuruan.ac.id
- **Telepon**: (0343) 123-4567
- **Alamat**: Jl. Raya Pasuruan, Kec. Bugulkidul, Kota Pasuruan, Jawa Timur

## 📄 Lisensi

Hak Cipta © 2024 SMK Negeri 2 Pasuruan. Semua hak dilindungi undang-undang.

---

**Dikembangkan dengan ❤️ menggunakan teknologi web terkini**