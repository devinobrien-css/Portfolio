import { Skill } from './Skill';

/**
 * Type for a project that is hosted on GitHub.
 * @interface GithubProject
 * @property {string} title - The title of the project.
 * @property {string} description - A brief description of the project.
 * @property {string} image - The URL of the project's image.
 * @property {string[]} tags - An array of tags that describe the project.
 * @property {string} github - The URL of the project's GitHub repository.
 * @property {string} demo - The URL of the project's demo.
 * @property {Skill[]} skills - An array of skills that were used in the project.
 * @example 
 *  {
 *    title: 'Angular Sample',
 *    image: 'https://access-portfolio-images.s3.amazonaws.com/angular-bg.webp',
 *    description: 'A sample project using Angular',
 * 
 *    tags: ['Angular', 'Typescript', 'Tailwind', 'Javascript']
 *    
 *    link: 'projects?search=angular-sample',
 *    github: 'https://github.com/devinobrien-css/angular-sample',
 *    demo: 'https://angular-sample.netlify.app',
 * 
 *    skills: [
 *      { name: 'Angular', icon: 'https://access-portfolio-images.s3.amazonaws.com/angular-icon.png' },
 *    ]
 *  }
 */
export interface GithubProject {
    title: string;
    image: string;
    description: string;
    
    tags: string[];

    link?: string;
    github: string;
    demo?: string;

    skills: Skill[];
}