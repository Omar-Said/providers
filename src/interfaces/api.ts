export interface IMakePartialRepresentation {
  id: string;
  name: string;
  title: string;
  avatarUrl: string;
  bio: string;
  availabilty: string;
  location: string;
}

export interface IMakeFullRepresentation extends IMakePartialRepresentation {
  education: string;
  languages: string[];
}
