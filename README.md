<div align="center">

![Header](https://capsule-render.vercel.app/api?type=waving&color=7B2FBE&height=200&section=header&text=Romana%20Barbershop&fontSize=50&fontColor=ECE6F4&animation=fadeIn&fontAlignY=35&desc=Premium%20Barbershop%20Website)

[![GitHub](https://img.shields.io/badge/GitHub-revolover00-7B2FBE?style=for-the-badge&logo=github&logoColor=white)](https://github.com/revolover00/Romana-Barbershop)
[![License](https://img.shields.io/badge/License-MIT-CC00FF?style=for-the-badge)](LICENSE)

</div>

---

## 👤 About

**Romana Barbershop** is a premium, highly polished single-page editorial website for a Phoenix, AZ barbershop. Featuring a modern charcoal & mint aesthetic, beautiful raw CSS scroll-reveal animations, interactive Google Maps, and full multilingual support.

---

## ✨ Features

- 💈 **Premium Design** - Charcoal & mint color scheme
- 🎨 **Scroll Animations** - Smooth reveal effects
- 🗺️ **Interactive Maps** - Google Maps integration
- 🌍 **Multilingual** - English & Spanish support
- 📱 **Responsive Design** - Mobile-optimized
- ⚡ **Fast Performance** - Optimized loading
- 🎬 **Cinematic Effects** - Professional animations
- 📍 **Location Details** - Directions and hours

---

## 🛠️ Tech Stack

<div align="center">

![React](https://img.shields.io/badge/React-19-CC00FF?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-7B2FBE?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-CC00FF?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Latest-7B2FBE?style=for-the-badge&logo=framer&logoColor=white)

</div>

**Frontend:**
- React 19 with TypeScript
- Raw CSS for scroll animations
- TailwindCSS for styling
- Framer Motion for effects

**Integrations:**
- Google Maps API
- Booking system integration
- Social media links
- Email contact system

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager
- Google Maps API key

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/revolover00/Romana-Barbershop.git
   cd Romana-Barbershop
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment:**
   Create `.env.local`:
   ```env
   VITE_GOOGLE_MAPS_API_KEY=your_api_key
   VITE_BUSINESS_EMAIL=contact@romanabarbershop.com
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Navigate to `http://localhost:5173`

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Hero.tsx              — Landing section
│   ├── Services.tsx          — Service offerings
│   ├── Barbers.tsx           — Team showcase
│   ├── Gallery.tsx           — Photo gallery
│   ├── Booking.tsx           — Appointment system
│   ├── Location.tsx          — Google Maps
│   ├── Hours.tsx             — Business hours
│   ├── Contact.tsx           — Contact form
│   ├── Testimonials.tsx      — Client reviews
│   ├── LanguageSwitcher.tsx  — EN/ES toggle
│   └── Footer.tsx            — Footer
├── hooks/
│   ├── useScrollAnimation.ts — Reveal effects
│   ├── useLanguage.ts        — Translation state
│   └── useBooking.ts         — Booking logic
├── services/
│   ├── translationService.ts — i18n management
│   ├── googleMapsService.ts  — Maps integration
│   └── bookingService.ts     — Appointment handling
├── styles/
│   ├── animations.css        — Scroll reveals
│   └── theme.css             — Brand colors
└── App.tsx                   — Root component
```

---

## 🎨 Design Features

### Color Scheme
- **Primary:** Charcoal (#2C2C2C)
- **Secondary:** Mint (#98D8C8)
- **Accent:** Gold (#FFD700)
- **Text:** Light Gray (#F5F5F5)

### Scroll Animations
- Fade-in effects
- Slide-up transitions
- Scale animations
- Parallax scrolling
- Staggered reveals

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

---

## 💻 Page Sections

### Hero Banner
- Stunning header image
- Shop name and tagline
- Call-to-action button
- Background parallax effect

### Services
- Service menu with descriptions
- Pricing information
- Service duration
- Online booking link

### Meet the Barbers
- Team member profiles
- Specialties and experience
- Photo gallery
- Social profiles

### Gallery
- Portfolio of work
- Before/after photos
- Haircut styles
- Beard services

### Book Appointment
- Online booking integration
- Calendar system
- Staff selection
- Service choice

### Location
- Interactive Google Map
- Address and directions
- Business hours
- Contact information

### Testimonials
- Customer reviews
- Star ratings
- Photo testimonials
- Social proof

---

## 🌐 Multilingual Support

### Implemented Languages
- **English** (en)
- **Spanish** (es)

### Add New Language
1. Update `src/services/translationService.ts`
2. Add language object with all strings
3. Update language switcher component

---

## 📅 Booking Integration

### Features
- Staff scheduling
- Service selection
- Date/time picker
- Email confirmation
- Reminder notifications

### Setup
Configure booking service with your calendar system (Google Calendar, Calendly, etc.)

---

## 🗺️ Google Maps Setup

1. Get API key from [Google Cloud Console](https://console.cloud.google.com)
2. Add to `.env.local`
3. Enable Maps JavaScript API
4. Set up billing (if needed)

---

## 🚀 Build & Deploy

### Build for production:
```bash
npm run build
```

### Deploy to Vercel:
```bash
vercel deploy
```

### Deploy to Netlify:
```bash
npm run build
netlify deploy --prod --dir=dist
```

---

## 🔐 Security

- ✅ API key protection
- ✅ Form validation
- ✅ CSRF protection
- ✅ Secure booking system
- ✅ HTTPS ready

---

## 📊 Performance

- ⚡ Fast page load times
- 📦 Optimized bundle size
- 🖼️ Lazy-loaded images
- 🎬 Hardware-accelerated animations
- 📱 Mobile-first optimization

---

## 🐛 Troubleshooting

### Maps not loading?
- Verify API key in .env
- Check API quota
- Ensure billing is active

### Animations not smooth?
- Check browser support
- Disable in prefers-reduced-motion
- Optimize image sizes

### Booking not working?
- Verify integration setup
- Check API configuration
- Review console logs

---

## 🤝 Contributing

Contributions welcome! Follow these steps:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/NewFeature`)
3. Make your changes
4. Commit (`git commit -m 'Add NewFeature'`)
5. Push (`git push origin feature/NewFeature`)
6. Open Pull Request

---

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details

---

## 🔗 Connect

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-revolover00-7B2FBE?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/revo-code-6181283b5)
[![GitHub](https://img.shields.io/badge/GitHub-@revolover00-CC00FF?style=for-the-badge&logo=github&logoColor=white)](https://github.com/revolover00)
[![YouTube](https://img.shields.io/badge/YouTube-@Revo--code-7B2FBE?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/@Revo-code)
[![X](https://img.shields.io/badge/X-@revo__codes-CC00FF?style=for-the-badge&logo=x&logoColor=white)](https://x.com/revo_codes)

</div>

---

<img src="https://capsule-render.vercel.app/api?type=waving&color=7B2FBE&height=120&section=footer" width="100%"/>
