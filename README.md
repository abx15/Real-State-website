# Real Estate Platform

A modern real estate web application built with React, TypeScript, and Vite. Browse properties, connect with agents, and manage your real estate needs with an intuitive interface.

## Features

- **Property Listings** - Browse and search for properties with detailed information
- **Agent Directory** - Find and connect with real estate professionals
- **Property Details** - View comprehensive property information with images and specifications
- **User Authentication** - Secure login and registration system
- **Wishlist** - Save favorite properties for later viewing
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Dark Mode Support** - Built with theme switching capabilities

## Tech Stack

- **Frontend Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Form Handling**: React Hook Form
- **State Management**: TanStack React Query
- **Icons**: Lucide React
- **Package Manager**: Bun

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- Bun package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd real-state
```

2. Install dependencies:

```bash
bun install
```

3. Start the development server:

```bash
bun run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run build:dev` - Build in development mode
- `bun run lint` - Run ESLint to check code quality
- `bun run preview` - Preview production build locally

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── layout/         # Layout components (Navbar, Footer, etc.)
│   ├── ui/             # UI components from Radix UI
│   ├── AgentCard.tsx   # Agent profile card
│   ├── PropertyCard.tsx # Property listing card
│   └── NavLink.tsx     # Navigation link component
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── Properties.tsx  # Properties listing
│   ├── PropertyDetails.tsx # Property details page
│   ├── Agents.tsx      # Agents directory
│   ├── AgentProfile.tsx # Agent profile page
│   ├── About.tsx       # About page
│   ├── Contact.tsx     # Contact page
│   ├── Services.tsx    # Services page
│   ├── Login.tsx       # Login page
│   ├── Register.tsx    # Registration page
│   ├── Wishlist.tsx    # Wishlist page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── data/               # Mock data and constants
├── App.tsx             # Main App component
└── main.tsx            # Application entry point
```

## Pages

- **Home** - Landing page with featured properties and agents
- **Properties** - Browse all available properties
- **Property Details** - View detailed information about a specific property
- **Agents** - Directory of real estate agents
- **Agent Profile** - Detailed profile of an agent
- **About** - Information about the platform
- **Services** - Available services
- **Contact** - Contact form and information
- **Wishlist** - Saved favorite properties
- **Login** - User login page
- **Register** - User registration page

## Configuration Files

- `vite.config.ts` - Vite configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint configuration
- `postcss.config.js` - PostCSS configuration

## Development

### Code Style

This project uses ESLint for code quality. Run the linter with:

```bash
bun run lint
```

### Building

To create a production build:

```bash
bun run build
```

The optimized build will be in the `dist/` directory.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 👨‍💻 Author

**Arun Kumar Bind**  
Full Stack Web Developer | React & MERN Enthusiast

🔗 **GitHub:** [github.com/abx15](https://github.com/abx15)  
💼 **Portfolio:** [View Portfolio](https://arun15dev.netlify.app/)

🔗 **LinkedIn:** [Connect on LinkedIn](https://www.linkedin.com/in/arun-kumar-a3b047353/)

📌 Passionate about building modern, scalable web applications using  
**React, Next.js, Node.js, MongoDB, Tailwind CSS, GSAP, and Three.js**.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Contact

For inquiries about this project, please visit the [Contact](./src/pages/Contact.tsx) page or reach out through the contact form.
