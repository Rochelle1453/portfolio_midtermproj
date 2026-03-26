export type Project = {
  id: string;
  title: string;
  category?: string;
  description: string;
  tags: string[];
  image: string;
  links: {
    github: string;
  };
};