# Morgan Widjaja - Portfolio

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional design with smooth transitions
- **Fast Performance**: Built with Next.js for optimal loading speeds
- **TypeScript**: Type-safe development for better code quality
- **SEO Optimized**: Proper meta tags and semantic HTML

## Pages

- **Home**: Hero section with personal introduction and about me
- **Experience**: Professional work experience and achievements
- **Projects**: Showcase of technical projects and technologies used
- **Contact**: Contact information and social links

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio2.0
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Deployment

This project is ready for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

## Customization

### Adding Your Profile Image

Replace `public/profile.jpg` with your own profile photo (recommended size: 300x300px).

### Updating Content

- **Personal Info**: Edit `src/components/Hero.tsx`
- **Experience**: Update `src/app/experience/page.tsx`
- **Projects**: Modify `src/app/projects/page.tsx`
- **Contact**: Edit `src/app/contact/page.tsx`

### Styling

The project uses Tailwind CSS for styling. You can customize colors, fonts, and spacing by modifying the Tailwind classes in the components.

## Technologies Used

- **Next.js 15**: React framework for production
- **React 18**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Vercel**: Deployment platform

## License

This project is open source and available under the [MIT License](LICENSE).