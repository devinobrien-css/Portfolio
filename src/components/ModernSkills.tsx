import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';

interface Skill {
  name: string;
  icon: string;
  level: number;
  category: string;
  color: string;
  experience: string;
  projects: number;
}

const skills: Skill[] = [
  // Frontend
  {
    name: 'React',
    icon: 'logos:react',
    level: 95,
    category: 'Frontend',
    color: 'bg-blue-500',
    experience: '4+ years',
    projects: 25,
  },
  {
    name: 'TypeScript',
    icon: 'logos:typescript-icon',
    level: 90,
    category: 'Frontend',
    color: 'bg-blue-600',
    experience: '3+ years',
    projects: 20,
  },
  {
    name: 'Next.js',
    icon: 'logos:nextjs-icon',
    level: 88,
    category: 'Frontend',
    color: 'bg-neutral-600',
    experience: '2+ years',
    projects: 15,
  },
  {
    name: 'Tailwind CSS',
    icon: 'logos:tailwindcss-icon',
    level: 92,
    category: 'Frontend',
    color: 'bg-teal-500',
    experience: '3+ years',
    projects: 30,
  },
  {
    name: 'Vue.js',
    icon: 'logos:vue',
    level: 78,
    category: 'Frontend',
    color: 'bg-green-500',
    experience: '2+ years',
    projects: 8,
  },

  // Backend
  {
    name: 'Node.js',
    icon: 'logos:nodejs-icon',
    level: 90,
    category: 'Backend',
    color: 'bg-green-500',
    experience: '4+ years',
    projects: 22,
  },
  {
    name: 'Python',
    icon: 'logos:python',
    level: 85,
    category: 'Backend',
    color: 'bg-yellow-500',
    experience: '3+ years',
    projects: 18,
  },
  {
    name: 'PostgreSQL',
    icon: 'logos:postgresql',
    level: 88,
    category: 'Backend',
    color: 'bg-blue-700',
    experience: '3+ years',
    projects: 16,
  },
  {
    name: 'MongoDB',
    icon: 'logos:mongodb-icon',
    level: 82,
    category: 'Backend',
    color: 'bg-green-600',
    experience: '2+ years',
    projects: 12,
  },
  {
    name: 'Express.js',
    icon: 'logos:express',
    level: 87,
    category: 'Backend',
    color: 'bg-neutral-500',
    experience: '3+ years',
    projects: 20,
  },

  // Cloud & DevOps
  {
    name: 'AWS',
    icon: 'logos:aws',
    level: 85,
    category: 'Cloud',
    color: 'bg-neutral-500',
    experience: '3+ years',
    projects: 14,
  },
  {
    name: 'Docker',
    icon: 'logos:docker-icon',
    level: 80,
    category: 'Cloud',
    color: 'bg-blue-400',
    experience: '2+ years',
    projects: 10,
  },
  {
    name: 'Kubernetes',
    icon: 'logos:kubernetes',
    level: 75,
    category: 'Cloud',
    color: 'bg-neutral-600',
    experience: '1+ years',
    projects: 6,
  },
  {
    name: 'Vercel',
    icon: 'logos:vercel-icon',
    level: 90,
    category: 'Cloud',
    color: 'bg-black',
    experience: '2+ years',
    projects: 18,
  },

  // Tools & Others
  {
    name: 'Git',
    icon: 'logos:git-icon',
    level: 93,
    category: 'Tools',
    color: 'bg-red-500',
    experience: '4+ years',
    projects: 50,
  },
  {
    name: 'Figma',
    icon: 'logos:figma',
    level: 82,
    category: 'Tools',
    color: 'bg-neutral-500',
    experience: '2+ years',
    projects: 15,
  },
];

const categories = ['All', 'Frontend', 'Backend', 'Cloud', 'Tools'];

