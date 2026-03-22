
import { Course, FacultyType, NewsItem, EventItem, Faculty } from './types';

export const FACULTIES: Faculty[] = [
  {
    id: 'science-agriculture',
    name: FacultyType.SCIENCE_AGRICULTURE,
    description: 'The Faculty of Science, Engineering and Agriculture is dedicated to excellence in teaching, research and community engagement in the fields of natural sciences, engineering and agricultural sciences.',
    dean: {
      name: 'Prof. Natasha Potgieter',
      title: 'Executive Dean',
      bio: 'Prof. Potgieter is a renowned researcher in water and health, with extensive experience in environmental microbiology.',
      imageUrl: 'https://nebworksmedia.com/wp-content/uploads/2026/02/dean-science.jpg',
      contact: {
        email: 'natasha.potgieter@univen.ac.za',
        phone: '+27 15 962 8000',
        office: 'Science Building, Block D, Room 12'
      }
    },
    departments: ['Biological Sciences', 'Chemistry', 'Mathematics', 'Physics', 'Agriculture', 'Engineering'],
    image: 'https://nebworksmedia.com/wp-content/uploads/2026/02/9.png'
  },
  {
    id: 'health-sciences',
    name: FacultyType.HEALTH_SCIENCES,
    description: 'The Faculty of Health Sciences aims to produce competent health professionals who can address the health needs of the community through innovative teaching and research.',
    dean: {
      name: 'Prof. Tshilidzi Mulaudzi',
      title: 'Executive Dean',
      bio: 'Prof. Mulaudzi is a specialist in nursing science and community health, dedicated to improving healthcare delivery in rural areas.',
      imageUrl: 'https://nebworksmedia.com/wp-content/uploads/2026/02/dean-health.jpg',
      contact: {
        email: 'tshilidzi.mulaudzi@univen.ac.za',
        phone: '+27 15 962 8100',
        office: 'Health Sciences Building, Room 205'
      }
    },
    departments: ['Nursing', 'Public Health', 'Pharmacy', 'Psychology', 'Biokinetics'],
    image: 'https://nebworksmedia.com/wp-content/uploads/2026/02/10.png'
  },
  {
    id: 'management-law',
    name: FacultyType.MANAGEMENT_LAW,
    description: 'The Faculty of Management, Commerce and Law provides high-quality education in business, economics, and legal studies, preparing students for leadership roles in various sectors.',
    dean: {
      name: 'Prof. Joseph Francis',
      title: 'Executive Dean',
      bio: 'Prof. Francis is an expert in rural development and management, with a focus on sustainable livelihoods and economic growth.',
      imageUrl: 'https://nebworksmedia.com/wp-content/uploads/2026/02/dean-management.jpg',
      contact: {
        email: 'joseph.francis@univen.ac.za',
        phone: '+27 15 962 8200',
        office: 'Management Building, Block A, Room 5'
      }
    },
    departments: ['Accounting', 'Business Management', 'Economics', 'Law', 'Public Management'],
    image: 'https://nebworksmedia.com/wp-content/uploads/2026/02/14.png'
  },
  {
    id: 'humanities',
    name: FacultyType.HUMANITIES,
    description: 'The Faculty of Humanities, Social Sciences and Education is a vibrant hub for critical thinking, artistic expression, and social research, fostering a deep understanding of human society.',
    dean: {
      name: 'Prof. Bongani Maponya',
      title: 'Executive Dean',
      bio: 'Prof. Maponya is a scholar in social sciences and education, committed to transformative pedagogy and social justice.',
      imageUrl: 'https://nebworksmedia.com/wp-content/uploads/2026/02/dean-humanities.jpg',
      contact: {
        email: 'bongani.maponya@univen.ac.za',
        phone: '+27 15 962 8300',
        office: 'Humanities Building, Room 112'
      }
    },
    departments: ['Education', 'Social Sciences', 'Languages', 'Art & Design', 'Theology'],
    image: 'https://nebworksmedia.com/wp-content/uploads/2026/03/Humanities.jpg'
  }
];

export const COURSES: Course[] = [
  {
    id: '1',
    name: 'Bachelor of Commerce in Accounting',
    faculty: FacultyType.MANAGEMENT_LAW,
    duration: '3 Years',
    description: 'Prepare for a global career in finance and professional accounting with this SAICA-accredited program.',
    apsScore: 26
  },
  {
    id: '2',
    name: 'Bachelor of Science in Agriculture',
    faculty: FacultyType.SCIENCE_AGRICULTURE,
    duration: '4 Years',
    description: 'Focus on sustainable farming, animal science, and crop production in the South African context.',
    apsScore: 24
  },
  {
    id: '3',
    name: 'Bachelor of Arts in Media Studies',
    faculty: FacultyType.HUMANITIES,
    duration: '3 Years',
    description: 'Master the tools of digital journalism, broadcasting, and strategic communication for a modern world.',
    apsScore: 22
  },
  {
    id: '4',
    name: 'Bachelor of Nursing Science',
    faculty: FacultyType.HEALTH_SCIENCES,
    duration: '4 Years',
    description: 'A comprehensive professional degree focusing on nursing education, leadership, and clinical practice.',
    apsScore: 30
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    category: 'Academics',
    title: 'UNIVEN Celebrates 2026 Autumn Graduation Ceremony',
    description: 'The university successfully conferred degrees to over 3,000 graduates this season across various faculties...',
    date: 'March 10, 2026',
    imageUrl: 'https://nebworksmedia.com/wp-content/uploads/2026/02/2.png'
  },
  {
    id: 'n2',
    category: 'Research',
    title: 'Groundbreaking Research in Sustainable Agriculture',
    description: 'Our Faculty of Science has published a new study focused on drought-resistant crop cultivation techniques...',
    date: 'March 08, 2026',
    imageUrl: 'https://nebworksmedia.com/wp-content/uploads/2026/02/5.png'
  }
];

export const EVENTS: EventItem[] = [
  {
    id: 'e1',
    day: '15',
    month: 'APR',
    title: '2026 Faculty Research Symposium',
    time: '09:00 AM - 04:00 PM',
    location: 'Main Campus',
    type: 'in-person'
  },
  {
    id: 'e2',
    day: '22',
    month: 'OCT',
    title: 'Virtual Open Day for Postgrads',
    time: 'Zoom Webinar',
    location: 'Online',
    type: 'virtual'
  },
  {
    id: 'e3',
    day: '05',
    month: 'NOV',
    title: 'Alumni Homecoming Weekend',
    time: 'Main Campus',
    location: 'Thohoyandou',
    type: 'in-person'
  }
];
