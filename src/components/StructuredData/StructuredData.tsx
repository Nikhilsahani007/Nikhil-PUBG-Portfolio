import { useEffect } from 'react';

const SITE_URL = 'https://nikhilsahani.vercel.app';

// JSON-LD structured data for the entire site
export default function StructuredData() {
    useEffect(() => {
        const schemas = [
            // Person Schema
            {
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Nikhil Sahani',
                url: SITE_URL,
                image: `${SITE_URL}/og-image.png`,
                jobTitle: 'Software Developer',
                description:
                    'Software Developer and Founder of NS SiteCraft Solutions. Specializes in MERN stack (MongoDB, Express.js, React, Node.js) and Java backend development.',
                email: 'nikhils63041@gmail.com',
                telephone: '+91-9390969461',
                alumniOf: {
                    '@type': 'CollegeOrUniversity',
                    name: 'Jawaharlal Nehru Technological University (JNTU)',
                    address: {
                        '@type': 'PostalAddress',
                        addressLocality: 'Hyderabad',
                        addressRegion: 'Telangana',
                        addressCountry: 'IN',
                    },
                },
                worksFor: {
                    '@type': 'Organization',
                    name: 'NS SiteCraft Solutions',
                    url: 'https://ns-sitecraft-solutions.vercel.app',
                },
                address: {
                    '@type': 'PostalAddress',
                    addressCountry: 'IN',
                },
                sameAs: [
                    'https://github.com/Nikhilsahani007',
                    'https://www.linkedin.com/in/nikhil-sahani-o07/',
                ],
                knowsAbout: [
                    'React', 'Node.js', 'MongoDB', 'Express.js',
                    'Java', 'JDBC', 'MySQL', 'TypeScript',
                    'REST APIs', 'Docker', 'Python',
                    'Machine Learning', 'Full Stack Development',
                    'Freelance Web Development', 'MERN Stack',
                ],
            },

            // Organization Schema
            {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'NS SiteCraft Solutions',
                url: 'https://ns-sitecraft-solutions.vercel.app',
                founder: {
                    '@type': 'Person',
                    name: 'Nikhil Sahani',
                },
                description:
                    'SaaS platform providing affordable, production-grade websites for small businesses across India.',
                address: {
                    '@type': 'PostalAddress',
                    addressCountry: 'IN',
                },
                sameAs: ['https://github.com/Nikhilsahani007'],
            },

            // WebSite Schema with Search
            {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                url: SITE_URL,
                name: 'Nikhil Sahani — Full Stack Developer Portfolio',
                description:
                    'Portfolio of Nikhil Sahani, Full Stack MERN & Java Developer and Founder of NS SiteCraft Solutions.',
                author: {
                    '@type': 'Person',
                    name: 'Nikhil Sahani',
                },
                potentialAction: {
                    '@type': 'SearchAction',
                    target: `${SITE_URL}/projects?q={search_term_string}`,
                    'query-input': 'required name=search_term_string',
                },
            },

            // BreadcrumbList Schema for main navigation
            {
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'Home',
                        item: `${SITE_URL}/`,
                    },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: 'Projects',
                        item: `${SITE_URL}/projects`,
                    },
                    {
                        '@type': 'ListItem',
                        position: 3,
                        name: 'About',
                        item: `${SITE_URL}/about`,
                    },
                    {
                        '@type': 'ListItem',
                        position: 4,
                        name: 'Resume',
                        item: `${SITE_URL}/resume`,
                    },
                    {
                        '@type': 'ListItem',
                        position: 5,
                        name: 'Blog',
                        item: `${SITE_URL}/blog`,
                    },
                    {
                        '@type': 'ListItem',
                        position: 6,
                        name: 'Contact',
                        item: `${SITE_URL}/contact`,
                    },
                ],
            },
        ];

        // Inject each schema
        schemas.forEach((schema, i) => {
            const id = `json-ld-${i}`;
            let el = document.getElementById(id) as HTMLScriptElement | null;
            if (!el) {
                el = document.createElement('script');
                el.id = id;
                el.type = 'application/ld+json';
                document.head.appendChild(el);
            }
            el.textContent = JSON.stringify(schema, null, 2);
        });

        return () => {
            [0, 1, 2, 3].forEach(i => {
                const el = document.getElementById(`json-ld-${i}`);
                if (el) el.remove();
            });
        };
    }, []);

    return null;
}
