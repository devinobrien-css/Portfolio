import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import {
  backend_tags,
  cloud_tags,
  database_tags,
  design_tags,
  devops_tags,
  frontend_tags,
} from '../../data/github_projects';
import { projects } from '../../data/github_projects';
import { useLocation } from 'react-router-dom';
import { useTLDR } from '../../util/context/TLDRContext';
import { useSEO, pageSEO } from '../../hooks/useSEO';
interface TagProps {
  tag: string;
  isSelected: boolean;
  onClick: () => void;
}
const ModernTag = ({ tag, isSelected, onClick }: TagProps) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${isSelected ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md shadow-blue-200 dark:from-blue-600 dark:to-purple-600 dark:shadow-blue-900/10' : 'border border-slate-100 bg-white/90 text-slate-700 hover:border-blue-100 hover:bg-white hover:shadow-sm hover:shadow-blue-50 dark:border-slate-700 dark:bg-gray-800/80 dark:text-gray-300 dark:hover:border-slate-600 dark:hover:bg-gray-700'}`}
    >
      {' '}
      {tag}{' '}
    </button>
  );
};
interface ModernProjectCardProps {
  project: any;
}
const ModernProjectCard = ({ project }: ModernProjectCardProps) => {
  const { isTLDRMode } = useTLDR();
  return (
    <div className='group relative overflow-hidden rounded-2xl border border-slate-100 bg-white/90 p-6 shadow-lg backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-100/20 dark:border-slate-700 dark:bg-gray-800/80 dark:hover:border-slate-600'>
      {' '}
      {/* Project Image */}{' '}
      {project.image && (
        <div className='mb-4 overflow-hidden rounded-xl'>
          {' '}
          <img
            src={project.image}
            alt={project.title}
            className='h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110'
            loading='lazy'
          />{' '}
        </div>
      )}{' '}
      {/* Project Content */}{' '}
      <div className='space-y-4'>
        {' '}
        <div>
          {' '}
          <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
            {' '}
            {project.title}{' '}
          </h3>{' '}
          <p
            className={`text-gray-700 dark:text-gray-300 ${isTLDRMode ? 'line-clamp-2' : 'line-clamp-3'}`}
          >
            {' '}
            {project.description ||
              'A modern web application showcasing cutting-edge development practices.'}{' '}
          </p>{' '}
        </div>{' '}
        {/* Skills/Tags */}{' '}
        {project.tags && (
          <div className='flex flex-wrap gap-2'>
            {' '}
            {project.tags.slice(0, isTLDRMode ? 3 : 5).map((tag: string) => (
              <span
                key={tag}
                className='rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200'
              >
                {' '}
                {tag}{' '}
              </span>
            ))}{' '}
            {project.tags.length > (isTLDRMode ? 3 : 5) && (
              <span className='rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-400'>
                {' '}
                +{project.tags.length - (isTLDRMode ? 3 : 5)} more{' '}
              </span>
            )}{' '}
          </div>
        )}{' '}
        {/* Actions */}{' '}
        <div className='flex gap-3'>
          {' '}
          {project.github && (
            <a
              href={project.github}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600'
            >
              {' '}
              <Icon icon='ph:github-logo' className='size-4' /> Code{' '}
            </a>
          )}{' '}
          {project.demo && (
            <a
              href={project.demo}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-blue-700'
            >
              {' '}
              <Icon icon='ph:arrow-square-out' className='size-4' /> Live Demo{' '}
            </a>
          )}{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
};
export const Projects = () => {
  const location = useLocation();
  const [search, setSearch] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { isTLDRMode } = useTLDR();

  // Enhanced SEO optimization for projects
  useSEO({
    ...pageSEO.projects,
    modifiedTime: new Date().toISOString(),
    // Dynamically set keywords based on current filters
    keywords:
      selectedTags.length > 0
        ? `${selectedTags.join(', ')}, ${pageSEO.projects.keywords}`
        : pageSEO.projects.keywords,
    // Add selected category to title if not "All"
    title:
      activeCategory !== 'All'
        ? `${activeCategory} Projects | Devin O'Brien - Full Stack Development Portfolio`
        : pageSEO.projects.title,
  });
  const allTags = [
    ...frontend_tags,
    ...backend_tags,
    ...cloud_tags,
    ...database_tags,
    ...devops_tags,
    ...design_tags,
  ];
  const categories = [
    { name: 'All', tags: allTags },
    { name: 'Frontend', tags: frontend_tags },
    { name: 'Backend', tags: backend_tags },
    { name: 'Cloud', tags: cloud_tags },
    { name: 'Database', tags: database_tags },
    { name: 'DevOps', tags: devops_tags },
    { name: 'Design', tags: design_tags },
  ];
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };
  const clearAllTags = () => {
    setSelectedTags([]);
  };
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.tags?.some((tag) =>
        tag.toLowerCase().includes(search.toLowerCase()),
      );
    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => project.tags?.includes(tag));
    return matchesSearch && matchesTags;
  });
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.get('search')) {
      setSearch(queryParams.get('search') as string);
    }
    document.title = "Projects - Devin O'Brien";
  }, [location.search]);
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900'>
      {' '}
      {/* Hero Section */}{' '}
      <div className='relative overflow-hidden pb-16 pt-20'>
        {' '}
        <div className='absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 dark:from-blue-600/20 dark:via-purple-600/20 dark:to-pink-600/20'></div>{' '}
        <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          {' '}
          <div className='text-center'>
            {' '}
            <h1 className='text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl'>
              {' '}
              My Projects{' '}
            </h1>{' '}
            <p className='mx-auto mt-6 max-w-2xl text-lg text-gray-700 dark:text-gray-300'>
              {' '}
              {isTLDRMode
                ? 'A collection of my recent work showcasing modern web development.'
                : 'Explore my diverse range of projects, each a testament to my attention to detail and relentless pursuit of excellence in software development.'}{' '}
            </p>{' '}
            {/* Quick Stats */}{' '}
            <div className='mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3'>
              {' '}
              <div className='rounded-2xl bg-white/80 p-6 backdrop-blur-sm dark:bg-gray-800/80'>
                {' '}
                <div className='text-3xl font-bold text-blue-600 dark:text-blue-400'>
                  {' '}
                  {projects.length}+{' '}
                </div>{' '}
                <div className='text-sm text-gray-700 dark:text-gray-400'>
                  {' '}
                  Total Projects{' '}
                </div>{' '}
              </div>{' '}
              <div className='rounded-2xl bg-white/80 p-6 backdrop-blur-sm dark:bg-gray-800/80'>
                {' '}
                <div className='text-3xl font-bold text-green-600 dark:text-green-400'>
                  {' '}
                  {allTags.length}+{' '}
                </div>{' '}
                <div className='text-sm text-gray-700 dark:text-gray-400'>
                  {' '}
                  Technologies{' '}
                </div>{' '}
              </div>{' '}
              <div className='rounded-2xl bg-white/80 p-6 backdrop-blur-sm dark:bg-gray-800/80'>
                {' '}
                <div className='text-3xl font-bold text-purple-600 dark:text-purple-400'>
                  {' '}
                  5+{' '}
                </div>{' '}
                <div className='text-sm text-gray-700 dark:text-gray-400'>
                  {' '}
                  Years Experience{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
      {/* Main Content */}{' '}
      <div className='mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8'>
        {' '}
        {/* Search and Filter Controls */}{' '}
        <div className='my-12'>
          {' '}
          <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
            {' '}
            {/* Search Bar */}{' '}
            <div className='relative max-w-md flex-1'>
              {' '}
              <Icon
                icon='ph:magnifying-glass'
                className='absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-400'
              />{' '}
              <input
                type='text'
                placeholder='Search projects...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='w-full rounded-xl border-0 bg-white/80 py-3 pl-10 pr-4 text-gray-900 shadow-lg backdrop-blur-sm transition-all placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800/80 dark:text-white dark:placeholder:text-gray-400'
              />{' '}
            </div>{' '}
            {/* Action Buttons */}{' '}
            <div className='flex gap-3'>
              {' '}
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`flex items-center gap-2 rounded-xl px-4 py-3 font-medium transition-all ${isFilterOpen || selectedTags.length > 0 ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md dark:bg-gray-800/80 dark:text-gray-300 dark:hover:bg-gray-700'}`}
              >
                {' '}
                <Icon icon='ph:funnel' className='size-5' /> Filter{' '}
                {selectedTags.length > 0 && (
                  <span className='rounded-full bg-white/20 px-2 py-1 text-xs'>
                    {' '}
                    {selectedTags.length}{' '}
                  </span>
                )}{' '}
              </button>{' '}
              <a
                href='https://github.com/devinobrien-css'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-3 font-medium text-white transition-all hover:scale-105 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600'
              >
                {' '}
                <Icon icon='ph:github-logo' className='size-5' /> View on GitHub{' '}
              </a>{' '}
            </div>{' '}
          </div>{' '}
          {/* Filter Panel */}{' '}
          {isFilterOpen && (
            <div className='mt-6 rounded-2xl bg-white/80 p-6 backdrop-blur-sm dark:bg-gray-800/80'>
              {' '}
              <div className='mb-4 flex items-center justify-between'>
                {' '}
                <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                  {' '}
                  Filter by Technology{' '}
                </h3>{' '}
                {selectedTags.length > 0 && (
                  <button
                    onClick={clearAllTags}
                    className='text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400'
                  >
                    {' '}
                    Clear All{' '}
                  </button>
                )}{' '}
              </div>{' '}
              {/* Category Tabs */}{' '}
              <div className='mb-6 flex flex-wrap gap-2'>
                {' '}
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${activeCategory === category.name ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'}`}
                  >
                    {' '}
                    {category.name}{' '}
                  </button>
                ))}{' '}
              </div>{' '}
              {/* Tag Filters */}{' '}
              <div className='flex flex-wrap gap-2'>
                {' '}
                {categories
                  .find((cat) => cat.name === activeCategory)
                  ?.tags.map((tag) => (
                    <ModernTag
                      key={tag}
                      tag={tag}
                      isSelected={selectedTags.includes(tag)}
                      onClick={() => toggleTag(tag)}
                    />
                  ))}{' '}
              </div>{' '}
            </div>
          )}{' '}
          {/* Active Filters */}{' '}
          {selectedTags.length > 0 && (
            <div className='mt-4 flex flex-wrap items-center gap-2'>
              {' '}
              <span className='text-sm text-gray-700 dark:text-gray-300'>
                {' '}
                Active filters:{' '}
              </span>{' '}
              {selectedTags.map((tag) => (
                <span
                  key={tag}
                  className='flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                >
                  {' '}
                  {tag}{' '}
                  <button
                    onClick={() => toggleTag(tag)}
                    className='hover:text-blue-600'
                  >
                    {' '}
                    <Icon icon='ph:x' className='size-3' />{' '}
                  </button>{' '}
                </span>
              ))}{' '}
            </div>
          )}{' '}
        </div>{' '}
        {/* Projects Grid */}{' '}
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {' '}
          {filteredProjects.map((project) => (
            <ModernProjectCard key={project.title} project={project} />
          ))}{' '}
        </div>{' '}
        {/* Empty State */}{' '}
        {filteredProjects.length === 0 && (
          <div className='py-20 text-center'>
            {' '}
            <Icon
              icon='ph:folder-open'
              className='mx-auto size-16 text-gray-400 dark:text-gray-600'
            />{' '}
            <h3 className='mt-4 text-lg font-semibold text-gray-900 dark:text-white'>
              {' '}
              No projects found{' '}
            </h3>{' '}
            <p className='mt-2 text-gray-600 dark:text-gray-400'>
              {' '}
              Try adjusting your search or filter criteria.{' '}
            </p>{' '}
            <button
              onClick={() => {
                setSearch('');
                setSelectedTags([]);
                setActiveCategory('All');
              }}
              className='mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700'
            >
              {' '}
              Clear all filters{' '}
            </button>{' '}
          </div>
        )}{' '}
        {/* CTA Section */}{' '}
        <div className='mt-20 text-center'>
          {' '}
          <div className='rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-8 text-white shadow-2xl'>
            {' '}
            <h3 className='mb-4 text-2xl font-bold sm:text-3xl'>
              {' '}
              Ready to start your next project?{' '}
            </h3>{' '}
            <p className='mb-6 text-lg text-blue-100'>
              {' '}
              {isTLDRMode
                ? "Let's discuss how I can help bring your ideas to life."
                : "I'm always excited to take on new challenges and collaborate on innovative solutions. Let's discuss how my expertise can help bring your ideas to life."}{' '}
            </p>{' '}
            <div className='flex flex-col gap-4 sm:flex-row sm:justify-center'>
              {' '}
              <a
                href="mailto:devinobrien@icloud.com?subject=Project%20Inquiry&body=Hi%20Devin,%0D%0A%0D%0AI'm%20interested%20in%20discussing%20a%20project%20with%20you."
                className='group relative overflow-hidden rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 transition-all hover:scale-105 hover:bg-gray-100 hover:shadow-lg'
              >
                {' '}
                <span className='relative z-10 flex items-center gap-2'>
                  {' '}
                  <Icon icon='ph:chat-circle' className='size-5' /> Start a
                  Project{' '}
                </span>{' '}
              </a>{' '}
              <a
                href='https://github.com/devinobrien-css'
                target='_blank'
                rel='noopener noreferrer'
                className='group rounded-lg border-2 border-white/30 px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:border-white hover:bg-white/10'
              >
                {' '}
                <span className='flex items-center gap-2'>
                  {' '}
                  <Icon icon='ph:github-logo' className='size-5' /> View More on
                  GitHub{' '}
                </span>{' '}
              </a>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
};
