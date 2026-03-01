import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface BreadcrumbItem {
    name: string;
    url: string;
}

interface Props {
    items: BreadcrumbItem[];
}

const BASE_URL = 'https://nikhilsahani.dev';

export function BreadcrumbSchema({ items }: Props) {
    useEffect(() => {
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: items.map((item, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: item.name,
                item: `${BASE_URL}${item.url}`,
            })),
        };

        let el = document.getElementById('json-ld-breadcrumb') as HTMLScriptElement | null;
        if (!el) {
            el = document.createElement('script');
            el.id = 'json-ld-breadcrumb';
            el.type = 'application/ld+json';
            document.head.appendChild(el);
        }
        el.textContent = JSON.stringify(schema);

        return () => {
            const existing = document.getElementById('json-ld-breadcrumb');
            if (existing) existing.remove();
        };
    }, [items]);

    return null;
}

// Auto breadcrumb based on current route
const routeNames: Record<string, string> = {
    '/': 'Home',
    '/about': 'About',
    '/projects': 'Projects',
    '/resume': 'Resume',
    '/contact': 'Contact',
    '/blog': 'Blog',
};

export function AutoBreadcrumb() {
    const location = useLocation();
    const segments = location.pathname.split('/').filter(Boolean);

    const items: BreadcrumbItem[] = [{ name: 'Home', url: '/' }];
    let currentPath = '';

    segments.forEach(seg => {
        currentPath += `/${seg}`;
        const name = routeNames[currentPath] || seg
            .split('-')
            .map(w => w.charAt(0).toUpperCase() + w.slice(1))
            .join(' ');
        items.push({ name, url: currentPath });
    });

    return items.length > 1 ? <BreadcrumbSchema items={items} /> : null;
}
