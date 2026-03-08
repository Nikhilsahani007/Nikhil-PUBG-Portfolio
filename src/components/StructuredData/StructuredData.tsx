import { useEffect } from 'react';

// JSON-LD structured data for the entire site
export default function StructuredData() {
    useEffect(() => {
        const schemas = [
            // Person Schema
            {
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Nikhil Sahani',
                url: 'https://nikhilsahani.dev',
                image: 'https://nikhilsahani.dev/og-image.png',
                jobTitle: 'Software Developer',
                description:
                    'Software Developer and Founder of NS SiteCraft Solutions. Specializes in MERN stack (MongoDB, Express.js, React, Node.js) and Java backend development.',
                alumniOf: {
                    '@type': 'CollegeOrUniversity',
                    name: 'Lovely Professional University',
                    address: {
                        '@type': 'PostalAddress',
                        addressLocality: 'Punjab',
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
                    'https://github.com/nikhilsahani',
                    'https://linkedin.com/in/nikhilsahani',
                ],
                knowsAbout: [
                    'React', 'Node.js', 'MongoDB', 'Express.js',
                    'Java', 'JDBC', 'MySQL', 'TypeScript',
                    'REST APIs', 'Docker', 'AWS', 'Python',
                    'Machine Learning', 'Full Stack Development',
                    'Freelance Web Development',
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
                sameAs: ['https://github.com/nikhilsahani'],
            },

            // WebSite Schema
            {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                url: 'https://nikhilsahani.dev',
                name: 'Nikhil Sahani — Full Stack Developer Portfolio',
                description:
                    'Portfolio of Nikhil Sahani, Full Stack MERN & Java Developer and Founder of NS SiteCraft Solutions.',
                author: {
                    '@type': 'Person',
                    name: 'Nikhil Sahani',
                },
                potentialAction: {
                    '@type': 'SearchAction',
                    target: 'https://nikhilsahani.dev/projects?q={search_term_string}',
                    'query-input': 'required name=search_term_string',
                },
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
            [0, 1, 2].forEach(i => {
                const el = document.getElementById(`json-ld-${i}`);
                if (el) el.remove();
            });
        };
    }, []);

    return null;
}
