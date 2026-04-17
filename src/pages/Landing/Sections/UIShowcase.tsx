import { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import { projects } from '../../../data/projects';
import { useTLDR } from '../../../util/context/TLDRContext';

interface UIProject {
  title: string;
  subtitle: string;
  url: string;
  image_url: string;
  description: string;
  tech: string[];
  category: string;
}

interface LivePreviewProps {
  url: string;
  title: string;
  fallbackImage: string;
  isActive?: boolean;
  globalEnabled?: boolean;
}

const LivePreview = ({
  url,
  title,
  fallbackImage,
  isActive = false,
  globalEnabled = true,
}: LivePreviewProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  // Only load iframe when preview is active and globally enabled
  useEffect(() => {
    if (isActive && globalEnabled) {
      const timer = setTimeout(() => setShowPreview(true), 500);
      return () => clearTimeout(timer);
    } else {
      setShowPreview(false);
      setIsLoaded(false);
      setHasError(false);
    }
  }, [isActive, globalEnabled]);

  return (
    <div className='relative size-full overflow-hidden rounded-xl'>
      {/* Fallback Image */}
      <img
        src={fallbackImage}
        alt={title}
        className={`size-full object-cover transition-all duration-500 ${
          isLoaded && showPreview && !hasError ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Live Preview Iframe */}
      {showPreview && (
        <iframe
          src={url}
          title={title}
          className={`absolute inset-0 size-full border-0 bg-white transition-opacity duration-500 ${
            isLoaded && !hasError ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          sandbox='allow-scripts allow-same-origin allow-forms allow-popups'
          allow="camera 'self'; microphone 'self'"
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />
      )}

      {/* Loading Indicator */}
      {showPreview && !isLoaded && !hasError && (
        <div className='absolute inset-0 flex items-center justify-center bg-neutral-100/80 backdrop-blur-sm dark:bg-neutral-800/80'>
          <div className='flex items-center gap-2 text-neutral-600 dark:text-neutral-400'>
            <Icon icon='ph:spinner' className='size-6 animate-spin' />
            <span className='text-sm font-medium'>Loading live preview...</span>
          </div>
        </div>
      )}

      {/* Error State */}
      {hasError && showPreview && (
        <div className='absolute inset-0 flex items-center justify-center bg-neutral-100/80 backdrop-blur-sm dark:bg-neutral-800/80'>
          <div className='text-center text-neutral-600 dark:text-neutral-400'>
            <Icon icon='ph:warning' className='mx-auto mb-2 size-8' />
            <p className='text-sm font-medium'>Live preview unavailable</p>
            <p className='text-xs'>Some sites prevent embedding</p>
          </div>
        </div>
      )}

      {/* Preview Toggle Button */}
      <button
        onClick={() => setShowPreview(!showPreview)}
        className={`absolute bottom-3 right-3 flex items-center gap-2 rounded-lg bg-blue-500/90 px-3 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-blue-600 ${
          showPreview && isLoaded && !hasError
            ? 'bg-red-500/90 hover:bg-red-600'
            : ''
        }`}
        title={
          showPreview && isLoaded && !hasError
            ? 'Show static image'
            : 'Show live preview'
        }
      >
        <Icon
          icon={
            showPreview && isLoaded && !hasError ? 'ph:image' : 'ph:monitor'
          }
          className='size-4'
        />
        {showPreview && isLoaded && !hasError ? 'Static' : 'Live'}
      </button>
    </div>
  );
};

export const UIShowcase = () => {
  const { isTLDRMode } = useTLDR();
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [livePreviewsEnabled, setLivePreviewsEnabled] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Filter projects that are primarily UI/Frontend focused
  const uiProjects: UIProject[] = [
    {
      title: 'Maro for Schools',
      subtitle: 'Mental Health Management Platform',
      url: projects[1].url,
      image_url: projects[1].image_url,
      description:
        'A responsive React-based platform helping schools manage student mental health with intuitive interfaces and real-time monitoring.',
      tech: ['React', 'TypeScript', 'Tailwind', 'Node.js'],
      category: 'Healthcare Platform',
    },
    {
      title: 'NeuroExed',
      subtitle: 'Center for Neuroscience and Experiential Education',
      url: 'https://neuroexed.com/',
      image_url: 'https://neuroexed.com/img/brain.gif',
      description:
        'An interactive semi-virtual laboratory for neuroscience research featuring publications, podcasts, and educational content. The site showcases cutting-edge research on experiential learning, neuroplasticity, and cognitive-emotional integration.',
      tech: ['React', 'Next.js', 'TypeScript', 'Modern Web'],
      category: 'Research Platform',
    },
    {
      title: 'GrowthlyAI',
      subtitle: 'AI-Powered Pattern Generation Platform',
      url: 'https://growthlyai.netlify.app/',
      image_url: 'https://growthlyai.netlify.app/assets/landing-hero.jpeg',
      description:
        'A cutting-edge React-based platform that uses AI and natural language processing to generate clothing patterns in seconds, helping designers and hobbyists create production-ready patterns effortlessly.',
      tech: ['React', 'TypeScript', 'Tailwind', 'AI/ML'],
      category: 'AI Platform',
    },
    {
      title: 'Rich and the Night Train',
      subtitle: 'Blues & Rock Band Website',
      url: 'https://richandthenighttrain.netlify.app/',
      image_url: 'https://richandthenighttrain.netlify.app/hero-bg.jpg',
      description:
        'A dynamic and electrifying website for a blues and rock band featuring upcoming shows, band information, gallery, and news. Built with modern web technologies to capture the raw energy of live music.',
      tech: ['React', 'JavaScript', 'CSS3', 'Netlify'],
      category: 'Music Website',
    },
    {
      title: 'Diversity at College',
      subtitle: 'Educational Publication Site',
      url: projects[5].url,
      image_url: projects[5].image_url,
      description:
        'A clean, modern React website designed to promote educational diversity resources with responsive design and optimized performance.',
      tech: ['React', 'TypeScript', 'Tailwind', 'Netlify'],
      category: 'Marketing Site',
    },
    {
      title: "Kevin J O'Brien",
      subtitle: 'Professional Portfolio Website',
      url: 'https://kevinjobrien.netlify.app/',
      image_url:
        'https://kevinjobrien.netlify.app/_next/image?url=%2Fimg%2FPersonal%2FKevin%20O_Brien%20headshot.jpg&w=640&q=75',
      description:
        'A sophisticated professional portfolio website for a Club Management professional, featuring career highlights, experience, and achievements. Built with Next.js for optimal performance and SEO.',
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
      category: 'Professional Portfolio',
    },
    // {
    //   title: 'PlayARTI',
    //   subtitle: 'AI-Powered Kids Art Generator',
    //   url: projects[3].url,
    //   image_url: projects[3].image_url,
    //   description:
    //     'An innovative Vue.js application that lets kids create AI-generated art through emoji interactions, featuring smooth animations and kid-friendly UX.',
    //   tech: ['Vue.js', 'TypeScript', 'Quasar', 'OpenAI'],
    //   category: 'Creative Platform',
    // },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // No auto-cycling - let users have full control

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setActiveIndex(
          (prev) => (prev - 1 + uiProjects.length) % uiProjects.length,
        );
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % uiProjects.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [uiProjects.length]);

  // Scroll functions for the carousel
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0]?.clientWidth || 200;
      const newPosition = Math.max(0, scrollPosition - cardWidth * 2);
      setScrollPosition(newPosition);
      container.scrollTo({ left: newPosition, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0]?.clientWidth || 200;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const newPosition = Math.min(maxScroll, scrollPosition + cardWidth * 2);
      setScrollPosition(newPosition);
      container.scrollTo({ left: newPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className='relative overflow-hidden bg-neutral-50 py-24 dark:bg-neutral-950'
    >
      {/* Background Elements */}
      <div className='absolute inset-0'>
        <div className='bg-grid-pattern absolute inset-0 opacity-5'></div>
        <div className='absolute left-1/4 top-20 size-32 animate-float rounded-full bg-neutral-300/20 blur-2xl dark:bg-neutral-600/20'></div>
        <div className='absolute bottom-20 right-1/4 size-24 animate-float-delayed rounded-full bg-neutral-300/20 blur-2xl'></div>
      </div>

      <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <div className='mb-4 inline-flex items-center rounded-full border border-neutral-300 bg-neutral-100 px-4 py-2 backdrop-blur-sm dark:border-neutral-600 dark:bg-neutral-800'>
            <Icon
              icon='ph:monitor'
              className='mr-2 size-5 text-neutral-500 dark:text-neutral-400'
            />
            <span className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
              Frontend Showcase
            </span>
          </div>

          <h2 className='mb-6 text-4xl font-bold text-neutral-900 dark:text-white sm:text-5xl'>
            Interfaces I've{' '}
            <span className='text-blue-600 dark:text-blue-500'>Built</span>
          </h2>

          <p className='mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-400'>
            From enterprise dashboards to creative platforms — each designed
            with user experience at its core.
          </p>

          {/* Live Preview Toggle */}
          <button
            onClick={() => setLivePreviewsEnabled(!livePreviewsEnabled)}
            className={`mt-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
              livePreviewsEnabled
                ? 'border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300'
                : 'border-neutral-300 bg-neutral-100 text-neutral-600 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-400'
            } backdrop-blur-sm hover:scale-105`}
            title={`${livePreviewsEnabled ? 'Disable' : 'Enable'} live previews`}
          >
            <Icon
              icon={livePreviewsEnabled ? 'ph:eye' : 'ph:eye-slash'}
              className='size-4'
            />
            <span>Live Previews {livePreviewsEnabled ? 'ON' : 'OFF'}</span>
          </button>
        </div>

        {/* Project Selector Grid - Hidden in TLDR Mode */}
        {!isTLDRMode && (
          <div
            className={`mb-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
            {/* Horizontal Scrollable Container */}
            <div className='relative'>
              {/* Scroll Arrows */}
              <button
                onClick={scrollLeft}
                className='absolute -left-4 top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white/90 text-neutral-600 backdrop-blur-sm transition-all hover:bg-white hover:text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800/90 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white'
                title='Scroll left'
                aria-label='Scroll left'
              >
                <Icon icon='ph:caret-left-bold' className='size-5' />
              </button>
              <button
                onClick={scrollRight}
                className='absolute -right-4 top-1/2 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white/90 text-neutral-600 backdrop-blur-sm transition-all hover:bg-white hover:text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800/90 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white'
                title='Scroll right'
                aria-label='Scroll right'
              >
                <Icon icon='ph:caret-right-bold' className='size-5' />
              </button>

              <div
                ref={scrollContainerRef}
                className='flex gap-5 overflow-x-auto px-3 py-2'
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
                onScroll={(e) => setScrollPosition(e.currentTarget.scrollLeft)}
              >
                {uiProjects.map((project, index) => (
                  <button
                    key={project.title}
                    onClick={() => setActiveIndex(index)}
                    className={`group relative shrink-0 overflow-hidden rounded-2xl transition-all duration-300 ${
                      index === activeIndex
                        ? 'scale-[1.02] ring-2 ring-blue-600 ring-offset-2 ring-offset-neutral-50 dark:ring-blue-500 dark:ring-offset-neutral-950'
                        : 'ring-1 ring-neutral-200 hover:ring-neutral-300 dark:ring-neutral-700 dark:hover:ring-neutral-600'
                    }`}
                    style={{ width: '300px' }}
                    aria-label={`Select ${project.title}`}
                  >
                    {/* Project Thumbnail */}
                    <div className='relative aspect-[16/10] overflow-hidden'>
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className={`size-full object-cover transition-all duration-500 group-hover:scale-105 ${
                          index === activeIndex
                            ? 'brightness-100'
                            : 'brightness-90 group-hover:brightness-100'
                        }`}
                      />

                      {/* Bottom gradient overlay for text readability */}
                      <div className='absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/30 to-transparent' />

                      {/* Category Badge */}
                      <div className='absolute right-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-md'>
                        {project.category.split(' ')[0]}
                      </div>

                      {/* Project Info - overlaid on image */}
                      <div className='absolute inset-x-0 bottom-0 p-4'>
                        <h4 className='mb-1 truncate text-base font-semibold text-white'>
                          {project.title}
                        </h4>
                        <div className='flex items-center gap-1.5'>
                          <Icon
                            icon='ph:code-bold'
                            className='size-3.5 text-neutral-300'
                          />
                          <span className='text-xs font-medium text-neutral-300'>
                            {project.tech.slice(0, 2).join(' · ')}
                          </span>
                        </div>
                      </div>

                      {/* Active play indicator */}
                      {index === activeIndex && (
                        <div className='absolute left-3 top-3'>
                          <div className='flex items-center gap-1.5 rounded-full bg-blue-600 px-2.5 py-1 text-xs font-medium text-white'>
                            <Icon icon='ph:play-fill' className='size-3' />
                            Active
                          </div>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Main UI Showcase */}
        {isTLDRMode ? (
          // TLDR Mode - Horizontal Scrolling Row
          <div className='relative'>
            <div className='flex gap-3 overflow-x-auto pb-4'>
              {uiProjects.map((project) => (
                <div
                  key={project.title}
                  className='group shrink-0 overflow-hidden rounded-lg border border-neutral-200 bg-white transition-all dark:border-neutral-700 dark:bg-neutral-800'
                  style={{ width: '200px' }}
                >
                  {/* Project Image */}
                  <div className='relative aspect-[16/9] overflow-hidden'>
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className='size-full object-cover transition-transform duration-300 group-hover:scale-105'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent' />

                    {/* Category Badge */}
                    <div className='absolute right-1.5 top-1.5 rounded-full bg-blue-500/90 px-1.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm'>
                      {project.category.split(' ')[0]}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className='p-2'>
                    <h3 className='mb-1 text-xs font-semibold text-neutral-900 dark:text-white'>
                      {project.title}
                    </h3>
                    <p className='mb-2 text-xs text-neutral-600 dark:text-neutral-400'>
                      {project.subtitle}
                    </p>

                    {/* Tech Stack */}
                    <div className='mb-2 flex flex-wrap gap-1'>
                      {project.tech.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className='rounded-full bg-neutral-100 px-1.5 py-0.5 text-xs font-medium text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Visit Link */}
                    <a
                      href={project.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-1 text-xs font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'
                    >
                      <Icon icon='ph:arrow-square-out' className='size-3' />
                      View Site
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Full Mode - Interactive Showcase
          <div>
            {/* Large Featured Project Preview */}
            <div
              className={`space-y-6 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'} transition-all delay-200 duration-1000`}
            >
              {/* Enhanced Browser Window */}
              <div className='relative overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-800'>
                {/* Browser Chrome */}
                <div className='flex items-center gap-2 border-b border-neutral-200 bg-neutral-100 px-6 py-4 dark:border-neutral-700 dark:bg-neutral-700'>
                  <div className='flex gap-2'>
                    <div className='size-3 rounded-full bg-red-500'></div>
                    <div className='size-3 rounded-full bg-yellow-500'></div>
                    <div className='size-3 rounded-full bg-green-500'></div>
                  </div>
                  <div className='ml-4 flex flex-1 items-center gap-3'>
                    <Icon icon='ph:lock' className='size-4 text-green-600' />
                    <div className='flex-1 rounded-lg bg-neutral-50 px-4 py-2 text-sm text-neutral-600 dark:bg-neutral-600 dark:text-neutral-300'>
                      {uiProjects[activeIndex].url}
                    </div>
                    <a
                      href={uiProjects[activeIndex].url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700'
                    >
                      <Icon icon='ph:arrow-square-out' className='size-4' />
                      Visit Site
                    </a>
                  </div>
                </div>

                {/* Large Project Preview */}
                <div className='relative aspect-[16/10] overflow-hidden'>
                  <LivePreview
                    url={uiProjects[activeIndex].url}
                    title={uiProjects[activeIndex].title}
                    fallbackImage={uiProjects[activeIndex].image_url}
                    isActive={true}
                    globalEnabled={livePreviewsEnabled}
                  />
                </div>
              </div>

              {/* Project Details Card */}
              <div className='rounded-2xl border border-neutral-200 bg-white p-8 dark:border-neutral-700 dark:bg-neutral-800'>
                <div className='mb-6 flex items-start justify-between'>
                  <div>
                    <div className='mb-2 flex items-center gap-3'>
                      <h3 className='text-3xl font-bold text-neutral-900 dark:text-white'>
                        {uiProjects[activeIndex].title}
                      </h3>
                      <span className='rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300'>
                        {uiProjects[activeIndex].category}
                      </span>
                    </div>
                    <p className='text-xl text-blue-600 dark:text-blue-400'>
                      {uiProjects[activeIndex].subtitle}
                    </p>
                  </div>

                  {/* Navigation Arrows */}
                  <div className='flex gap-2'>
                    <button
                      onClick={() =>
                        setActiveIndex(
                          (prev) =>
                            (prev - 1 + uiProjects.length) % uiProjects.length,
                        )
                      }
                      className='flex size-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition-colors hover:bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-600'
                      title='Previous project'
                    >
                      <Icon icon='ph:caret-left' className='size-5' />
                    </button>
                    <button
                      onClick={() =>
                        setActiveIndex((prev) => (prev + 1) % uiProjects.length)
                      }
                      className='flex size-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition-colors hover:bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-600'
                      title='Next project'
                    >
                      <Icon icon='ph:caret-right' className='size-5' />
                    </button>
                  </div>
                </div>

                <p className='mb-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400'>
                  {uiProjects[activeIndex].description}
                </p>

                {/* Complete Tech Stack */}
                <div className='mb-6'>
                  <h4 className='mb-4 text-lg font-semibold text-neutral-900 dark:text-white'>
                    Technologies Used
                  </h4>
                  <div className='flex flex-wrap gap-3'>
                    {uiProjects[activeIndex].tech.map((tech) => (
                      <span
                        key={tech}
                        className='rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700 transition-transform hover:scale-105 dark:bg-neutral-700 dark:text-neutral-300'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Actions */}
                <div className='flex gap-4'>
                  <a
                    href={uiProjects[activeIndex].url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 rounded-lg bg-neutral-900 px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100'
                  >
                    <Icon icon='ph:arrow-square-out' className='size-5' />
                    View Live Site
                  </a>
                  <button
                    onClick={() =>
                      setActiveIndex((prev) => (prev + 1) % uiProjects.length)
                    }
                    className='flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-6 py-3 font-semibold text-neutral-700 transition-all hover:bg-neutral-50 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700'
                  >
                    <Icon icon='ph:caret-right' className='size-5' />
                    Next Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
