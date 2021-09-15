export interface Project {
  name: string;
  project: {
    url: string;
    content: {
      title: string;
      description: string;
    };
  };
}
