import { Skill } from './Skill';


export interface Employer {
    name: string;
    shortName?: string;
    title: string;
    timeline: string;
    description: string;
    link?: string;
    location?: string;
    icon: string;
    skills?: Skill[]
}
