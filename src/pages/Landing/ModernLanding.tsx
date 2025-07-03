import { ModernHero } from '../../components/ModernHero';
import { ModernServices } from '../../components/ModernServices';
import { ModernCTA } from '../../components/ModernCTA';
import { QuickStats } from '../../components/QuickStats';
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
    modifiedTime: new Date().toISOString(),
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

      {/* Quick Stats */}
      <QuickStats />

      {/* Modern Portfolio */}
      {/* <div id='portfolio' /> */}
      {/* <ModernPortfolio /> */}

      {/* UI Showcase */}
      <div id='ui-showcase' />
      <UIShowcase />

      {/* Work Experience */}
      <div id='experience' />
      <WorkExperience />

      {/* Academic Background */}
      <div id='education' />
      <AcademicExperience />

      {/* Social Proof & Testimonials */}
      {/* <div id='testimonials' />
      <SocialProof /> */}

      {/* Call to Action */}
      <div id='contact' />
      <ModernCTA />
    </div>
  );
};
