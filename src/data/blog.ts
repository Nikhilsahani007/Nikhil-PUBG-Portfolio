export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    readTime: string;
    tags: string[];
    author: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        slug: 'building-production-react-apps',
        title: 'Building Production-Grade React Applications',
        excerpt:
            'A deep dive into architecture patterns, performance optimization, and deployment strategies for enterprise-level React applications.',
        content: `
## Introduction

Building production-grade React applications requires more than just knowing React. It demands understanding of architecture patterns, performance optimization, testing strategies, and deployment pipelines.

## Key Takeaways

- **Component Architecture**: Use compound components and render props for maximum flexibility
- **State Management**: Choose the right tool — Context API for simple state, Redux Toolkit for complex flows
- **Performance**: Implement code splitting, lazy loading, and memoization strategically
- **Testing**: Write integration tests alongside unit tests for comprehensive coverage
- **Deployment**: Automate with CI/CD pipelines using GitHub Actions

> Stay tuned for the full article with code examples and benchmarks.
    `,
        date: '2025-01-15',
        readTime: '8 min read',
        tags: ['React', 'Architecture', 'Performance'],
        author: 'Nikhil Sahani',
    },
    {
        id: '2',
        slug: 'typescript-best-practices-2025',
        title: 'TypeScript Best Practices for 2025',
        excerpt:
            'Essential TypeScript patterns and practices that every developer should adopt for cleaner, safer, and more maintainable code.',
        content: `
## Why TypeScript?

TypeScript has become the standard for professional JavaScript development. Here are the patterns I use daily.

## Top Practices

- **Strict Mode Always**: Enable strict mode from day one
- **Discriminated Unions**: Use tagged unions for type-safe state management
- **Utility Types**: Master Pick, Omit, Partial, Required, and Record
- **Generic Constraints**: Write reusable functions with proper type constraints
- **Zod for Validation**: Runtime validation that syncs with your TypeScript types

> Full code samples and real-world examples coming soon.
    `,
        date: '2025-02-01',
        readTime: '6 min read',
        tags: ['TypeScript', 'Best Practices', 'JavaScript'],
        author: 'Nikhil Sahani',
    },
    {
        id: '3',
        slug: 'from-intern-to-developer',
        title: 'From Intern to Developer: My Journey at Zithara.ai',
        excerpt:
            'Reflections on my internship experience, lessons learned, and how working on a real AI product shaped my development skills.',
        content: `
## The Beginning

Joining Zithara.ai as a frontend intern was my first step into the professional development world.

## Key Lessons

- **Code Reviews Matter**: Every review taught me something new about clean code
- **Communication is Key**: Technical discussions require clear, concise communication
- **Ship Iteratively**: Perfect is the enemy of good — ship MVPs and iterate
- **Learn the Domain**: Understanding AI/ML concepts helped me build better UI/UX
- **Test Everything**: Writing tests saved hours of debugging in production

> Detailed breakdown with timelines and project specifics will be published soon.
    `,
        date: '2025-02-10',
        readTime: '5 min read',
        tags: ['Career', 'Internship', 'Growth'],
        author: 'Nikhil Sahani',
    },
];
