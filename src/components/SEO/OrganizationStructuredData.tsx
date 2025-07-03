import { useEffect } from 'react';

interface OrganizationProps {
  name: string;
  url: string;
  logo?: string;
  description?: string;
  sameAs?: string[];
}

/**
 * Component to inject Organization schema into the page head
 * Improves search engine understanding of organization entities
 */
export const OrganizationStructuredData = ({
  name,
  url,
  logo = 'https://access-portfolio-images.s3.amazonaws.com/profile.jpeg',
  description,
  sameAs = [],
}: OrganizationProps) => {
  useEffect(() => {
    const orgSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: name,
      url: url,
      logo: logo,
      description: description,
      sameAs: sameAs,
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'devinobrien@icloud.com',
        contactType: 'customer support',
      },
    };

    // Add the structured data to the page
    const script = document.createElement('script');
    script.id = `org-schema-${name.toLowerCase().replace(/\s+/g, '-')}`;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(orgSchema);
    document.head.appendChild(script);

    // Cleanup when component unmounts
    return () => {
      const existingScript = document.getElementById(
        `org-schema-${name.toLowerCase().replace(/\s+/g, '-')}`,
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [name, url, logo, description, sameAs]);

  // This component doesn't render anything
  return null;
};

/**
 * Pre-configured component for your own professional organization schema
 */
export const MyOrganizationSchema = () => {
  return (
    <OrganizationStructuredData
      name="Devin O'Brien Software Development"
      url='https://devinobrien.netlify.app'
      logo='https://access-portfolio-images.s3.amazonaws.com/profile.jpeg'
      description='Professional software development services specializing in modern web applications using React, TypeScript, Node.js, and cloud technologies.'
      sameAs={[
        'https://www.linkedin.com/in/obrien-devin/',
        'https://github.com/devinobrien-css',
        'https://www.instagram.com/devinobrien/',
      ]}
    />
  );
};
