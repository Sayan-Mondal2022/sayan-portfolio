# Sayan Mondal - Personal Portfolio

A modern, responsive, and visually polished personal portfolio built to showcase my skills, projects, and professional experience as a Computer Science student and AI/ML Full Stack Developer.

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Fonts**: Inter (Variable Font optimized via `next/font`)

## 🌟 Key Features

- **Modern UI/UX**: Clean, dark-themed design with smooth gradients, soft shadows, and distinct visual hierarchy.
- **Responsive Layout**: Fully optimized for mobile, tablet, and desktop viewing.
- **Dynamic Animations**: Subtle entrance animations and engaging hover micro-interactions (lift effects, scale adjustments) powered by Framer Motion.
- **GitHub Integration**: Dynamically fetches and displays pinned repositories using the GitHub GraphQL API.
- **Contact Form**: Built-in contact section ready for integration with validation.

## 🛠️ Getting Started

First, clone the repository and install the dependencies:

```bash
npm install
```

Set up your environment variables. Create a `.env.local` file at the root of your project with your required keys (e.g., for fetching GitHub repos):

```env
GITHUB_TOKEN=your_github_personal_access_token
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `app/` - Next.js App Router routes, global styles, and layout structure.
- `components/` - Reusable React components.
  - `sections/` - Major page sections like Hero, About, Projects, Tech Stack, Experience, and Contact.
  - `ui/` - Abstracted UI elements like generic Buttons and Animation wrappers.
- `data/` - Static data structures (e.g., tech stack lists).
- `hooks/` - Custom React hooks used throughout the application.
- `public/` - Static assets including images and logos.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
