
export enum FacultyType {
  SCIENCE_AGRICULTURE = 'Science, Engineering and Agriculture',
  MANAGEMENT_LAW = 'Management, Commerce and Law',
  HUMANITIES = 'Humanities, Social Sciences and Education',
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

export interface StaffMember {
  name: string;
  role: string;
  email: string;
  imageUrl?: string;
}

export interface Module {
  code: string;
  name: string;
  credits: number;
}

export interface Programme {
  name: string;
  level: string;
  duration: string;
}

export interface Department {
  id: string;
  name: string;
  about: string;
  contact: {
    email: string;
    phone: string;
    office: string;
  };
  programmes: Programme[];
  modules: Module[];
  shortCourses: string[];
  staff: StaffMember[];
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
  departments: Department[];
  image: string;
}