export const ModernSkills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [animatedLevels, setAnimatedLevels] = useState<{
    [key: string]: number;
  }>({});
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  // Calculate stats for the active category
  const categoryStats = {
    totalSkills: filteredSkills.length,
    avgLevel: Math.round(
      filteredSkills.reduce((acc, skill) => acc + skill.level, 0) /
        filteredSkills.length,
    ),
    totalProjects: filteredSkills.reduce(
      (acc, skill) => acc + skill.projects,
      0,
    ),
    topSkill: filteredSkills.reduce(
      (prev, current) => (prev.level > current.level ? prev : current),
      filteredSkills[0],
    ),
  };

  // Animate skill bars when component becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            // Animate each skill bar with staggered timing
            filteredSkills.forEach((skill, index) => {
              setTimeout(() => {
                setAnimatedLevels((prev) => ({
                  ...prev,
                  [skill.name]: skill.level,
                }));
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 },
    );

    const element = document.getElementById('modern-skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [filteredSkills, isVisible]);

  // Reset animations when category changes
  useEffect(() => {
    setAnimatedLevels({});
    setIsVisible(false);
    // Re-trigger animations after category change
    setTimeout(() => {
      filteredSkills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedLevels((prev) => ({
            ...prev,
            [skill.name]: skill.level,
          }));
        }, index * 100);
      });
    }, 100);
  }, [activeCategory, filteredSkills]);

  return (
    <section
      id='modern-skills'
      className='relative bg-neutral-50 py-20 dark:bg-neutral-950'
    >
      {/* Background Pattern */}
      <div className='bg-grid-pattern absolute inset-0 opacity-20'></div>

      <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className={`text-center transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className='mb-4 inline-flex items-center rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300'>
            <Icon icon='ph:lightning' className='mr-2 size-4 animate-pulse' />
            Technical Expertise
          </div>
          <h2 className='mb-4 text-4xl font-bold text-neutral-900 dark:text-white sm:text-5xl'>
            Skills &{' '}
            <span className='text-blue-600 dark:text-blue-500'>
              Technologies
            </span>
          </h2>
          <p className='mx-auto max-w-2xl text-xl text-neutral-600 dark:text-neutral-400'>
            A comprehensive toolkit built over years of hands-on development
            experience across diverse projects and industries.
          </p>
        </div>

        {/* Stats Dashboard */}
        <div className={`mt-12 grid grid-cols-2 gap-4 transition-all delay-300 duration-700 sm:grid-cols-4 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className='rounded-2xl border border-neutral-200 bg-white p-4 text-center dark:border-neutral-700 dark:bg-neutral-800'>
            <div className='text-2xl font-bold text-blue-600'>
              {categoryStats.totalSkills}
            </div>
            <div className='text-sm text-neutral-600 dark:text-neutral-400'>
              Technologies
            </div>
          </div>
          <div className='rounded-2xl border border-neutral-200 bg-white p-4 text-center dark:border-neutral-700 dark:bg-neutral-800'>
            <div className='text-2xl font-bold text-blue-600'>
              {categoryStats.avgLevel}%
            </div>
            <div className='text-sm text-neutral-600 dark:text-neutral-400'>
              Avg Proficiency
            </div>
          </div>
          <div className='rounded-2xl border border-neutral-200 bg-white p-4 text-center dark:border-neutral-700 dark:bg-neutral-800'>
            <div className='text-2xl font-bold text-blue-600'>
              {categoryStats.totalProjects}
            </div>
            <div className='text-sm text-neutral-600 dark:text-neutral-400'>
              Projects Built
            </div>
          </div>
          <div className='rounded-2xl border border-neutral-200 bg-white p-4 text-center dark:border-neutral-700 dark:bg-neutral-800'>
            <div className='text-2xl font-bold text-blue-600'>
              {categoryStats.topSkill?.level}%
            </div>
            <div className='text-sm text-neutral-600 dark:text-neutral-400'>
              Top Skill
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className={`mt-12 flex flex-wrap justify-center gap-2 transition-all delay-500 duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`group relative overflow-hidden rounded-full px-6 py-3 font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'scale-105 bg-neutral-900 text-white shadow-lg dark:bg-white dark:text-neutral-900'
                  : 'border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 hover:shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700'
              }`}
            >
              {activeCategory === category && (
                <div className='absolute inset-0 bg-neutral-900 opacity-100 dark:bg-white'></div>
              )}
              <span className='relative z-10'>{category}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className={`mt-16 grid gap-6 transition-all delay-700 duration-700 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className='group relative rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-500 hover:scale-105 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800'
              style={{
                animationDelay: `${index * 0.1}s`,
                transform:
                  hoveredSkill === skill.name ? 'scale(1.05)' : 'scale(1)',
              }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Hover Glow Effect */}
              <div
                className='absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                style={{
                  background: `linear-gradient(135deg, ${skill.color.includes('blue') ? '#3b82f6' : skill.color.includes('green') ? '#10b981' : skill.color.includes('purple') ? '#8b5cf6' : '#f59e0b'}22, transparent)`,
                }}
              ></div>

              {/* Content */}
              <div className='relative z-10'>
                {/* Skill Icon & Name */}
                <div className='mb-4 flex items-center gap-3'>
                  <div className='flex size-12 items-center justify-center rounded-xl bg-neutral-100 transition-colors group-hover:bg-neutral-200 dark:bg-neutral-700 dark:group-hover:bg-neutral-600'>
                    <Icon
                      icon={skill.icon}
                      className='size-8 transition-transform group-hover:scale-110'
                    />
                  </div>
                  <div>
                    <h3 className='font-semibold text-neutral-900 dark:text-white'>
                      {skill.name}
                    </h3>
                    <p className='text-sm text-neutral-500 dark:text-neutral-400'>
                      {skill.category}
                    </p>
                  </div>
                </div>

                {/* Experience & Projects */}
                <div className='mb-4 grid grid-cols-2 gap-2 text-xs'>
                  <div className='rounded-lg bg-neutral-100 p-2 text-center dark:bg-neutral-700'>
                    <div className='font-medium text-neutral-900 dark:text-white'>
                      {skill.experience}
                    </div>
                    <div className='text-neutral-500 dark:text-neutral-400'>
                      Experience
                    </div>
                  </div>
                  <div className='rounded-lg bg-neutral-100 p-2 text-center dark:bg-neutral-700'>
                    <div className='font-medium text-neutral-900 dark:text-white'>
                      {skill.projects}
                    </div>
                    <div className='text-neutral-500 dark:text-neutral-400'>
                      Projects
                    </div>
                  </div>
                </div>

                {/* Skill Level */}
                <div className='mb-2 flex items-center justify-between'>
                  <span className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
                    Proficiency
                  </span>
                  <span className='text-sm font-bold text-neutral-900 dark:text-white'>
                    {animatedLevels[skill.name] || 0}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className='relative h-3 rounded-full bg-neutral-200 dark:bg-neutral-700'>
                  <div
                    className={`h-3 rounded-full transition-all duration-1000 ease-out ${skill.color} relative overflow-hidden`}
                    style={{
                      width: `${animatedLevels[skill.name] || 0}%`,
                    }}
                  >
                    {/* Animated shine effect */}
                    <div className='absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100'></div>
                  </div>
                </div>

                {/* Skill Level Indicator */}
                <div
                  className={`mt-3 text-xs font-medium transition-opacity duration-300 ${
                    hoveredSkill === skill.name ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className='flex items-center gap-1'>
                    {skill.level >= 90 ? (
                      <>
                        <Icon
                          icon='ph:star-fill'
                          className='size-3 text-yellow-500'
                        />
                        <span className='text-yellow-600 dark:text-yellow-400'>
                          Expert Level
                        </span>
                      </>
                    ) : skill.level >= 80 ? (
                      <>
                        <Icon
                          icon='ph:medal-fill'
                          className='size-3 text-blue-500'
                        />
                        <span className='text-blue-600 dark:text-blue-400'>
                          Advanced
                        </span>
                      </>
                    ) : (
                      <>
                        <Icon
                          icon='ph:certificate'
                          className='size-3 text-neutral-500'
                        />
                        <span className='text-neutral-600 dark:text-neutral-400'>
                          Proficient
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className='mt-16 text-center'>
          <div className='rounded-3xl bg-neutral-900 p-8 text-white shadow-sm dark:bg-white dark:text-neutral-900'>
            <h3 className='mb-4 text-2xl font-bold sm:text-3xl'>
              Ready to leverage these skills for your project?
            </h3>
            <p className='mb-6 text-lg text-blue-100'>
              Let's discuss how my technical expertise can help bring your ideas
              to life and drive real business results.
            </p>
            <div className='flex flex-col gap-4 sm:flex-row sm:justify-center'>
              <a
                href="mailto:devinobrien@icloud.com?subject=Project%20Inquiry&body=Hi%20Devin,%0D%0A%0D%0AI'm%20interested%20in%20discussing%20a%20project%20with%20you.%20Here%20are%20the%20details:%0D%0A%0D%0AProject%20Type:%20%0D%0ABudget:%20%0D%0ATimeline:%20%0D%0A%0D%0APlease%20let%20me%20know%20when%20you're%20available%20for%20a%20call."
                className='group relative overflow-hidden rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:bg-blue-700 hover:shadow-lg dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800'
              >
                <span className='relative z-10 flex items-center gap-2'>
                  <Icon icon='ph:chat-circle' className='size-5' />
                  Start a Project
                </span>
              </a>
              <a
                href="https://access-portfolio-images.s3.amazonaws.com/Devin+P+O'Brien.pdf"
                target='_blank'
                rel='noopener noreferrer'
                download="Devin P. O'Brien Resume"
                className='group rounded-lg border-2 border-white/30 px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:border-white hover:bg-white/10'
              >
                <span className='flex items-center gap-2'>
                  <Icon icon='ph:download' className='size-5' />
                  View Resume
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
