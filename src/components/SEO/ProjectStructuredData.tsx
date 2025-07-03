import { useEffect } from 'react';

interface ProjectStructuredDataProps {
  project: {
    title: string;
    description?: string;
    image?: string;
    url?: string;
    tags?: string[];
    githubUrl?: string;
    demoUrl?: string;
    startDate?: string;
    endDate?: string;
  };
}

/**
 * Component to inject project-specific structured data into the page
 * This helps search engines better understand your project content
 */
export const ProjectStructuredData = ({
  project,
}: ProjectStructuredDataProps) => {
  useEffect(() => {
    const projectSchema = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareSourceCode',
      name: project.title,
      description:
        project.description ||
        `${project.title} - A software project by Devin O'Brien`,
      image: project.image,
      codeRepository: project.githubUrl,
      programmingLanguage: project.tags?.filter((tag) =>
        [
          'JavaScript',
          'TypeScript',
          'Python',
          'Java',
          'C#',
          'Ruby',
          'PHP',
          'Go',
        ].includes(tag),
      ),
      author: {
        '@type': 'Person',
        name: "Devin O'Brien",
        url: 'https://devinobrien.netlify.app',
      },
      dateCreated: project.startDate || '2022-01-01',
      dateModified: project.endDate || new Date().toISOString().split('T')[0],
      url:
        project.url ||
        `https://devinobrien.netlify.app/projects#${project.title.toLowerCase().replace(/\s+/g, '-')}`,
      potentialAction: project.demoUrl
        ? {
            '@type': 'ViewAction',
            target: project.demoUrl,
            name: 'View Demo',
          }
        : undefined,
    };

    // Add the structured data to the page
    const script = document.createElement('script');
    script.id = `project-schema-${project.title.toLowerCase().replace(/\s+/g, '-')}`;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(projectSchema);
    document.head.appendChild(script);

    // Cleanup when component unmounts
    return () => {
      const existingScript = document.getElementById(
        `project-schema-${project.title.toLowerCase().replace(/\s+/g, '-')}`,
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [project]);

  // This component doesn't render anything
  return null;
};
