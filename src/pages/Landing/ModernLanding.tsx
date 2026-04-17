import { ModernHero } from '../../components/ModernHero';
import { ModernServices } from '../../components/ModernServices';
import { ModernCTA } from '../../components/ModernCTA';
import { QuickStats } from '../../components/QuickStats';
import { SocialProof } from '../../components/SocialProof';
import { AcademicExperience } from './Sections/Academic';
import { WorkExperience } from './Sections/WorkExperience/WorkExperience';
import { UIShowcase } from './Sections/UIShowcase';
import { useSEO, pageSEO } from '../../hooks/useSEO';

export const ModernLanding = () => {
  // Enhanced SEO optimization with home page configuration
  useSEO({
    ...pageSEO.home,
    url: 'https://devinobrien.netlify.app/', // Explicitly set canonical URL for home page
    publishedTime: '2024-01-01T00:00:00Z',
    modifiedTime: '2026-04-17T00:00:00Z',
    locale: 'en_US',
    alternateLocales: [], // Add alternate locales if you have them
  });

  return (
    <div className='relative'>
      {/* Modern Hero Section */}
      <div id='hero' />
      <ModernHero />

      {/* Services Section */}
      <div id='services' />
      <ModernServices />

      {/* Work Experience */}
      <div id='experience' />
      <WorkExperience />

      {/* Quick Stats */}
      <QuickStats />

      {/* UI Showcase */}
      <div id='ui-showcase' />
      <UIShowcase />

      {/* Proven Impact & Tech Stack */}
      <div id='results' />
      <SocialProof />

      {/* Academic Background */}
      <div id='education' />
      <AcademicExperience />

      {/* Call to Action */}
      <div id='contact' />
      <ModernCTA />
    </div>
  );
};
