# Karmah

**Karmah** is a premium, modern SaaS platform designed for high-performance task management and team collaboration. It features a sleek, minimalist aesthetic with a focus on user experience and productivity.

## ✨ Features

- **Floating Capsule UI**: A unique, glassmorphism-inspired navigation experience.
- **Role-Based Access**: Granular control over task visibility and modifications.
- **Dynamic Task Lists**: Real-time updates and high-fidelity dashboard visualizations.
- **Demo Mode**: Instant access to platform features with isolated demo accounts.
- **Responsive Design**: Optimized for everything from ultra-wide monitors to mobile devices.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (Turbopack enabled)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **State Management**: [TanStack React Query v5](https://tanstack.com/query/latest)
- **Forms**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- [pnpm](https://pnpm.io/) (preferred) or npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/PranavKale03/Karmah.git
   cd karmah
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Configure environment variables:
   Copy the example environment file and fill in your values:
   ```bash
   cp .env.example .env.local
   ```

4. Run the development server:
   ```bash
   pnpm dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔐 Environment Variables

| Variable | Description | Default |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_API_URL` | Base URL for the backend API | `http://localhost:6000/api/v1` |
| `DEMO_API_KEY` | Secret key for demo login authentication | `required` |

## 📁 Project Structure

- `app/`: Next.js App Router pages and layouts.
- `components/`: Reusable UI components (Layout, Landing, Tasks).
- `lib/`: Utility functions, API clients, and common types.
- `hooks/`: Custom React hooks for global state and logic.
- `public/`: Static assets including brand logos and icons.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
