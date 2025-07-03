import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noIndex?: boolean;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  locale?: string;
  alternateLocales?: string[];
}

const defaultSEO = {
  title: "Devin O'Brien - Full Stack Software Engineer | React, Node.js, AWS Expert",
  description: "Experienced Full Stack Software Engineer specializing in React, TypeScript, Node.js, and AWS. 5+ years building scalable web applications for top companies like Warner Bros Discovery.",
  keywords: "Full Stack Developer, React Developer, TypeScript, Node.js, AWS, Software Engineer, Web Development, JavaScript, Python, PostgreSQL, Tech Lead",
  image: "https://access-portfolio-images.s3.amazonaws.com/profile.jpeg",
  url: "https://devinobrien.netlify.app",
  type: "website",
  author: "Devin O'Brien",
  locale: "en_US"
};

export const useSEO = (seoProps: SEOProps = {}) => {
  const location = useLocation();
  
  useEffect(() => {
    const {
      title = defaultSEO.title,
      description = defaultSEO.description,
      keywords = defaultSEO.keywords,
      image = defaultSEO.image,
      url = `${defaultSEO.url}${location.pathname}`,
      type = defaultSEO.type,
      author = defaultSEO.author,
      locale = defaultSEO.locale,
      noIndex = false,
      publishedTime,
      modifiedTime,
      section,
      tags = [],
      alternateLocales = []
    } = seoProps;

    // Update title with optimal length (50-60 characters)
    const optimizedTitle = title.length > 60 ? `${title.substring(0, 57)}...` : title;
    document.title = optimizedTitle;

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Update basic meta tags
    updateMetaTag('description', description.length > 160 ? `${description.substring(0, 157)}...` : description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('googlebot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    updateMetaTag('bingbot', 'index, follow');
    
    // Enhanced mobile and performance meta tags
    updateMetaTag('format-detection', 'telephone=no');
    updateMetaTag('mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'default');
    updateMetaTag('msapplication-tap-highlight', 'no');

    // Update Open Graph tags with enhanced properties
    updateMetaTag('og:title', optimizedTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:image:alt', `${author} - Professional Profile Photo`, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', "Devin O'Brien Portfolio", true);
    updateMetaTag('og:locale', locale, true);
    
    // Add alternate locales if provided
    alternateLocales.forEach(altLocale => {
      updateMetaTag('og:locale:alternate', altLocale, true);
    });

    // Enhanced Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:site', '@devinobrien');
    updateMetaTag('twitter:creator', '@devinobrien');
    updateMetaTag('twitter:title', optimizedTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:image:alt', `${author} - Professional Profile Photo`);

    // Article-specific meta tags for blog/project pages
    if (type === 'article' || section) {
      if (publishedTime) updateMetaTag('article:published_time', publishedTime, true);
      if (modifiedTime) updateMetaTag('article:modified_time', modifiedTime, true);
      if (section) updateMetaTag('article:section', section, true);
      if (author) updateMetaTag('article:author', author, true);
      
      // Add article tags
      tags.forEach(tag => {
        const tagElement = document.createElement('meta');
        tagElement.setAttribute('property', 'article:tag');
        tagElement.setAttribute('content', tag);
        document.head.appendChild(tagElement);
      });
    }

    // LinkedIn specific meta tags
    updateMetaTag('linkedin:owner', 'obrien-devin', true);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // Add breadcrumb structured data
    const breadcrumbScript = document.getElementById('breadcrumb-schema');
    if (breadcrumbScript) {
      breadcrumbScript.remove();
    }

    if (location.pathname !== '/') {
      const pathSegments = location.pathname.split('/').filter(Boolean);
      const breadcrumbList = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": defaultSEO.url
          },
          ...pathSegments.map((segment, index) => ({
            "@type": "ListItem",
            "position": index + 2,
            "name": segment.charAt(0).toUpperCase() + segment.slice(1),
            "item": `${defaultSEO.url}/${pathSegments.slice(0, index + 1).join('/')}`
          }))
        ]
      };

      const script = document.createElement('script');
      script.id = 'breadcrumb-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(breadcrumbList);
      document.head.appendChild(script);
    }

    // Add WebSite schema for search functionality
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Devin O'Brien Portfolio",
      "alternateName": "Devin O'Brien - Full Stack Software Engineer",
      "url": defaultSEO.url,
      "description": defaultSEO.description,
      "author": {
        "@type": "Person",
        "name": author
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${defaultSEO.url}/projects?search={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    };

    let websiteSchemaScript = document.getElementById('website-schema') as HTMLScriptElement;
    if (!websiteSchemaScript) {
      websiteSchemaScript = document.createElement('script');
      websiteSchemaScript.id = 'website-schema';
      websiteSchemaScript.type = 'application/ld+json';
      document.head.appendChild(websiteSchemaScript);
    }
    websiteSchemaScript.textContent = JSON.stringify(websiteSchema);

  }, [location.pathname, seoProps]);
};

// Enhanced page-specific SEO configurations
export const pageSEO = {
  home: {
    title: "Devin O'Brien - Full Stack Software Engineer | React, Node.js, AWS Expert",
    description: "Experienced Full Stack Software Engineer specializing in React, TypeScript, Node.js, and AWS. 5+ years building scalable web applications for top companies.",
    keywords: "Full Stack Developer, React Developer, TypeScript, Node.js, AWS, Software Engineer, Web Development, JavaScript, Python, PostgreSQL, Tech Lead, Devin O'Brien, Portfolio",
    type: "website",
    section: "Portfolio"
  },
  projects: {
    title: "Projects | Devin O'Brien - Full Stack Development Portfolio",
    description: "Explore Devin O'Brien's portfolio of full stack web applications built with React, TypeScript, Node.js, Python, and AWS. From NeuroExed to Warner Bros Discovery projects.",
    keywords: "React Projects, Full Stack Projects, TypeScript Applications, Node.js Development, AWS Cloud Projects, Web Development Portfolio, Software Engineering Projects, NeuroExed, Warner Bros Discovery, Maro for Schools",
    type: "website",
    section: "Projects",
    tags: ["React", "TypeScript", "Node.js", "AWS", "Python", "Full Stack"],
    modifiedTime: new Date().toISOString()
  },
  skills: {
    title: "Technical Skills | Devin O'Brien - React, Node.js, AWS, TypeScript",
    description: "Comprehensive overview of Devin O'Brien's technical skills including React, TypeScript, Node.js, Python, AWS, PostgreSQL, Docker, Kubernetes, and more.",
    keywords: "React Skills, TypeScript Expert, Node.js Developer, AWS Certified, Python Programming, PostgreSQL Database, Docker Containers, Kubernetes, GraphQL, REST APIs, Frontend Development, Backend Development",
    type: "website",
    section: "Skills",
    tags: ["Technical Skills", "Programming", "Cloud Computing", "Web Development"]
  },
  about: {
    title: "About Devin O'Brien | Full Stack Software Engineer & Computer Science Student",
    description: "Learn about Devin O'Brien's journey as a Full Stack Software Engineer, from computer science studies to working with top companies like Warner Bros Discovery and Maro for Schools.",
    keywords: "Devin O'Brien About, Software Engineer Biography, Computer Science Student, Full Stack Developer Story, Tech Career Journey, Warner Bros Discovery, Maro for Schools, SUNY Albany",
    type: "profile",
    section: "About",
    tags: ["Biography", "Career", "Education", "Experience"]
  },
  personality: {
    title: "Personality & Interests | Devin O'Brien - Beyond the Code",
    description: "Discover Devin O'Brien's personality, interests, and life beyond software engineering. Hobbies, passions, and what drives innovation in tech.",
    keywords: "Devin O'Brien Personality, Software Engineer Interests, Tech Hobbies, Personal Life, Innovation, Creativity, Problem Solving",
    type: "profile",
    section: "Personality"
  },
  docs: {
    title: "Component Library | Devin O'Brien Development Documentation",
    description: "Technical documentation and component library showcasing Devin O'Brien's development standards and reusable components.",
    keywords: "React Components, Component Library, Development Documentation, Technical Standards, UI Components, Code Examples",
    noIndex: true,
    type: "website",
    section: "Documentation"
  }
};

interface Project {
  title: string;
  description?: string;
  tags?: string[];
  image?: string;
  publishedDate?: string;
}

// Enhanced SEO helper functions
export const generateProjectSEO = (project: Project) => ({
  title: `${project.title} | Devin O'Brien Projects`,
  description: `${project.description || `Explore ${project.title}, a full stack project by Devin O'Brien showcasing modern web development techniques.`}`,
  keywords: `${project.tags?.join(', ')}, Full Stack Project, Devin O'Brien, Web Development`,
  image: project.image || defaultSEO.image,
  type: "article",
  section: "Projects",
  tags: project.tags || [],
  publishedTime: project.publishedDate || "2024-01-01T00:00:00Z",
  modifiedTime: new Date().toISOString()
});

export const generateSkillSEO = (skillCategory: string, skills: string[]) => ({
  title: `${skillCategory} Skills | Devin O'Brien Technical Expertise`,
  description: `Explore Devin O'Brien's expertise in ${skillCategory} including ${skills.slice(0, 3).join(', ')} and more. Professional development experience and certifications.`,
  keywords: `${skillCategory}, ${skills.join(', ')}, Devin O'Brien Skills, Technical Expertise, Software Development`,
  type: "website",
  section: "Skills",
  tags: [skillCategory, ...skills.slice(0, 5)]
});
