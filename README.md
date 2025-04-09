# Job Board Application

A modern job board application built with Next.js, TypeScript, and Tailwind CSS. This application allows users to browse job listings, filter by location and job type, and view detailed information about each job posting.


## Features

- **Job Listings**: Browse through a collection of job postings with essential information
- **Detailed Job View**: View comprehensive details about each job including description, requirements, and responsibilities
- **Filtering System**: Filter jobs by location and job type (Remote, On-site, Full-Time, etc.)
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Dark Mode Support**: Toggle between light and dark themes based on your preference

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (React 19)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: Custom components built with [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React's built-in useState and useEffect hooks
- **Routing**: Next.js App Router

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm (recommended) or npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/riva211/Job-board.git
   cd job-board
   ```

2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
job-board/
├── app/                  # Next.js App Router pages
│   ├── jobs/[id]/        # Job details page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Home page component
├── components/           # React components
│   ├── ui/               # UI components (buttons, cards, etc.)
│   ├── job-card.tsx      # Job listing card component
│   ├── job-filter.tsx    # Job filtering component
│   ├── job-list.tsx      # Job listing component
│   └── theme-toggle.tsx  # Theme toggle component
├── lib/                  # Utility functions and data
│   ├── jobs.ts           # Job data and fetching functions
│   └── utils.ts          # Utility functions
├── public/               # Static assets
├── styles/               # Additional styles
├── types/                # TypeScript type definitions
│   └── job.ts            # Job type definition
├── next.config.mjs       # Next.js configuration
├── package.json          # Project dependencies and scripts
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Data Structure

The application currently uses mock data for job listings. Each job has the following structure:

```typescript
interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  postedAt: string;
  tags: string[];
  employmentType: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}
```

## Customization

### Adding More Jobs

To add more job listings, edit the `mockJobs` array in `lib/jobs.ts`.

### Connecting to a Real API

To connect to a real API instead of using mock data:

1. Modify the `getJobs` and `getJobById` functions in `lib/jobs.ts` to fetch data from your API
2. Update the Job interface in `types/job.ts` if needed to match your API's data structure

## Deployment

This application can be easily deployed to platforms like Vercel or Netlify:

### Deploying to Vercel

```bash
pnpm install -g vercel
vercel
```

### Building for Production

```bash
pnpm build
# or
npm run build
# or
yarn build
```

## Future Enhancements

- User authentication for job seekers and employers
- Job application submission functionality
- Job posting functionality for employers
- Email notifications for new job postings
- Advanced search and filtering options
- Saved jobs and job application tracking

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible UI components
- [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icons