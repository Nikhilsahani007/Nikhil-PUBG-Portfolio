import { useEffect } from 'react';

interface MetaTagsProps {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
    ogType?: 'website' | 'article' | 'profile';
    canonical?: string;
    noindex?: boolean;
}

const BASE_URL = 'https://nikhilsahani.vercel.app';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

export default function MetaTags({
    title,
    description,
    keywords = 'Nikhil Sahani, Full Stack Developer, MERN Stack Developer India, Java Backend Developer, React Developer, Node.js, MongoDB, NS SiteCraft Solutions',
    ogImage = DEFAULT_OG_IMAGE,
    ogType = 'website',
    canonical,
    noindex = false,
}: MetaTagsProps) {
    useEffect(() => {
        // Title
        document.title = title;

        const setMeta = (name: string, content: string, attr = 'name') => {
            let el = document.querySelector(`meta[${attr}="${name}"]`);
            if (!el) {
                el = document.createElement('meta');
                el.setAttribute(attr, name);
                document.head.appendChild(el);
            }
            el.setAttribute('content', content);
        };

        // Core meta
        setMeta('description', description);
        setMeta('keywords', keywords);
        setMeta('author', 'Nikhil Sahani');
        setMeta('robots', noindex ? 'noindex,nofollow' : 'index,follow');

        // Open Graph
        setMeta('og:type', ogType, 'property');
        setMeta('og:title', title, 'property');
        setMeta('og:description', description, 'property');
        setMeta('og:image', ogImage, 'property');
        setMeta('og:url', canonical || window.location.href, 'property');
        setMeta('og:site_name', 'Nikhil Sahani Portfolio', 'property');
        setMeta('og:locale', 'en_IN', 'property');

        // Twitter Card
        setMeta('twitter:card', 'summary_large_image');
        setMeta('twitter:title', title);
        setMeta('twitter:description', description);
        setMeta('twitter:image', ogImage);
        setMeta('twitter:creator', '@nikhilsahani');

        // Canonical
        let canonicalEl = document.querySelector('link[rel="canonical"]');
        if (!canonicalEl) {
            canonicalEl = document.createElement('link');
            (canonicalEl as HTMLLinkElement).rel = 'canonical';
            document.head.appendChild(canonicalEl);
        }
        (canonicalEl as HTMLLinkElement).href = canonical || `${BASE_URL}${window.location.pathname}`;

        return () => {
            // Restore defaults on unmount
            document.title = 'Nikhil Sahani | Full-Stack Developer';
        };
    }, [title, description, keywords, ogImage, ogType, canonical, noindex]);

    return null;
}
