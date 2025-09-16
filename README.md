# 🏆 Corporate Chess Champions League (CCCL)

> **Nigeria's First Corporate Chess Champions League** - Where strategy meets social impact

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-black?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

## 🌟 Overview

The Corporate Chess Champions League (CCCL) is Nigeria's premier corporate chess tournament that combines competitive chess with social impact. Corporate teams compete while directly supporting education initiatives through Chess in Slums Africa.

### 🎯 Mission

- **Strategic Competition**: Bring chess excellence to corporate Nigeria
- **Social Impact**: Support education and literacy in underserved communities
- **Legacy Building**: Create lasting change through corporate partnerships

## 🚀 Features

### 🎮 Interactive Sections

- **Hero Section**: Dynamic chessboard video background with compelling call-to-action
- **Participation Section**: Multi-step scroll-triggered experience showcasing participation options
- **Vision Section**: Inspiring quote from Tunde Onakoya with diagonal design elements
- **Organizers Section**: Meet the tournament organizers in an elegant grid layout
- **Platform Section**: Showcase unique value propositions with video content
- **Partners Section**: Display sponsors and partners with contact information
- **Footer Section**: Complete contact details and social media integration

### 🎨 Design Highlights

- **Responsive Design**: Optimized for all devices and screen sizes
- **Smooth Animations**: Framer Motion powered transitions and scroll effects
- **Video Integration**: Chessboard and audience videos for immersive experience
- **Modern UI**: Clean, professional design with chess-themed elements
- **Accessibility**: WCAG compliant with proper contrast and navigation

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) for type safety
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for smooth transitions
- **Fonts**: Custom fonts (Bogista, Impact) + Google Fonts (Jost, Raleway, Manrope)
- **Images**: [Next.js Image](https://nextjs.org/docs/app/api-reference/components/image) optimization
- **Video**: HTML5 video with autoplay and loop functionality

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with SEO metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── Button.tsx       # Custom button component
│   │   ├── ChessIcons.tsx   # Chess piece icons
│   │   └── Icons.tsx        # General icons
│   └── sections/            # Page sections
│       ├── Hero.tsx         # Hero section with video background
│       ├── ReadySection.tsx # Ready to participate section
│       ├── ParticipationSection.tsx # Multi-step participation flow
│       ├── VisionSection.tsx # Vision and mission section
│       ├── OrganizersSection.tsx # Tournament organizers
│       ├── PlatformSection.tsx # Platform benefits
│       ├── PartnersSection.tsx # Sponsors and partners
│       └── FooterSection.tsx # Footer with contact info
├── assets/
│   └── fonts/               # Custom font files
└── lib/
    └── utils.ts             # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Chess-in-Slums-Africa/cccl.git
   cd cccl
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Follow the existing pattern for consistent styling

### Modifying Content

- **Text Content**: Update directly in component files
- **Images**: Add to `public/images/` and update references
- **Videos**: Add to `public/images/videos/` and update paths
- **Styling**: Modify Tailwind classes or add custom CSS

### SEO Optimization

- Update metadata in `src/app/layout.tsx`
- Add structured data for better search visibility
- Optimize images and videos for web performance

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Development

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Component-based architecture

### Performance

- Next.js Image optimization
- Video lazy loading
- Font optimization
- Bundle size optimization

## 📈 SEO Features

- **Meta Tags**: Comprehensive meta descriptions and keywords
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **Structured Data**: Rich snippets for search engines
- **Canonical URLs**: Proper URL canonicalization
- **Robots.txt**: Search engine crawling instructions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact & Support

- **Email**: info@chessinslums.com
- **Partnerships**: partnerships@tundeonakoyachessclub.com
- **Website**: [Chess in Slums Africa](https://chessinslumsafrica.com)
- **Social Media**: [@chessinslums](https://twitter.com/chessinslums)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Tunde Onakoya** - Founder, Chess in Slums Africa
- **Chess in Slums Africa** - For the incredible mission
- **Corporate Partners** - For supporting the initiative
- **Development Team** - For bringing this vision to life

## 🏆 Tournament Details

### Participation Options

1. **Corporate Team Registration** - Different registration plans
2. **Tournament Sponsorship** - Various partnership levels
3. **Library Project Support** - Direct education impact

### Impact

- Direct funding for 1-year scholarships
- Library construction in underserved communities
- Educational resources for children
- Corporate social responsibility alignment

---

**Built with ❤️ by Chess in Slums Africa**

_"This isn't just a tournament. It's how we build a new Nigeria—through intellect, equity, and belief in every child's potential."_ — Tunde Onakoya
