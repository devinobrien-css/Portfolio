import { ModernSkills } from '../../components/ModernSkills';
import { useSEO, pageSEO } from '../../hooks/useSEO';

export const Skills = () => {
  // Enhanced SEO optimization
  useSEO(pageSEO.skills);

  return (
    <div className='min-h-screen bg-white dark:bg-gray-900'>
      <div className='pt-16'>
        <ModernSkills />
      </div>
    </div>
  );
};
