
export enum FacultyType {
  SCIENCE_AGRICULTURE = 'Science & Agriculture',
  MANAGEMENT_LAW = 'Management & Law',
  HUMANITIES = 'Humanities',
  HEALTH_SCIENCES = 'Health Sciences',
}

export interface Course {
  id: string;
  name: string;
  faculty: FacultyType;
  duration: string;
  description: string;
  apsScore: number;
}

export interface NewsItem {
  id: string;
  category: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}

export interface EventItem {
  id: string;
  day: string;
  month: string;
  title: string;
  time: string;
  location: string;
  type: 'in-person' | 'virtual';
}

export interface Faculty {
  id: string;
  name: string;
  description: string;
  dean: {
    name: string;
    title: string;
    bio: string;
    imageUrl: string;
    contact: {
      email: string;
      phone: string;
      office: string;
    };
  };
  departments: string[];
  image: string;
}
