import { useEffect } from 'react';

/**
 * Component to add an SEO sitemap verification
 * for major search engines (Google, Bing, etc)
 */
export const SiteVerification = () => {
  useEffect(() => {
    // Add Google site verification tag - update this with your actual verification code if needed
    // Commented out for now until you have actual verification codes
    /*
    const addMetaTag = (name: string, content: string) => {
      if (!document.querySelector(`meta[name="${name}"]`)) {
        const meta = document.createElement('meta');
        meta.name = name;
        meta.content = content;
        document.head.appendChild(meta);
      }
    };
    
    // Example usage when you have verification codes:
    // addMetaTag('google-site-verification', 'YOUR_GOOGLE_VERIFICATION_CODE');
    // addMetaTag('msvalidate.01', 'YOUR_BING_VERIFICATION_CODE');
    // addMetaTag('yandex-verification', 'YOUR_YANDEX_VERIFICATION_CODE');
    */

    // Adding preconnect for analytics
    const addPreconnect = (href: string, crossOrigin = false) => {
      if (!document.querySelector(`link[rel="preconnect"][href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = href;
        if (crossOrigin) link.setAttribute('crossorigin', '');
        document.head.appendChild(link);
      }
    };

    // Common analytics and CDN preconnects
    addPreconnect('https://www.googletagmanager.com');
    addPreconnect('https://www.google-analytics.com');

    // Add semantic linking for better crawlability
    const addSemanticLink = (rel: string, href: string) => {
      if (!document.querySelector(`link[rel="${rel}"][href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = rel;
        link.href = href;
        document.head.appendChild(link);
      }
    };

    // Add navigation links for better crawlability
    addSemanticLink('home', 'https://devinobrien.netlify.app/');
    addSemanticLink('author', 'https://devinobrien.netlify.app/about');
    addSemanticLink('me', 'https://devinobrien.netlify.app/about');

    return () => {
      // Cleanup function if needed
    };
  }, []);

  return null;
};
