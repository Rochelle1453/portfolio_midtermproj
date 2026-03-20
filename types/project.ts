export type Project = {
  title: string;
  category?: string;
  description: string;
  tags: string[];
  image: string;
  links: {
    demo: string;
    github: string;
  };
};