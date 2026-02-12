
export interface TimelineItem {
  title: string;
  subtitle: string;
  date: string;
  description: string[];
}

export interface RatedItem {
  name:string;
  level: number;
}

export interface Content {
  name: string;
  title: string;
  profilePhoto: string;
  contact: {
    title: string;
    location: string;
    phone: string;
    email: string;
  };
  socials: {
    title: string;
    linkedin: string;
    github: string;
    linkedinURL: string;
    githubURL: string;
  };
  languages: {
    title: string;
    items: RatedItem[];
  };
  hobbies: {
    title: string;
    items: string[];
  };
  about: {
    title: string;
    description: string;
  };
  experience: {
    title: string;
    items: TimelineItem[];
  };
  education: {
    title: string;
    items: TimelineItem[];
  };
  skills: {
    title: string;
    items: RatedItem[];
  };
  footer: string;
  toggle: {
    lang: string;
    theme: {
      light: string;
      dark: string;
    };
  };
}

export type Language = 'en' | 'fr' | 'de';

export type ContentData = {
  [key in Language]: Content;
};
